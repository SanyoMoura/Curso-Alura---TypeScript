// import { logarTempoDeExecucao } from "../helpers/decorators/index";
import { domInject, throttle } from "../helpers/decorators/index";
import { print } from "../helpers/index";
import { Negociacao, Negociacoes } from "../models/index";
import { NegociacoesView, MensagemView } from "../views/index";
import { NegociacaoService } from "../services/index";

enum DiaDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}

export default class NegociacaoController {

    @domInject('#data')
    private _inputData: JQuery; // HTMLInputElement;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery; // HTMLInputElement;

    @domInject('#valor')
    private _inputValor: JQuery; // HTMLInputElement;

    private _negociacoes: Negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');
    private _service = new NegociacaoService();

    constructor() {
        // let $ = document.querySelector.bind(document);
        /*
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        */
        this._negociacoesView.update(this._negociacoes);
    }

    private _ehDiaUtil(data: Date) {
        return data.getDay() != DiaDaSemana.Domingo && data.getDay() != DiaDaSemana.Sabado;
    }

    // @logarTempoDeExecucao()
    @throttle()
    adiciona() {
        let data = new Date(this._inputData.val().toString().replace(/-/g, '/'));

        if (!this._ehDiaUtil(data)) {
            this._mensagemView.update("Só é permitido incluir negociação em dias úteis.");
            return;
        }

        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val().toString()),
            parseFloat(this._inputValor.val().toString())
        );

        if (this._negociacoes.array.some(jaExistente => negociacao.isEqual(jaExistente)))
            this._mensagemView.update('Negociação já existente.');
        else {
            this._negociacoes.adiciona(negociacao);
            this._negociacoesView.update(this._negociacoes);
            this._mensagemView.update('Negociação adicionada com sucesso!');

            print(this._negociacoes);
        }
    }


    @throttle()
    importa() {
        this._service.obterNegociacoes(response => {
            if (!response.ok) 
                throw new Error(response.statusText);
            return response;
            })
            .then(newNegociacoes => {
                newNegociacoes
                    .filter(negociacao =>
                        !this._negociacoes.array.some(jaImportada => negociacao.isEqual(jaImportada)))
                    .forEach(negociacao => this._negociacoes.adiciona(negociacao));

                this._negociacoesView.update(this._negociacoes);
            })
            .catch((err: Error) => {
                this._mensagemView.update('Não foi possível importar os dados.');
                console.log(err.message);
            });
    }
}