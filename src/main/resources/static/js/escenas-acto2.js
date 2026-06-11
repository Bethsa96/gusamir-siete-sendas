const escenasActo2 = {
    acto2_inicio: {
        titulo: "Acto II — Las Llanuras del Alba",
        texto: `Gusamir despierta en la Posada del Primer Sol.

La mañana entra por la ventana.

Sobre la mesa hay una pequeña nota del tabernero:

"Si vas hacia las Llanuras del Alba, lleva comida, agua y sentido común.

Sobre todo lo último."

La Primera Senda comienza más allá de la aldea.`,
        opciones: [
            {
                texto: "Revisar la mochila antes de partir",
                siguiente: "acto2_revisar_mochila"
            },
            {
                texto: "Salir directamente hacia las llanuras",
                accion: () => {
                    descubrirMapa("Llanuras del Alba");
                    avanzarTiempo(1);
                },
                siguiente: "acto2_llegada_llanuras"
            }
        ]
    },

    acto2_revisar_mochila: {
        titulo: "Preparativos",
        texto: `Gusamir revisa su mochila.

No parece una preparación muy profesional.

Pero lleva una carta, una flor y, con suerte, algo que no sea moho brillante.

Eso ya es más que muchos aventureros.`,
        opciones: [
            {
                texto: "Comprar agua para llenar la cantimplora",
                condicion: () => tieneObjeto("Cantimplora vacía"),
                accion: () => {
                    quitarObjeto("Cantimplora vacía");
                    agregarObjeto("Cantimplora llena");
                },
                siguiente: "acto2_cantimplora"
            },
            {
                texto: "Comprar una cantimplora llena",
                condicion: () => !tieneObjeto("Cantimplora vacía") && !tieneObjeto("Cantimplora llena"),
                accion: () => agregarObjeto("Cantimplora llena"),
                siguiente: "acto2_cantimplora_sin_previa"
            },
            {
                texto: "Salir hacia las llanuras",
                accion: () => {
                    descubrirMapa("Llanuras del Alba");
                    avanzarTiempo(1);
                },
                siguiente: "acto2_llegada_llanuras"
            }
        ]
    },

    acto2_cantimplora: {
        titulo: "Agua de viaje",
        texto: tieneLogro("Gastronomía cuestionable")
                ? `Gusamir llena la cantimplora.

El vendedor le advierte:

"No bebas de charcos que brillen."

Gusamir decide no explicar que esa advertencia llega tarde.`
                : `Gusamir llena la cantimplora.

El vendedor le advierte:

"No bebas de charcos que brillen."

Gusamir asiente.

Es uno de esos consejos que no deberían ser necesarios, pero aparentemente lo son.`,
        opciones: [
            {
                texto: "Partir hacia las Llanuras del Alba",
                accion: () => {
                    descubrirMapa("Llanuras del Alba");
                    avanzarTiempo(1);
                },
                siguiente: "acto2_llegada_llanuras"
            }
        ]
    },

    acto2_llegada_llanuras: {
        titulo: "Las Llanuras del Alba",
        texto: `Las Llanuras del Alba se extienden hasta donde alcanza la vista.

Hierba alta.

Viento suave.

Caminos que parecen iguales.

Al norte, una columna de humo marca un campamento.

Al este, el sendero se pierde entre colinas.

Al oeste, algo brilla junto a una roca.`,
        opciones: [
            { texto: "Explorar el brillo junto a la roca", siguiente: "acto2_brillo_roca" },
            { texto: "Ir hacia la columna de humo", siguiente: "acto2_campamento" },
            { texto: "Seguir el sendero del este", siguiente: "acto2_sendero_este" }
        ]
    },

    acto2_brillo_roca: {
        titulo: "El brillo junto a la roca",
        texto: `Gusamir se acerca con prudencia.

Junto a la roca encuentra un pequeño cofre de madera.

Tiene una inscripción:

"Para quien sepa mirar antes de correr."

Eso suena bastante a Bethriel.`,
        opciones: [
            { texto: "Abrir el cofre", siguiente: "acto2_cofre_roca" },
            {
                texto: "Ignorar el cofre y volver al camino",
                accion: () => avanzarTiempo(1),
                siguiente: "acto2_llegada_llanuras"
            }
        ]
    },

    acto2_cofre_roca: {
        titulo: "Primer cofre del camino",
        texto: `El cofre se abre sin dificultad.

Dentro hay una cuerda fina, bien enrollada.

También hay una nota pequeña:

"Las cuerdas no parecen importantes hasta que alguien decide poner un barranco en mitad del camino."

— Bethriel`,
        opciones: [
            {
                texto: "Guardar la cuerda élfica",
                accion: () => {
                    agregarObjeto("Cuerda élfica");
                    agregarCarta({
                        id: "carta_2",
                        titulo: "Carta II: Sobre barrancos",
                        texto: `"Las cuerdas no parecen importantes hasta que alguien decide poner un barranco en mitad del camino."

— Bethriel`
                    });
                    agregarEntradaDiario(
                        "Un cofre útil",
                        "He encontrado una cuerda élfica. Bethriel parece convencida de que habrá barrancos. No sé si eso debería preocuparme."
                    );
                    avanzarTiempo(1);
                },
                siguiente: "acto2_llegada_llanuras"
            }
        ]
    },

    acto2_campamento: {
        titulo: "Campamento abandonado",
        texto: `La columna de humo viene de un campamento casi apagado.

Hay restos de una fogata.

Huellas recientes.

Y una olla con algo dentro.

Gusamir mira la olla.

La olla parece devolverle la mirada.`,
        opciones: [
            { texto: "Examinar las huellas", siguiente: "acto2_huellas" },
            { texto: "Probar lo de la olla", siguiente: "acto2_olla" },
            {
                texto: "Volver a las llanuras",
                accion: () => avanzarTiempo(1),
                siguiente: "acto2_llegada_llanuras"
            }
        ]
    },

    acto2_huellas: {
        titulo: "Huellas recientes",
        texto: `Las huellas son profundas.

No parecen humanas.

Tampoco élficas.

Probablemente orcos.

Gusamir siente que las llanuras acaban de volverse menos poéticas.`,
        opciones: [
            {
                texto: "Seguir las huellas con cuidado",
                accion: () => {
                    estado.valor += 1;
                    avanzarTiempo(1);
                },
                siguiente: "acto2_orco_puente"
            },
            {
                texto: "No seguir huellas de posibles orcos",
                accion: () => avanzarTiempo(1),
                siguiente: "acto2_campamento"
            }
        ]
    },

    acto2_olla: {
        titulo: "Decisiones culinarias",
        texto: `Gusamir prueba una cucharada.

Pasan tres segundos.

Luego cuatro.

Luego su alma abandona brevemente el cuerpo para presentar una queja formal.

No está muerto.

Pero su dignidad sí está herida.`,
        opciones: [
            {
                texto: "Aceptar las consecuencias",
                accion: () => {
                    estado.energia -= 15;
                    desbloquearLogro("Resaca legendaria");
                    avanzarTiempo(1);
                },
                siguiente: "acto2_campamento"
            }
        ]
    },

    acto2_sendero_este: {
        titulo: "El sendero del este",
        texto: `Gusamir avanza por el sendero del este.

Tras un rato, encuentra un pequeño puente de piedra.

Un orco enorme bloquea el paso.

Está sentado sobre una roca, comiendo algo que posiblemente fue pan en otra vida.

El orco levanta la mirada.

"Tú no pasar."

Pausa.

"Bueno. Depende."`,
        opciones: [
            { texto: "Hablar con el orco", siguiente: "acto2_orco_hablar" },
            { texto: "Intentar intimidarlo", siguiente: "acto2_orco_intimidar" },
            { texto: "Ofrecerle comida", siguiente: "acto2_orco_comida" },
            { texto: "Buscar otro camino", siguiente: "acto2_buscar_otro_camino" }
        ]
    },

    acto2_orco_puente: {
        titulo: "El orco del puente",
        texto: `Las huellas llevan hasta un puente de piedra.

Un orco enorme bloquea el paso.

Está sentado sobre una roca, comiendo algo que posiblemente fue pan en otra vida.

El orco allí sentado mira a Gusamir con desconfianza.

"¿Tú seguir huellas?"

Gusamir asiente.

"Mal hobby."`,
        opciones: [
            { texto: "Hablar con el orco", siguiente: "acto2_orco_hablar" },
            { texto: "Intentar intimidarlo", siguiente: "acto2_orco_intimidar" },
            { texto: "Ofrecerle comida", siguiente: "acto2_orco_comida" },
            { texto: "Retroceder lentamente", siguiente: "acto2_llegada_llanuras" }
        ]
    },

    acto2_orco_hablar: {
        titulo: "Diplomacia con orcos",
        texto: `Gusamir decide hablar.

"Necesito cruzar."

El orco mastica lentamente.

"Todo el mundo necesita cosas."

"Un mago cruzó antes. Muy serio. Muy blanco. Muy poco gracioso."

Vorian va por delante.`,
        opciones: [
            {
                texto: "Preguntar cuánto hace que pasó el mago",
                siguiente: "acto2_orco_vorian"
            },
            {
                texto: "Ofrecerle comida",
                siguiente: "acto2_orco_comida"
            },
            {
                texto: "Buscar otro camino",
                siguiente: "acto2_buscar_otro_camino"
            }
        ]
    },

    acto2_orco_vorian: {
        titulo: "Vorian toma ventaja",
        texto: `"Pasó ayer."

El orco se rasca la cabeza.

"O antes de ayer."

Pausa.

"El tiempo es difícil cuando uno no tiene calendario."

Gusamir siente la presión del viaje por primera vez.`,
        opciones: [
            {
                texto: "Pedirle que te deje cruzar",
                siguiente: "acto2_orco_cruzar"
            },
            {
                texto: "Ofrecerle comida",
                siguiente: "acto2_orco_comida"
            }
        ]
    },

    acto2_orco_comida: {
        titulo: "Negociación alimentaria",
        texto: `Gusamir rebusca en la mochila.

El orco observa con interés.`,
        opciones: [
            {
                texto: "Darle la manzana roja",
                condicion: () => tieneObjeto("Manzana roja"),
                accion: () => {
                    quitarObjeto("Manzana roja");
                    estado.vinculo += 1;
                },
                siguiente: "acto2_orco_manzana"
            },
            {
                texto: "Darle pan de viaje",
                condicion: () => tieneObjeto("Pan de viaje"),
                accion: () => {
                    quitarObjeto("Pan de viaje");
                    estado.vinculo += 1;
                },
                siguiente: "acto2_orco_pan"
            },
            {
                texto: "Darle queso curado",
                condicion: () => tieneObjeto("Queso curado"),
                accion: () => {
                    quitarObjeto("Queso curado");
                    estado.vinculo += 1;
                },
                siguiente: "acto2_orco_queso"
            },
            {
                texto: "No tienes nada decente que ofrecer",
                condicion: () => !tieneObjeto("Manzana roja") && !tieneObjeto("Pan de viaje"),
                siguiente: "acto2_orco_sin_comida"
            }
        ]
    },

    acto2_orco_manzana: {
        titulo: "La manzana importante",
        texto: `El orco toma la manzana.

La observa como si fuera una reliquia.

"Muy roja."

La muerde.

"Puedes pasar. Gente con manzanas no siempre mala."

Gusamir decide no corregir esa filosofía.`,
        opciones: [
            {
                texto: "Cruzar el puente",
                accion: () => avanzarTiempo(1),
                siguiente: "acto2_despues_puente"
            }
        ]
    },

    acto2_orco_pan: {
        titulo: "Pan diplomático",
        texto: `El orco acepta el pan.

Lo huele.

Lo prueba.

"Seco."

Gusamir se prepara para correr.

"Pero mejor que nada."

El orco se aparta.`,
        opciones: [
            {
                texto: "Cruzar el puente",
                accion: () => avanzarTiempo(1),
                siguiente: "acto2_despues_puente"
            }
        ]
    },
    
    acto2_orco_queso: {
        titulo: "Queso diplomático",
        texto: `El orco acepta el queso curado.

Lo huele.

Sus ojos se abren lentamente.

"Esto... esto tiene carácter."

Gusamir no sabe si acaba de alimentar a un enemigo o de fundar una alianza gastronómica.`,
        opciones: [
            {
                texto: "Cruzar el puente",
                accion: () => avanzarTiempo(1),
                siguiente: "acto2_despues_puente"
            }
        ]
    },

    acto2_orco_sin_comida: {
        titulo: "Sin sobornos comestibles",
        texto: `Gusamir no encuentra nada útil en la mochila.

El orco suspira.

"Entonces tú pagar con acertijo."

Gusamir no sabe si eso es mejor o peor.`,
        opciones: [
            { texto: "Aceptar el acertijo", siguiente: "acto2_acertijo_orco" },
            { texto: "Buscar otro camino", siguiente: "acto2_buscar_otro_camino" }
        ]
    },

    acto2_acertijo_orco: {
        titulo: "El acertijo del orco",
        texto: `El orco se aclara la garganta.

"¿Qué pesa más: una piedra grande o treinta inviernos?"

Gusamir parpadea.

Eso no parece un acertijo normal.`,
        opciones: [
            {
                texto: "Una piedra grande",
                siguiente: "acto2_acertijo_mal"
            },
            {
                texto: "Treinta inviernos",
                siguiente: "acto2_acertijo_bien"
            },
            {
                texto: "Depende de las rodillas",
                siguiente: "acto2_acertijo_gracioso"
            }
        ]
    },

    acto2_acertijo_mal: {
        titulo: "Respuesta demasiado literal",
        texto: `El orco niega con la cabeza.

"No. Piedra se deja en suelo."

"Inviernos van contigo."

Sorprendentemente profundo.

El orco no te deja pasar.`,
        opciones: [
            { texto: "Buscar otro camino", siguiente: "acto2_buscar_otro_camino" }
        ]
    },

    acto2_acertijo_bien: {
        titulo: "Treinta inviernos",
        texto: `El orco asiente.

"Correcto."

"Los inviernos pesan donde nadie ve."

Gusamir se queda en silencio.

Quizá este orco no era solo un obstáculo.`,
        opciones: [
            {
                texto: "Cruzar el puente",
                accion: () => {
                    estado.valor += 1;
                    avanzarTiempo(1);
                },
                siguiente: "acto2_despues_puente"
            }
        ]
    },

    acto2_acertijo_gracioso: {
        titulo: "Rodillas proféticas",
        texto: `"Depende de las rodillas", responde Gusamir.

El orco se queda quieto.

Luego ríe.

Mucho.

Demasiado.

"Buena respuesta. Tú entiendes dolor viejo."

Gusamir decide no sentirse ofendido.`,
        opciones: [
            {
                texto: "Cruzar mientras el orco se ríe",
                accion: () => {
                    estado.valor += 1;
                    avanzarTiempo(1);
                },
                siguiente: "acto2_despues_puente"
            }
        ]
    },

    acto2_orco_intimidar: {
        titulo: "Estrategia cuestionable",
        texto: `Gusamir intenta parecer intimidante.

El orco lo observa.

Luego observa sus botas.

Luego su mochila.

Luego vuelve a mirarlo.

"No."`,
        opciones: [
            {
                texto: "Insistir de forma heroica",
                siguiente: "acto2_orco_derrota"
            },
            {
                texto: "Aceptar la crítica y hablar",
                siguiente: "acto2_orco_hablar"
            }
        ]
    },

    acto2_orco_derrota: {
        titulo: "Un combate muy breve",
        texto: `Gusamir carga contra el orco.

El orco levanta un dedo.

Un solo dedo.

Gusamir acaba sentado en el suelo reconsiderando varias decisiones vitales.

No muere, pero desbloquea una importante lección sobre proporciones.`,
        opciones: [
            {
                texto: "Volver al puente con menos orgullo",
                accion: () => {
                    estado.energia -= 20;
                    desbloquearLogro("Estrategia cuestionable");
                    avanzarTiempo(1);
                },
                siguiente: "acto2_orco_hablar"
            }
        ]
    },

    acto2_buscar_otro_camino: {
        titulo: "El camino largo",
        texto: `Gusamir decide rodear el puente.

Es una decisión prudente.

También larga.

Muy larga.

Cuando por fin encuentra un paso entre las colinas, el sol ha cambiado de posición y sus botas tienen opiniones propias.`,
        opciones: [
            {
                texto: "Continuar tras el rodeo",
                accion: () => {
                    estado.energia -= 10;
                    avanzarTiempo(2);
                },
                siguiente: "acto2_despues_puente"
            }
        ]
    },

    acto2_orco_cruzar: {
        titulo: "Permiso de paso",
        texto: `Gusamir pide cruzar.

El orco piensa.

Eso tarda un rato.

Finalmente señala el puente.

"Puedes pasar si prometes no ser mago dramático."

Gusamir acepta con facilidad.`,
        opciones: [
            {
                texto: "Cruzar el puente",
                accion: () => avanzarTiempo(1),
                siguiente: "acto2_despues_puente"
            }
        ]
    },

    acto2_despues_puente: {
        titulo: "Más allá del puente",
        texto: `Al otro lado del puente, el paisaje cambia.

Las llanuras se vuelven más silenciosas.

Entre la hierba, Gusamir ve dos pequeñas huellas.

No son de orco.

No son de cabra.

Parecen huellas de gato.`,
        opciones: [
            {
                texto: "Seguir las huellas",
                siguiente: "acto2_huellas_gato"
            },
            {
                texto: "Continuar por el camino principal",
                siguiente: "acto2_camino_bosque"
            }
        ]
    },

    acto2_huellas_gato: {
        titulo: "Huellas pequeñas",
        texto: `Gusamir sigue las huellas hasta una piedra cubierta de musgo.

Allí encuentra una flor blanca y dorada.

Junto a ella, una marca tallada:

Dos ojos.

Dos estrellas.

Un umbral.`,
        opciones: [
            {
                texto: "Guardar la flor",
                accion: () => {
                    agregarFlor("Flor de los Primeros Guardianes");
                    agregarEntradaDiario(
                        "Huellas de gato",
                        "He encontrado huellas pequeñas en mitad de las llanuras. No sé quién las dejó, pero me han llevado hasta una flor de Bethriel."
                    );
                    avanzarTiempo(1);
                },
                siguiente: "acto2_susurro_guardianes"
            }
        ]
    },

    acto2_susurro_guardianes: {
        titulo: "Un maullido lejano",
        texto: `Durante un instante, Gusamir escucha un maullido.

Luego otro.

Cuando mira alrededor, no hay nadie.

Solo viento, hierba y la sensación de haber sido observado con cariño.`,
        opciones: [
            {
                texto: "Continuar hacia el bosque",
                accion: () => estado.vinculo += 1,
                siguiente: "acto2_camino_bosque"
            }
        ]
    },

    acto2_camino_bosque: {
        titulo: "El borde del bosque",
        texto: `Tras varias horas de marcha, las Llanuras del Alba terminan.

Ante Gusamir se alza un bosque antiguo.

Los árboles crecen tan juntos que parecen guardar un secreto.

Un cartel torcido dice:

"Bosque de los Dos Guardianes."

Debajo, alguien ha añadido:

"No entrar si no sabes escuchar."`,
        opciones: [
            {
                texto: "Acampar antes de entrar",
                accion: () => {
                    avanzarHastaNoche();
                    estado.energia += 20;
                },
                siguiente: "acto2_campamento_noche"
            },
            {
                texto: "Entrar directamente al bosque",
                siguiente: "acto2_intentar_entrar_bosque"
            }
        ]
    },

    acto2_campamento_noche: {
        titulo: "Noche antes del bosque",
        texto: `Gusamir prepara un pequeño campamento.

Mientras el fuego crepita, ve una silueta en una colina lejana.

Una cabra gris.

La misma.

Esta vez no desaparece de inmediato.

Solo lo observa.

Como si evaluara si ha aprendido algo.`,
        opciones: [
            {
                texto: "Saludar a la cabra gris desde lejos",
                accion: () => {
                    estado.vinculo += 1;
                    agregarEntradaDiario(
                        "La cabra gris vuelve",
                        "He visto de nuevo a la cabra gris. No sé si me sigue, me guía o simplemente juzga mis decisiones desde una colina."
                    );
                },
                siguiente: "acto2_fin_preparacion"
            },
            {
                texto: "Ignorar la cabra y dormir",
                siguiente: "acto2_fin_preparacion"
            }
        ]
    },

    acto2_intentar_entrar_bosque: {
        titulo: "Entrada apresurada",
        texto: `Gusamir decide entrar directamente.

Da tres pasos.

El bosque cruje.

Una rama cae justo delante de él.

No parece casualidad.

Quizá el bosque prefiere que sus visitantes descansen primero.`,
        opciones: [
            {
                texto: "Aceptar la indirecta y acampar",
                accion: () => {
                    avanzarHastaNoche();
                    estado.energia += 20;
                },
                siguiente: "acto2_campamento_noche"
            }
        ]
    },

    acto2_fin_preparacion: {
        titulo: "Acto II completado",
        texto: `Gusamir ha cruzado las Llanuras del Alba.

Ha oído hablar de Vorian.

Ha superado el puente.

Ha encontrado señales de los Dos Guardianes.

Y el Bosque de los Dos Guardianes espera ante él.`,
        opciones: [
            {
                texto: "Dormir y entrar al bosque al amanecer",
                accion: () => {
                    completarActo("Acto 2");
                    descubrirMapa("Bosque de los Dos Guardianes");

                    agregarEntradaDiario(
                            "Acto II completado",
                            "He llegado al Bosque de los Dos Guardianes. Algo me dice que aquí las decisiones van a pesar más que las botas."
                            );

                    dormirHastaMananaSiguiente();
                    guardarPartida();
                },
                siguiente: "acto3_inicio"
            }
        ]
    }
};