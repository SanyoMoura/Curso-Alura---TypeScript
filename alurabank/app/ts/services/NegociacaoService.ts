import { Negociacao, NegociacaoParcial } from "../models/index";

export interface HaldlerFunction {
    (response: Response): Response;
}

export class NegociacaoService {

    async obterNegociacoes(handler: HaldlerFunction): Promise<Negociacao[]> {

        try {
            const response_1 = await fetch('http://localhost:8080/dados');
            const response_2 = handler(response_1);
            const dados: NegociacaoParcial[] = await response_2.json();
            return dados.map(dado => new Negociacao(new Date(), dado.vezes, parseFloat((dado.montante / dado.vezes).toFixed(2))));
        } catch (err) {
            console.log(err.message);
            throw new Error('Não foi possível importar as negociações.');
        }
    }
    /*
    obterNegociacoes(handler: HaldlerFunction): Promise<Negociacao[]> {

        return fetch('http://localhost:8080/dados')
            .then(response => handler(response))
            .then(response => response.json())
            .then((dados: NegociacaoParcial[]) => dados
                .map(dado => new Negociacao(new Date(), dado.vezes, parseFloat((dado.montante / dado.vezes).toFixed(2))))
            )
            .catch(err => {
                console.log(err.message);
                throw new Error('Não foi possível importar as negociações.');
            });
    }
    */
}