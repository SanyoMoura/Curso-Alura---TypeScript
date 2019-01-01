System.register([], function (exports_1, context_1) {
    "use strict";
    var Negociacoes;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Negociacoes = class Negociacoes {
                constructor() {
                    this._negociacoes = [];
                }
                get array() {
                    return [].concat(this._negociacoes);
                }
                adiciona(negociacao) {
                    this._negociacoes.push(negociacao);
                }
                apaga() {
                    this._negociacoes = [];
                }
                ordena() {
                    this._negociacoes.sort();
                }
                inverteOrdem() {
                    this._negociacoes.reverse();
                }
                toString() {
                    console.log('-- Negociacoes.toString() --');
                    this._negociacoes.forEach(negociacao => negociacao.toString());
                }
                isEqual(negociacoes) {
                    return JSON.stringify(this._negociacoes) === JSON.stringify(negociacoes.array);
                }
            };
            exports_1("Negociacoes", Negociacoes);
        }
    };
});
