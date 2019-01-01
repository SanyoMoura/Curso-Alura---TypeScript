import NegociacaoController from "./controllers/NegociacaoController";

const controller = new NegociacaoController();

$('.form').submit(controller.adiciona.bind(controller));
$('#botao-importa').click(controller.importa.bind(controller));
/*
document
    .querySelector('.form')
    .addEventListener('submit', controler.adiciona.bind(controler));
*/