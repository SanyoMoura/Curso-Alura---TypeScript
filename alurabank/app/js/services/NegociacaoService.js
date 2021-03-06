System.register(["../models/index"], function (exports_1, context_1) {
    "use strict";
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var index_1, NegociacaoService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            NegociacaoService = class NegociacaoService {
                obterNegociacoes(handler) {
                    return __awaiter(this, void 0, void 0, function* () {
                        try {
                            const response_1 = yield fetch('http://localhost:8080/dados');
                            const response_2 = handler(response_1);
                            const dados = yield response_2.json();
                            return dados.map(dado => new index_1.Negociacao(new Date(), dado.vezes, parseFloat((dado.montante / dado.vezes).toFixed(2))));
                        }
                        catch (err) {
                            console.log(err.message);
                            throw new Error('Não foi possível importar as negociações.');
                        }
                    });
                }
            };
            exports_1("NegociacaoService", NegociacaoService);
        }
    };
});
