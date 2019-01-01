import { View } from "./View";

export class MensagemView extends View<String> {
    
    template(model: string) {
        return model ? `<p class="alert alert-info">${model}</p>` : `<p></p>`;
    }
}