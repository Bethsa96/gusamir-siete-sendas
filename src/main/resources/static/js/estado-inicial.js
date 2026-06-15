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
        escenaHistoriaActual: "acto1_inicio",
        ubicacionActual: "Vega Serena",
        ubicacionHistoriaActual: "Vega Serena",
        vorianVentaja: 0,
        logros: [],
        mapa: ["Vega Serena"],
        actosCompletados: []
    };
}

let estado = crearEstadoInicial();