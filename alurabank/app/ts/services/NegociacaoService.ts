import { Negociacao, NegociacaoParcial } from "../models/index";

export interface HaldlerFunction {
    (response: Response): Response;
}

export class NegociacaoService {

    async obterNegociacoes(handler: HaldlerFunction): Promise<Negociacao[]> {

        return fetch('http://localhost:8080/dados')
            .then(response => handler(response))
            .then(response => response.json())
            .then((dados: NegociacaoParcial[]) => dados
                .map(dado => new Negociacao(new Date(), dado.vezes, parseFloat((dado.montante / dado.vezes).toFixed(2))))
            );
            //.catch(err => console.log(err.message));
    }
}