import { Printable, Equable } from "./index";

export class Negociacao implements Printable, Equable<Negociacao> {

    /*
    constructor(private _data: Date, private _quantidade: number, private _valor: number) {}

    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
    */

    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {}

    get volume() {
        return parseFloat((this.quantidade * this.valor).toFixed(2));
    }

    toString(): void {
        console.log('-- Negociacao.toString() --');
        console.log(`
            Data: ${this.data}
            Quantidade: ${this.quantidade}, 
            Valor: ${this.valor}, 
            Volume: ${this.volume}`
        );        
    }

    isEqual(negociacao: Negociacao): boolean {
        return this.data.toDateString() === negociacao.data.toDateString()
            && this.quantidade === negociacao.quantidade
            && this.valor === negociacao.valor;
    }
}