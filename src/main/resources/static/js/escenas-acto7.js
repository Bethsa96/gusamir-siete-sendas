const escenasActo7 = {
    acto7_inicio: {
        titulo: "Acto VII — La Séptima Senda",
        texto: `Gusamir y Saltarina avanzan hacia la Séptima Senda.

Brumli queda atrás, junto al arco de la Torre del Eco Perdido.

La inscripción no le permite cruzar.

Solo quienes han celebrado treinta inviernos pueden continuar.

Brumli levanta una mano.

"Ve, alto."

"Y recuerda: si una cabra te empuja, probablemente sea por algo."

Saltarina resopla.

Parece aprobar el mensaje.`,
        opciones: [
            {
                texto: "Despedirse de Brumli",
                accion: () => {
                    quitarObjeto("Compañero: Brumli");
                    registrarEvento("brumli_se_queda");
                    agregarEntradaDiario(
                        "Brumli se queda atrás",
                        "Brumli no puede cruzar la Séptima Senda. Se queda en la Torre del Eco Perdido, pero de algún modo sigue acompañando el viaje."
                    );
                },
                siguiente: "acto7_senda_inicio"
            }
        ]
    },

    acto7_senda_inicio: {
        titulo: "La Senda que no estaba",
        texto: `Ante Gusamir se abre un camino que antes no existía.

No aparece en el mapa.

No tiene piedras marcadas.

No tiene huellas.

Solo una línea de luz blanca entre la niebla.

Saltarina se coloca a su lado.

No delante.

A su lado.`,
        opciones: [
            {
                texto: "Avanzar junto a Saltarina",
                accion: () => {
                    estado.viajeBloqueado = true;
                    establecerUbicacion("Séptima Senda");
                    descubrirMapa("Séptima Senda");
                    avanzarTiempo(1);
                },
                siguiente: "acto7_primer_umbral"
            },
            {
                texto: "Mirar atrás una última vez",
                siguiente: "acto7_mirar_atras"
            }
        ]
    },

    acto7_mirar_atras: {
        titulo: "Lo recorrido",
        texto: `Gusamir mira atrás.

Vega Serena.

La Aldea del Primer Sol.

Las Llanuras del Alba.

El Bosque de los Dos Guardianes.

El Paso de la Cabra Gris.

Las Ruinas del Valle Rojo.

La Torre del Eco Perdido.

Todo queda detrás.

Pero nada se ha perdido.`,
        opciones: [
            {
                texto: "Avanzar junto a Saltarina",
                accion: () => {
                    avanzarTiempo(1),
                    estado.viajeBloqueado = true;
                },
                siguiente: "acto7_primer_umbral"
            }
        ]
    },

    acto7_primer_umbral: {
        titulo: "El Primer Umbral",
        texto: `La niebla se abre en tres direcciones.

A la izquierda, se escucha un maullido suave.

A la derecha, una campanilla suena una sola vez.

Al frente, Saltarina mira a Gusamir en silencio.

La Séptima Senda no parece preguntar por fuerza.

Pregunta por memoria.`,
        opciones: [
            {
                texto: "Seguir el maullido",
                siguiente: "acto7_maullido"
            },
            {
                texto: "Seguir el sonido de la campanilla",
                siguiente: "acto7_campanilla"
            },
            {
                texto: "Seguir a Saltarina",
                accion: () => estado.vinculo += 1,
                siguiente: "acto7_saltarina_guia"
            }
        ]
    },

    acto7_maullido: {
        titulo: "El maullido entre la niebla",
        texto: `Gusamir sigue el maullido.

Entre la niebla aparecen dos sombras pequeñas.

Una se mueve con curiosidad.

La otra se sienta con calma absoluta.

No son recuerdos.

No del todo.

Tampoco parecen simples sombras.

Saltarina baja la cabeza con respeto.`,
        opciones: [
            {
                texto: "Saludar a los Dos Guardianes",
                accion: () => {
                    estado.vinculo += 2;
                    registrarEvento("guardianes_umbral_saludados");
                    desbloquearLogro("Guardianes del Umbral");
                },
                siguiente: "acto7_guardianes"
            }
        ]
    },

    acto7_campanilla: {
        titulo: "La campanilla",
        texto: `El sonido lleva a Gusamir hasta una piedra blanca.

Sobre ella descansa una campanilla pequeña.

No es la misma.

Pero suena igual.

La nota atraviesa la niebla.

Saltarina cierra los ojos.

Durante un instante parece mucho más vieja.

Y mucho más cansada.`,
        opciones: [
            {
                texto: "Esperar junto a Saltarina",
                accion: () => {
                    estado.vinculo += 1;
                    avanzarTiempo(1);
                },
                siguiente: "acto7_saltarina_cansada"
            }
        ]
    },

    acto7_saltarina_guia: {
        titulo: "La Guardiana Gris",
        texto: `Gusamir sigue a Saltarina.

La cabra avanza despacio.

Cada paso suyo ilumina una pequeña parte del camino.

Gusamir entiende entonces algo sencillo:

Saltarina no conoce la senda.

La sostiene.`,
        opciones: [
            {
                texto: "Caminar a su ritmo",
                accion: () => estado.vinculo += 1,
                siguiente: "acto7_saltarina_cansada"
            },
            {
                texto: "Intentar avanzar más rápido",
                accion: () => {
                    gastarEnergia(10);
                    avanzarTiempo(1);
                },
                siguiente: "acto7_demasiado_rapido"
            }
        ]
    },

    acto7_demasiado_rapido: {
        titulo: "Demasiado rápido",
        texto: `Gusamir intenta avanzar más rápido.

La niebla se cierra.

El camino desaparece bajo sus pies.

Saltarina golpea el suelo con una pezuña.

La senda vuelve.

No enfadada.

Pero sí decepcionada.`,
        opciones: [
            {
                texto: "Volver al lado de Saltarina",
                siguiente: "acto7_saltarina_cansada"
            }
        ]
    },

    acto7_guardianes: {
        titulo: "Bola y Venus",
        texto: `Las dos figuras felinas rodean a Gusamir.

No hablan.

No necesitan hacerlo.

Una toca con la cola una flor blanca que crece entre la niebla.

La otra mira hacia Saltarina.

Como si ambas supieran lo que está a punto de ocurrir.`,
        opciones: [
            {
                texto: "Recoger la Flor del Umbral",
                accion: () => {
                    agregarFlor("Flor del Umbral");
                    revisarLogrosColeccion();
                },
                siguiente: "acto7_saltarina_cansada"
            }
        ]
    },

    acto7_saltarina_cansada: {
        titulo: "La carga de Saltarina",
        texto: `La luz alrededor de Saltarina parpadea.

La Guardiana Gris respira despacio.

Por primera vez desde que Gusamir la conoce, no parece testaruda.

Parece agotada.

A su alrededor aparecen imágenes:

Bethriel joven.

Una cabrita gris.

Caminos antiguos.

Puertas cerradas.

Promesas custodiadas durante siglos.`,
        opciones: [
            {
                texto: "Acercarse con paciencia",
                accion: () => estado.vinculo += 1,
                siguiente: "acto7_prueba_paciencia"
            },
            {
                texto: "Preguntar qué necesita",
                siguiente: "acto7_prueba_carino"
            },
            {
                texto: "Prometer que seguirá con ella",
                accion: () => {
                    estado.valor += 1;
                    estado.vinculo += 1;
                },
                siguiente: "acto7_prueba_valentia"
            }
        ]
    },

    acto7_prueba_paciencia: {
        titulo: "Paciencia",
        texto: `Gusamir no fuerza el paso.

No exige respuestas.

No intenta convertir el momento en una estrategia.

Solo se queda junto a Saltarina.

La niebla se calma.

Una de las sombras felinas parpadea lentamente.`,
        opciones: [
            {
                texto: "Continuar",
                siguiente: "acto7_transformacion_inicio"
            }
        ]
    },

    acto7_prueba_carino: {
        titulo: "Cariño",
        texto: `Gusamir pregunta en voz baja:

"¿Qué necesitas?"

Saltarina no responde.

Pero apoya la frente contra su mano.

No es una respuesta humana.

Es mejor.`,
        opciones: [
            {
                texto: "Continuar",
                siguiente: "acto7_transformacion_inicio"
            }
        ]
    },

    acto7_prueba_valentia: {
        titulo: "Valentía",
        texto: `Gusamir mira la niebla.

Mira el camino.

Mira a Saltarina.

"No tienes que sostenerlo sola."

La Séptima Senda tiembla.

No como amenaza.

Como alivio.`,
        opciones: [
            {
                texto: "Continuar",
                siguiente: "acto7_transformacion_inicio"
            }
        ]
    },

    acto7_transformacion_inicio: {
        titulo: "La Guardiana Blanca",
        texto: `La niebla se abre.

Bola y Venus aparecen a ambos lados de Saltarina.

Dos guardianes pequeños.

Dos luces antiguas.

Saltarina baja la cabeza.

La luz gris de su pelaje empieza a cambiar.

Primero como nieve bajo luna.

Luego como alba sobre piedra.

La Guardiana Gris deja de ser gris.`,
        opciones: [
            {
                texto: "Ver qué ocurre con Saltarina",
                siguiente: () => puedeSaltarinaSerBlanca()
                            ? "acto7_saltarina_blanca"
                            : "acto7_saltarina_gris_permanece"
            }
        ]
    },
    
    acto7_saltarina_gris_permanece: {
    titulo: "La Guardiana Gris",
    texto: `La luz rodea a Saltarina.

Durante un instante parece que va a cambiar.

Pero la luz se apaga despacio.

Saltarina sigue siendo gris.

No ha fallado.

No se ha perdido.

Simplemente no todo vínculo alcanza su forma completa en el primer viaje.

Bola y Venus permanecen a su lado.

La Guardiana Gris todavía puede abrir el camino.

Pero no será la Guardiana Blanca esta vez.`,
    opciones: [
        {
            texto: "Aceptar el camino tal como es",
            accion: () => {
                registrarEvento("saltarina_permanece_gris");
                agregarEntradaDiario(
                    "La Guardiana Gris",
                    "Saltarina no se transformó en la Guardiana Blanca. Aun así, siguió conmigo hasta el final de la Séptima Senda."
                );
            },
            siguiente: "acto7_carta_final"
        }
    ]
},

    acto7_saltarina_blanca: {
        titulo: "Saltarina la Blanca",
        texto: `Cuando la luz se apaga, Saltarina sigue siendo Saltarina.

La misma mirada.

La misma testarudez.

La misma capacidad de juzgar decisiones mediocres.

Pero ahora su pelaje brilla blanco entre la niebla.

No parece más poderosa porque haya cambiado.

Parece más libre.`,
        opciones: [
            {
                texto: "Inclinar la cabeza ante la Guardiana Blanca",
                accion: () => {
                    desbloquearLogro("Amigo de las cabras");
                    agregarEntradaDiario(
                            "Saltarina la Blanca",
                            "Saltarina se ha transformado en la Guardiana Blanca. Sigue pareciendo capaz de empujarme por un barranco si lo considera necesario."
                            );
                    registrarEvento("saltarina_blanca");
                },
                siguiente: "acto7_carta_final"
            }
        ]
    },

    acto7_carta_final: {
        titulo: "La última carta de Bethriel",
        texto: `Entre las flores aparece una carta.

No estaba allí antes.

La letra de Bethriel tiembla ligeramente sobre el papel:

"Gusamir.

Si Saltarina ha llegado contigo hasta aquí, entonces no solo has cruzado caminos.

Has sabido acompañar.

Y eso, aunque no lo parezca, es una de las formas más difíciles de valentía.

Te espero al otro lado.

— Bethriel"`,
        opciones: [
            {
                texto: "Guardar la última carta",
                accion: () => {
                    agregarCarta({
                        id: "carta_7",
                        titulo: "Carta VII: Te espero al otro lado",
                        texto: `"Gusamir.

Si Saltarina ha llegado contigo hasta aquí, entonces no solo has cruzado caminos.

Has sabido acompañar.

Y eso, aunque no lo parezca, es una de las formas más difíciles de valentía.

Te espero al otro lado.

— Bethriel"`
                    });

                    revisarLogrosColeccion();
                },
                siguiente: "acto7_puerta_santuario"
            }
        ]
    },

    acto7_puerta_santuario: {
        titulo: "La puerta del Santuario",
        texto: `La Séptima Senda termina ante una puerta blanca.

No tiene cerradura.

No tiene inscripción.

Solo seis huecos pequeños con forma de flor.

Saltarina la Blanca se coloca junto a Gusamir.

Bola y Venus, como dos estrellas pequeñas, esperan en silencio.

El Santuario de Bethriel está al otro lado.`,
        opciones: [
            {
                texto: "Colocar las flores de Bethriel",
                condicion: () => estado.flores.length >= 6,
                siguiente: "acto7_seis_flores"
            },
            {
                texto: "Abrir la puerta sin todas las flores",
                condicion: () => estado.flores.length < 6,
                siguiente: "acto7_faltan_flores"
            }
        ]
    },

    acto7_faltan_flores: {
        titulo: "Flores incompletas",
        texto: `Gusamir coloca las flores que tiene.

La puerta responde.

Pero no se abre del todo.

Saltarina la Blanca mira los huecos vacíos.

No bloquea el camino.

Pero la senda parece decir algo claro:

Aún faltan recuerdos por recoger.`,
        opciones: [
            {
                texto: "Continuar igualmente hacia el Santuario",
                accion: () => {
                    completarActo("Acto 7");
                    guardarPartida();
                },
                siguiente: "acto8_inicio"
            }
        ]
    },

    acto7_seis_flores: {
        titulo: "Seis flores",
        texto: `Gusamir coloca las seis flores.

Una a una.

Cada flor ilumina un recuerdo.

Una carta.

Un camino.

Una risa.

Una despedida.

Una promesa.

Cuando la última flor encaja, la puerta blanca se abre sin ruido.`,
        opciones: [
            {
                texto: "Cruzar al Santuario de Bethriel",
                accion: () => {
                    desbloquearLogro("Florista aficionado");
                    completarActo("Acto 7");
                    guardarPartida();
                },
                siguiente: "acto8_inicio"
            }
        ]
    }
};