System.register([], function (exports_1, context_1) {
    "use strict";
    var View;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(selector, _escape) {
                    this._escape = _escape;
                    this._element = $(selector);
                }
                update(model) {
                    let template = this.template(model);
                    if (this._escape)
                        template = template.replace(/<script>[\s\S]*?<\/script>/, '');
                    this._element.html(template);
                }
            };
            exports_1("View", View);
        }
    };
});
