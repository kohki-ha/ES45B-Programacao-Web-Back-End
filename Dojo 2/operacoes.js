const express = require('express')

const router = express.Router()


function adicao(a, b) {
    return a + b
}

function subtracao(a, b) {
    return a - b
}

function multiplicacao(a, b) {
    return a * b
}

function divisao(a, b) {
    if (b === 0) {
        return "Erro: divisao por zero!"
    }

    return a / b
}

function criarRotaSend(mensagem) {
    return (req, res) => {
        res.send(mensagem)
    }
}

function criarRotaPost(calcular) {
    return (req, res) => {
        const {a, b} = req.body

        res.json({
            resultado: calcular(a, b)
        })
    }
}


router.get('/adicao', criarRotaSend('Você está na rota adição'))
router.post('/adicao', criarRotaPost(adicao))

router.get('/subtracao', criarRotaSend('Você está na rota subtração!'))
router.post('/subtracao', criarRotaPost(subtracao))

router.get('/multiplicacao', criarRotaSend('Você está na rota multiplicação!'))
router.post('/multiplicacao', criarRotaPost(multiplicacao))

router.get('/divisao', criarRotaSend('Você está na rota divisão!'))
router.post('/divisao', criarRotaPost(divisao))


module.exports = {
    router,
    adicao,
    subtracao,
    multiplicacao,
    divisao
}