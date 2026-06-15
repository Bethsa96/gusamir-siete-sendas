const destinosViaje = {
    "Vega Serena": {
        escena: "viaje_vega_serena"
    },
    "Aldea del Primer Sol": {
        escena: "viaje_aldea_primer_sol"
    },
    "Llanuras del Alba": {
        escena: "viaje_llanuras_alba"
    },
    "Bosque de los Dos Guardianes": {
        escena: "viaje_bosque_guardianes"
    },
    "Paso de la Cabra Gris": {
        escena: "viaje_paso_cabra_gris"
    },
    "Ruinas del Valle Rojo": {
        escena: "viaje_ruinas_valle_rojo"
    },
    "Torre del Eco Perdido": {
        escena: "viaje_torre_eco"
    }
};

const tiemposViaje = {
    "Vega Serena": {
        "Aldea del Primer Sol": 1,
        "Llanuras del Alba": 2,
        "Bosque de los Dos Guardianes": 3,
        "Paso de la Cabra Gris": 4,
        "Ruinas del Valle Rojo": 5,
        "Torre del Eco Perdido": 6
    },

    "Aldea del Primer Sol": {
        "Vega Serena": 1,
        "Llanuras del Alba": 1,
        "Bosque de los Dos Guardianes": 2,
        "Paso de la Cabra Gris": 3,
        "Ruinas del Valle Rojo": 4,
        "Torre del Eco Perdido": 5
    },

    "Llanuras del Alba": {
        "Vega Serena": 2,
        "Aldea del Primer Sol": 1,
        "Bosque de los Dos Guardianes": 1,
        "Paso de la Cabra Gris": 2,
        "Ruinas del Valle Rojo": 3,
        "Torre del Eco Perdido": 4
    },

    "Bosque de los Dos Guardianes": {
        "Vega Serena": 3,
        "Aldea del Primer Sol": 2,
        "Llanuras del Alba": 1,
        "Paso de la Cabra Gris": 1,
        "Ruinas del Valle Rojo": 2,
        "Torre del Eco Perdido": 3
    },

    "Paso de la Cabra Gris": {
        "Vega Serena": 4,
        "Aldea del Primer Sol": 3,
        "Llanuras del Alba": 2,
        "Bosque de los Dos Guardianes": 1,
        "Ruinas del Valle Rojo": 1,
        "Torre del Eco Perdido": 2
    },

    "Ruinas del Valle Rojo": {
        "Vega Serena": 5,
        "Aldea del Primer Sol": 4,
        "Llanuras del Alba": 3,
        "Bosque de los Dos Guardianes": 2,
        "Paso de la Cabra Gris": 1,
        "Torre del Eco Perdido": 1
    },

    "Torre del Eco Perdido": {
        "Vega Serena": 10,
        "Aldea del Primer Sol": 9,
        "Llanuras del Alba": 7,
        "Bosque de los Dos Guardianes": 6,
        "Paso de la Cabra Gris": 4,
        "Ruinas del Valle Rojo": 2
    }
};


function obtenerTiempoViaje(destino) {
    const origen = estado.ubicacionActual;

    if (origen === destino) {
        return 0;
    }

    if (tiemposViaje[origen] && tiemposViaje[origen][destino]) {
        return tiemposViaje[origen][destino];
    }

    return 5;
}

