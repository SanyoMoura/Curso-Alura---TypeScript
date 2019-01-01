// import { logarTempoDeExecucao } from "../helpers/decorators/index";

export abstract class View<T> {
    private _element: JQuery;

    constructor(selector: string, private _escape?: boolean) {
        this._element = $(selector);
    }

    abstract template(model: T): string
    
    // @logarTempoDeExecucao()
    update(model: T): void {
        let template = this.template(model);

        if (this._escape)
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        this._element.html(template);
    }
}