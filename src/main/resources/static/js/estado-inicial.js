function crearEstadoInicial() {
    return {
        escenaActual: "acto1_inicio",
        dia: 1,
        periodo: "Mañana",
        puntosPeriodo: 0,
        energia: 100,
        valor: 0,
        vinculo: 0,
        inventario: [],
        flores: [],
        cartas: [],
        diario: [],
        eventos: [],
        ultimoLugarSeguro: "acto1_inicio",
        logros: [],
        mapa: ["Vega Serena"],
        actosCompletados: []
    };
}

let estado = crearEstadoInicial();