const escenasViaje = {
    viaje_mapa: {
        titulo: "Mapa de viaje",
        texto: `Gusamir abre el mapa.

Los caminos recorridos aparecen marcados con líneas torcidas, manchas de barro y alguna anotación de Brumli que nadie pidió.

Cada viaje consume tiempo.

Y el tiempo, como siempre, parece estar del lado de Vorian.`,
        opciones: () => {
            const opciones = [];

            estado.mapa.forEach(zona => {
                if (destinosViaje[zona]) {
                    opciones.push({
                        texto: `Viajar a ${zona} (${obtenerTiempoViaje(zona)} tiempo)`,
                        accion: () => {
                            const tiempo = obtenerTiempoViaje(zona);

                            avanzarTiempo(tiempo);
                            aumentarVentajaVorian(tiempo);
                            establecerUbicacion(zona);
                            marcarLugarSeguro(destinosViaje[zona].escena);
                        },
                        siguiente: destinosViaje[zona].escena
                    });
                }
            });

            opciones.push({
                texto: "Cerrar mapa",
                volverMenuAventura: true
            });

            return opciones;
        }
    },

    viaje_vega_serena: {
        titulo: "Vega Serena",
        texto: `Gusamir regresa a Vega Serena.

Las praderas siguen tranquilas.

El molino gira despacio.

A lo lejos está su casa.

Todo parece más pequeño que al principio del viaje.

O quizá Gusamir ya no mira igual.`,
        opciones: [
            {
                texto: "Volver a casa de Gusamir",
                siguiente: "viaje_casa_gusamir"
            },
            {
                texto: "Explorar la pradera",
                siguiente: "viaje_explorar_vega"
            },
            {
                texto: "Continuar la historia",
                accion: () => continuarHistoria()
            },
            {
                texto: "Abrir el mapa",
                siguiente: "viaje_mapa"
            }
        ]
    },

    viaje_casa_gusamir: {
        titulo: "Casa de Gusamir",
        texto: () => tieneObjeto("Moneda antigua")
            ? `Gusamir vuelve a su casa.

Todo está como lo dejó.

Debajo de la cama ya no hay moneda antigua.

Solo polvo.

Y una pelusa que parece haber tomado posesión del lugar.`
            : `Gusamir vuelve a su casa.

La habitación está tranquila.

Debajo de la cama sigue habiendo polvo, pelusas y una moneda antigua que quizá debería haber recogido antes.`,
        opciones: [
            {
                texto: "Recoger la moneda antigua",
                condicion: () => !tieneObjeto("Moneda antigua") && !tieneEvento("moneda_recogida_casa"),
                accion: () => {
                    agregarObjeto("Moneda antigua");
                    registrarEvento("moneda_recogida_casa");
                    agregarEntradaDiario(
                        "Moneda antigua",
                        "He vuelto a casa y he recogido la moneda antigua. A veces los objetos importantes están debajo de la cama."
                    );
                },
                siguiente: "viaje_casa_gusamir"
            },
            {
                texto: "Descansar un rato",
                accion: () => {
                    recuperarEnergia(30);
                    avanzarTiempo(2);
                },
                siguiente: "viaje_casa_gusamir"
            },
            {
                texto: "Volver a Vega Serena",
                siguiente: "viaje_vega_serena"
            }
        ]
    },

    viaje_explorar_vega: {
        titulo: "Explorar Vega Serena",
        texto: () => tieneEvento("cofre_vega_explorado")
            ? `Gusamir recorre la pradera.

No encuentra nada nuevo.

Solo hierba, viento y la sensación de que ya ha revisado demasiadas piedras.`
            : `Gusamir explora la pradera.

Cerca de un árbol encuentra un cofre pequeño casi cubierto por hierba.

No parece épico.

Pero los cofres pequeños también tienen derecho a decepcionar.`,
        opciones: [
            {
                texto: "Abrir el cofre pequeño",
                condicion: () => !tieneEvento("cofre_vega_explorado"),
                accion: () => {
                    registrarEvento("cofre_vega_explorado");
                    agregarObjeto("Cuchara sospechosamente normal");
                    agregarEntradaDiario(
                        "Cuchara sospechosa",
                        "He encontrado una cuchara sospechosamente normal en un cofre. No sé si es inútil o demasiado útil para entenderlo todavía."
                    );
                },
                siguiente: "viaje_explorar_vega"
            },
            {
                texto: "Volver",
                siguiente: "viaje_vega_serena"
            }
        ]
    },

    viaje_aldea_primer_sol: {
        titulo: "Aldea del Primer Sol",
        texto: `Gusamir llega a la Aldea del Primer Sol.

La plaza sigue llena de vida.

La taberna continúa abierta.

Y, como suele ocurrir en los pueblos importantes, todo el mundo parece saber algo antes que él.`,
        opciones: [
            {
                texto: "Ir a la plaza",
                siguiente: "viaje_plaza_aldea"
            },
            {
                texto: "Ir a la taberna",
                siguiente: "viaje_taberna_aldea"
            },
            {
                texto: "Continuar la historia",
                accion: () => continuarHistoria()
            },
            {
                texto: "Abrir el mapa",
                siguiente: "viaje_mapa"
            }
        ]
    },

    viaje_plaza_aldea: {
        titulo: "Plaza de la Aldea del Primer Sol",
        texto: () => {
            if (tieneEvento("pista_trigesimo_invierno") || estado.trigesimoInviernoCelebrado) {
                return `La plaza de la Aldea del Primer Sol está llena de vida.

Ahora que Gusamir entiende lo del Trigésimo Invierno, cada puesto parece tener una posible pista.

La panadería.

El puesto de provisiones.

Y, quizá , el mercader viajero.`;
            }

            return `La plaza de la Aldea del Primer Sol está tranquila.

Hay vecinos hablando junto a la fuente.

Un puesto vende manzanas.

Y la taberna sigue siendo el centro evidente de cualquier decisión importante.

Todavía no hay nada aquí que Gusamir entienda como parte de una misión mayor.`;
        },
        opciones: [
            {
                texto: "Comprar una manzana roja",
                condicion: () => !tieneEvento("pista_trigesimo_invierno") && !estado.trigesimoInviernoCelebrado,
                accion: () => agregarObjeto("Manzana roja"),
                siguiente: "viaje_plaza_aldea"
            },
            {
                texto: "Buscar preparativos del Trigésimo Invierno",
                condicion: () => tieneEvento("pista_trigesimo_invierno") || estado.trigesimoInviernoCelebrado,
                siguiente: "acto6_plaza_aldea"
            },
            {
                texto: "Volver a la aldea",
                siguiente: "viaje_aldea_primer_sol"
            },
            {
                texto: "Continuar la historia",
                siguiente: () => estado.escenaHistoriaActual
            }
        ]
    },

    viaje_taberna_aldea: {
        titulo: "Taberna del Alba",
        texto: () => {
            if (estado.trigesimoInviernoCelebrado || tieneEvento("pista_trigesimo_invierno")) {
                return `La Taberna del Alba huele a pan caliente y secretos antiguos.

El tabernero limpia una jarra.

"Si vienes por el Trigésimo Invierno, ya sabes dónde preguntar."`;
            }

            return `La Taberna del Alba está cálida y llena de voces.

El tabernero saluda a Gusamir como si nada raro hubiera pasado todavía.

Lo cual, considerando el viaje, resulta casi ofensivo.`;
        },
        opciones: [
            {
                texto: "Preguntar por el Trigésimo Invierno",
                condicion: () => estado.trigesimoInviernoCelebrado || tieneEvento("pista_trigesimo_invierno"),
                siguiente: "acto6_mision_cumple"
            },
            {
                texto: "Descansar en la taberna",
                accion: () => {
                    dormirEnTabernaHastaManana();
                    marcarLugarSeguro("viaje_taberna_aldea");
                },
                siguiente: "viaje_taberna_aldea"
            },
            {
                texto: "Volver a la aldea",
                siguiente: "viaje_aldea_primer_sol"
            },
            {
                texto: "Continuar la historia",
                siguiente: () => estado.escenaHistoriaActual
            }
        ]
    },

    viaje_llanuras_alba: {
        titulo: "Llanuras del Alba",
        texto: `Las Llanuras del Alba siguen abiertas y ventosas.

El puente del orco queda a lo lejos.

Algunas huellas viejas permanecen marcadas en el barro.

Brumli mira alrededor.

"Mucho espacio. Poca cobertura. Mal diseño defensivo."`,
        opciones: [
            {
                texto: "Explorar las llanuras",
                siguiente: "viaje_explorar_llanuras"
            },
            {
                texto: "Buscar al orco del puente",
                siguiente: "viaje_orco_puente"
            },
            {
                texto: "Continuar la historia",
                accion: () => continuarHistoria()
            },
            {
                texto: "Abrir el mapa",
                siguiente: "viaje_mapa"
            }
        ]
    },

    viaje_explorar_llanuras: {
        titulo: "Explorar las Llanuras",
        texto: () => tieneEvento("cofre_llanuras_explorado")
            ? `Gusamir revisa las llanuras.

Encuentra hierba, piedras y la certeza de que ya abrió el cofre interesante.`
            : `Entre la hierba alta, Gusamir encuentra un cofre abollado.

Al abrirlo, dentro hay un botón dorado.

Brumli lo mira.

"Eso perteneció a alguien elegante o a alguien que perdió un botón."`,
        opciones: [
            {
                texto: "Guardar el botón dorado",
                condicion: () => !tieneEvento("cofre_llanuras_explorado"),
                accion: () => {
                    registrarEvento("cofre_llanuras_explorado");
                    agregarObjeto("Botón dorado");
                },
                siguiente: "viaje_explorar_llanuras"
            },
            {
                texto: "Volver a las llanuras",
                siguiente: "viaje_llanuras_alba"
            }
        ]
    },

    viaje_orco_puente: {
        titulo: "El puente del orco",
        texto: `El orco del puente sigue allí.

Esta vez está sentado con una manta sobre los hombros.

"Ah. Tú otra vez."

Mira a Gusamir.

"¿Traes manzana?"`,
        opciones: [
            {
                texto: "Darle una manzana roja",
                condicion: () => tieneObjeto("Manzana roja"),
                accion: () => {
                    quitarObjeto("Manzana roja");
                    registrarEvento("orco_segunda_manzana");
                    agregarObjeto("Piedra con forma de patata");
                },
                siguiente: "viaje_orco_manzana"
            },
            {
                texto: "No tienes manzana",
                condicion: () => !tieneObjeto("Manzana roja"),
                siguiente: "viaje_orco_sin_manzana"
            },
            {
                texto: "Volver",
                siguiente: "viaje_llanuras_alba"
            }
        ]
    },

    viaje_orco_manzana: {
        titulo: "Intercambio orco",
        texto: `El orco acepta la manzana.

A cambio, entrega una piedra con forma de patata.

"Tesoro."

Brumli la observa.

"Esto no es un tesoro."

El orco responde:

"Para mí sí."`,
        opciones: [
            {
                texto: "Volver a las llanuras",
                siguiente: "viaje_llanuras_alba"
            }
        ]
    },

    viaje_orco_sin_manzana: {
        titulo: "Sin manzana",
        texto: `"Sin manzana, sin piedra."

El orco se envuelve más en la manta.

Gusamir decide no discutir el sistema económico del puente.`,
        opciones: [
            {
                texto: "Volver a las llanuras",
                siguiente: "viaje_llanuras_alba"
            }
        ]
    },

    viaje_bosque_guardianes: {
        titulo: "Bosque de los Dos Guardianes",
        texto: `Gusamir vuelve al Bosque de los Dos Guardianes.

El aire sigue lleno de maullidos que quizá no existen.

Saltarina mira entre los árboles.

Brumli baja la voz.

"Este sitio sigue pareciendo saber cosas de mí que yo no he autorizado."`,
        opciones: [
            {
                texto: "Buscar señales de Bola y Venus",
                siguiente: "viaje_senales_guardianes"
            },
            {
                texto: "Explorar un claro olvidado",
                siguiente: "viaje_claro_olvidado"
            },
            {
                texto: "Continuar la historia",
                accion: () => continuarHistoria()
            },
            {
                texto: "Abrir el mapa",
                siguiente: "viaje_mapa"
            }
        ]
    },

    viaje_senales_guardianes: {
        titulo: "Señales de los Guardianes",
        texto: () => tieneEvento("guardianes_senal_extra")
            ? `Gusamir vuelve a buscar señales.

Esta vez solo encuentra silencio.

Pero es un silencio amable.`
            : `Gusamir sigue dos huellas pequeñas entre las raíces.

Al final encuentra una nota diminuta atrapada bajo una piedra:

"Miau."

Brumli la lee.

"Profundo."`,
        opciones: [
            {
                texto: "Guardar la nota diminuta",
                condicion: () => !tieneEvento("guardianes_senal_extra"),
                accion: () => {
                    registrarEvento("guardianes_senal_extra");
                    agregarObjeto("Nota diminuta: Miau");
                    estado.vinculo += 1;
                },
                siguiente: "viaje_senales_guardianes"
            },
            {
                texto: "Volver al bosque",
                siguiente: "viaje_bosque_guardianes"
            }
        ]
    },

    viaje_claro_olvidado: {
        titulo: "Claro olvidado",
        texto: () => tieneEvento("calcetin_elfico_recogido")
            ? `El claro olvidado está tranquilo.

Demasiado tranquilo.

El calcetín ya no está.

Lo cual quizá sea una mejora estética.`
            : `En un claro escondido, Gusamir encuentra un cofre cubierto de hojas.

Dentro hay un calcetín élfico izquierdo.

Solo izquierdo.

Brumli lo mira con gravedad.

"En algún lugar, un elfo camina incómodo."`,
        opciones: [
            {
                texto: "Guardar el calcetín élfico izquierdo",
                condicion: () => !tieneEvento("calcetin_elfico_recogido"),
                accion: () => {
                    registrarEvento("calcetin_elfico_recogido");
                    agregarObjeto("Calcetín élfico izquierdo");
                },
                siguiente: "viaje_claro_olvidado"
            },
            {
                texto: "Volver al bosque",
                siguiente: "viaje_bosque_guardianes"
            }
        ]
    },

    viaje_paso_cabra_gris: {
        titulo: "Paso de la Cabra Gris",
        texto: `Gusamir regresa al Paso de la Cabra Gris.

El refugio de Saltarina sigue allí, firme entre las rocas.

La montaña parece menos hostil que antes.

O quizá Saltarina ha decidido dejar de juzgar tan fuerte.`,
        opciones: [
            {
                texto: "Entrar al refugio de Saltarina",
                siguiente: "viaje_refugio_saltarina"
            },
            {
                texto: "Explorar alrededor del refugio",
                siguiente: "viaje_explorar_paso"
            },
            {
                texto: "Continuar la historia",
                accion: () => continuarHistoria()
            },
            {
                texto: "Abrir el mapa",
                siguiente: "viaje_mapa"
            }
        ]
    },

    viaje_refugio_saltarina: {
        titulo: "Refugio de Saltarina",
        texto: `El refugio conserva el olor a madera, hierbas secas y montaña.

El estante sigue al fondo.

La ilustración de Bethriel y Saltarina aún cuelga en la pared.`,
        opciones: [
            {
                texto: "Recoger la vela azul",
                condicion: () => !tieneObjeto("Vela azul") && !tieneEvento("vela_azul_recogida_refugio"),
                accion: () => {
                    agregarObjeto("Vela azul");
                    registrarEvento("vela_azul_recogida_refugio");
                },
                siguiente: "viaje_refugio_saltarina"
            },
            {
                texto: "Recoger la llave de bronce",
                condicion: () => !tieneObjeto("Llave de bronce") && !tieneEvento("llave_bronce_recogida_refugio"),
                accion: () => {
                    agregarObjeto("Llave de bronce");
                    registrarEvento("llave_bronce_recogida_refugio");
                },
                siguiente: "viaje_refugio_saltarina"
            },
            {
                texto: "Descansar en el refugio",
                accion: () => {
                    recuperarEnergia(40);
                    avanzarTiempo(3);
                    marcarLugarSeguro("viaje_refugio_saltarina");
                },
                siguiente: "viaje_refugio_saltarina"
            },
            {
                texto: "Volver al paso",
                siguiente: "viaje_paso_cabra_gris"
            }
        ]
    },

    viaje_explorar_paso: {
        titulo: "Explorar el Paso",
        texto: () => tieneEvento("trozo_cuerda_inutil_recogido")
                    ? `Gusamir revisa las rocas del paso.

No encuentra nada útil.

Saltarina parece satisfecha de que al menos lo intentara.`
                    : `Entre unas piedras, Gusamir encuentra un trozo de cuerda.

Brumli tira de él.

Se rompe inmediatamente.

"Trozo de cuerda inútil."

"Nombre oficial."`,
        opciones: [
            {
                texto: "Guardar el trozo de cuerda inútil",
                condicion: () => !tieneEvento("trozo_cuerda_inutil_recogido"),
                accion: () => {
                    registrarEvento("trozo_cuerda_inutil_recogido");
                    agregarObjeto("Trozo de cuerda inútil");
                },
                siguiente: "viaje_explorar_paso"
            },
            {
                texto: "Volver al paso",
                siguiente: "viaje_paso_cabra_gris"
            }
        ]
    },
    viaje_ruinas_valle_rojo: {
        titulo: "Ruinas del Valle Rojo",
        texto: `Gusamir regresa a las Ruinas del Valle Rojo.

Las piedras rojas siguen en silencio.

La cámara de los pedestales espera en el interior.`,
        opciones: [
            {
                texto: "Entrar en la cámara de los pedestales",
                siguiente: "acto5_camara_principal"
            },
            {
                texto: "Continuar la historia",
                accion: () => continuarHistoria()
            },
            {
                texto: "Abrir el mapa",
                siguiente: "viaje_mapa"
            }
        ]
    },

    viaje_torre_eco: {
        titulo: "Torre del Eco Perdido",
        texto: `Gusamir regresa a la Torre del Eco Perdido.

La torre sigue esperando.

El eco parece recordar cada paso anterior.`,
        opciones: [
            {
                texto: "Entrar en la Torre",
                siguiente: "acto6_regreso_torre"
            },
            {
                texto: "Continuar la historia",
                accion: () => continuarHistoria()
            },
            {
                texto: "Abrir el mapa",
                siguiente: "viaje_mapa"
            }
        ]
    }
};