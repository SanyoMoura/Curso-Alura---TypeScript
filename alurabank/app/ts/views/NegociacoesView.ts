import { View } from "./View";
import { Negociacoes } from "../models/Negociacoes";

export class NegociacoesView extends View<Negociacoes> {
    /*
    constructor(selector: string) {
        super(selector);
        this._element.addEventListener('click', event: Event => {
            if (event.target.nodeName == 'TH')
                currentInstance().ordena(event.target.textContent.toLowerCase());
        });
    }
    */

    template(model: Negociacoes): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.array.map(negociacao => `
                        <tr>
                            <td>${negociacao.data.getDate()}/${negociacao.data.getMonth()+1}/${negociacao.data.getFullYear()}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.volume}</td>
                        </tr>`
                    ).join('')}
                </tbody>
                <tfoot>
                    <td colspan="3"></td>
                    <td>
                        ${model.array.reduce((total, negociacao) => total + negociacao.volume, 0.0)}
                    </td>
                </tfoot>
            </table>`;
    }
}