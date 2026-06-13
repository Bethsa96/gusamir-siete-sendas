function crearEstadoInicial() {
    return {
        escenaActual: "acto1_inicio",
        dia: 1,
        periodo: "Mañana",
        puntosPeriodo: 0,
        energia: 80,
        valor: 0,
        vinculo: 0,
        edad: 29,
        trigesimoInviernoCelebrado: false,
        inventario: [],
        flores: [],
        cartas: [],
        diario: [],
        eventos: [],
        agotado: false,
        ultimoLugarSeguro: "acto1_inicio",
        vorianVentaja: 0,
        logros: [],
        mapa: ["Vega Serena"],
        actosCompletados: []
    };
}

let estado = crearEstadoInicial();