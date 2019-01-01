import { Negociacao, MyObject } from "./index";

export class Negociacoes implements MyObject<Negociacoes> {
    // private _negociacoes: Array<Negociacao> = [];
    private _negociacoes: Negociacao[] = [];    // maneira mais elegante que acima

    get array(): Negociacao[] {
        return ([] as Negociacao[]).concat(this._negociacoes);
    }

    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    apaga(): void {
        this._negociacoes = [];
    }

    ordena(): void {
        this._negociacoes.sort();
    }

    inverteOrdem(): void {
        this._negociacoes.reverse();
    }

    toString(): void {
        console.log('-- Negociacoes.toString() --');
        this._negociacoes.forEach(negociacao => negociacao.toString());
    }

    isEqual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this._negociacoes) === JSON.stringify(negociacoes.array);
    }
}