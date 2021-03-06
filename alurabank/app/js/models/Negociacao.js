System.register([], function (exports_1, context_1) {
    "use strict";
    var Negociacao;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Negociacao = class Negociacao {
                constructor(data, quantidade, valor) {
                    this.data = data;
                    this.quantidade = quantidade;
                    this.valor = valor;
                }
                get volume() {
                    return parseFloat((this.quantidade * this.valor).toFixed(2));
                }
                toString() {
                    console.log('-- Negociacao.toString() --');
                    console.log(`
            Data: ${this.data}
            Quantidade: ${this.quantidade}, 
            Valor: ${this.valor}, 
            Volume: ${this.volume}`);
                }
                isEqual(negociacao) {
                    return this.data.toDateString() === negociacao.data.toDateString()
                        && this.quantidade === negociacao.quantidade
                        && this.valor === negociacao.valor;
                }
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});
