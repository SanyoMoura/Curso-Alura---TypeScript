System.register(["../helpers/decorators/index", "../helpers/index", "../models/index", "../views/index", "../services/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var index_1, index_2, index_3, index_4, index_5, DiaDaSemana, NegociacaoController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (index_4_1) {
                index_4 = index_4_1;
            },
            function (index_5_1) {
                index_5 = index_5_1;
            }
        ],
        execute: function () {
            (function (DiaDaSemana) {
                DiaDaSemana[DiaDaSemana["Domingo"] = 0] = "Domingo";
                DiaDaSemana[DiaDaSemana["Segunda"] = 1] = "Segunda";
                DiaDaSemana[DiaDaSemana["Terca"] = 2] = "Terca";
                DiaDaSemana[DiaDaSemana["Quarta"] = 3] = "Quarta";
                DiaDaSemana[DiaDaSemana["Quinta"] = 4] = "Quinta";
                DiaDaSemana[DiaDaSemana["Sexta"] = 5] = "Sexta";
                DiaDaSemana[DiaDaSemana["Sabado"] = 6] = "Sabado";
            })(DiaDaSemana || (DiaDaSemana = {}));
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_3.Negociacoes();
                    this._negociacoesView = new index_4.NegociacoesView('#negociacoesView');
                    this._mensagemView = new index_4.MensagemView('#mensagemView');
                    this._service = new index_5.NegociacaoService();
                    this._negociacoesView.update(this._negociacoes);
                }
                _ehDiaUtil(data) {
                    return data.getDay() != DiaDaSemana.Domingo && data.getDay() != DiaDaSemana.Sabado;
                }
                adiciona() {
                    let data = new Date(this._inputData.val().toString().replace(/-/g, '/'));
                    if (!this._ehDiaUtil(data)) {
                        this._mensagemView.update("Só é permitido incluir negociação em dias úteis.");
                        return;
                    }
                    const negociacao = new index_3.Negociacao(data, parseInt(this._inputQuantidade.val().toString()), parseFloat(this._inputValor.val().toString()));
                    if (this._negociacoes.array.some(jaExistente => negociacao.isEqual(jaExistente)))
                        this._mensagemView.update('Negociação já existente.');
                    else {
                        this._negociacoes.adiciona(negociacao);
                        this._negociacoesView.update(this._negociacoes);
                        this._mensagemView.update('Negociação adicionada com sucesso!');
                        index_2.print(this._negociacoes);
                    }
                }
                importa() {
                    return __awaiter(this, void 0, void 0, function* () {
                        try {
                            const newNegociacoes = yield this._service
                                .obterNegociacoes(response => {
                                if (!response.ok)
                                    throw new Error(response.statusText);
                                return response;
                            });
                            newNegociacoes
                                .filter(negociacao => !this._negociacoes.array.some(jaImportada => negociacao.isEqual(jaImportada)))
                                .forEach(negociacao => this._negociacoes.adiciona(negociacao));
                            this._negociacoesView.update(this._negociacoes);
                        }
                        catch (err) {
                            this._mensagemView.update(err.message);
                        }
                    });
                }
            };
            __decorate([
                index_1.domInject('#data')
            ], NegociacaoController.prototype, "_inputData", void 0);
            __decorate([
                index_1.domInject('#quantidade')
            ], NegociacaoController.prototype, "_inputQuantidade", void 0);
            __decorate([
                index_1.domInject('#valor')
            ], NegociacaoController.prototype, "_inputValor", void 0);
            __decorate([
                index_1.throttle()
            ], NegociacaoController.prototype, "adiciona", null);
            __decorate([
                index_1.throttle()
            ], NegociacaoController.prototype, "importa", null);
            exports_1("default", NegociacaoController);
        }
    };
});
