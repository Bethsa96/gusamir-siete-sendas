const escenasActo1 = {
    acto1_inicio: {
        titulo: "Acto I — El despertar de Gusamir",
        texto: `Gusamir despierta sobresaltado.

La habitación está tranquila.

Demasiado tranquila.

Junto a su cama hay una flor desconocida y una carta doblada con cuidado.

La carta huele ligeramente a bosque, pan recién hecho y burla cariñosa.`,
        opciones: [
            { texto: "Leer la carta", siguiente: "acto1_carta_bethriel" },
            { texto: "Volver a dormir cinco minutos", siguiente: "acto1_volver_dormir" },
            { texto: "Mirar debajo de la cama", siguiente: "acto1_debajo_cama" }
        ]
    },

    acto1_volver_dormir: {
        titulo: "Una decisión heroica",
        texto: `Gusamir decide que toda gran aventura puede esperar cinco minutos.

Cuando vuelve a despertar, el sol está más alto.

En algún lugar del mundo, Bethriel probablemente acaba de suspirar.`,
        opciones: [
            {
                texto: "Levantarse con dignidad reducida",
                accion: () => {
                    avanzarTiempo(3);
                    recuperarEnergia(20);
                },
                siguiente: "acto1_inicio"
            }
        ]
    },

    acto1_debajo_cama: {
        titulo: "Exploración doméstica",
        texto: `Gusamir mira debajo de la cama.

Encuentra polvo, una moneda antigua y una preocupante cantidad de pelusas.

No es exactamente un tesoro legendario, pero todo viaje empieza con algo.`,
        opciones: [
            {
                texto: "Guardar la moneda antigua",
                accion: () => agregarObjeto("Moneda antigua"),
                siguiente: "acto1_inicio"
            },
            {
                texto: "Ignorar la moneda y leer la carta",
                siguiente: "acto1_carta_bethriel"
            }
        ]
    },

    acto1_carta_bethriel: {
        titulo: "La primera carta",
        texto: `La carta dice:

"Si estás leyendo esto, es porque por fin has decidido levantarte.

No ha sido rápido, pero tampoco esperaba milagros.

— Bethriel"

Gusamir reconoce la letra.

Y también reconoce perfectamente la intención de meterse con él.`,
        opciones: [
            {
                texto: "Guardar la carta en la mochila",
                accion: () => {
                    agregarCarta({
                        id: "carta_1",
                        titulo: "Carta I: Por fin despierto",
                        texto: `"Si estás leyendo esto, es porque por fin has decidido levantarte.

No ha sido rápido, pero tampoco esperaba milagros.

— Bethriel"`
                    });

                    agregarEntradaDiario(
                            "La primera carta",
                            "He encontrado una carta de Bethriel. Como era de esperar, contenía cariño, misterio y una cantidad innecesaria de burla."
                            );
                },                siguiente: "acto1_flor"
            }
        ]
    },

    acto1_flor: {
        titulo: "La Flor del Primer Despertar",
        texto: `La flor brilla suavemente.

No parece peligrosa.

Aunque Gusamir ha vivido suficientes años como para saber que esa frase suele preceder a malas decisiones.`,
        opciones: [
            {
                texto: "Guardar la flor",
                accion: () => agregarFlor("Flor del Primer Despertar"),
                siguiente: "acto1_prepararse"
            },
            {
                texto: "Oler la flor",
                siguiente: "acto1_oler_flor"
            }
        ]
    },

    acto1_oler_flor: {
        titulo: "Un aroma familiar",
        texto: `La flor huele a recuerdos.

Durante un instante, Gusamir cree escuchar una risa lejana.

Luego recuerda que no ha desayunado.`,
        opciones: [
            {
                texto: "Guardar la flor",
                accion: () => agregarFlor("Flor del Primer Despertar"),
                siguiente: "acto1_prepararse"
            }
        ]
    },

    acto1_prepararse: {
        titulo: "La mochila de Gusamir",
        texto: `Sobre una silla descansa su vieja mochila de explorador.

No parece muy grande.

Pero tiene ese aspecto misterioso de las mochilas que siempre guardan más cosas de las que deberían.`,
        opciones: [
            {
                texto: "Coger la mochila",
                accion: () => agregarObjeto("Mochila de explorador"),
                siguiente: "acto1_cocina"
            },
            {
                texto: "Salir sin mochila",
                siguiente: "acto1_sin_mochila"
            }
        ]
    },

    acto1_sin_mochila: {
        titulo: "Mala idea inmediata",
        texto: `Gusamir da dos pasos hacia la puerta.

Entonces mira la carta.

Mira la flor.

Mira sus manos.

Descubre que no tiene dónde guardar nada.

A veces la sabiduría llega tarde, pero llega.`,
        opciones: [
            {
                texto: "Volver y coger la mochila",
                accion: () => agregarObjeto("Mochila de explorador"),
                siguiente: "acto1_cocina"
            }
        ]
    },

    acto1_cocina: {
        titulo: "Antes de partir",
        texto: `En la cocina hay pan, queso y una cantimplora vacía.

No es un banquete élfico.

Pero Gusamir sospecha que cruzar praderas con el estómago vacío es una forma elegante de fracasar.`,
        opciones: [
            {
                texto: "Preparar provisiones",
                accion: () => {
                    agregarObjeto("Pan de viaje");
                    agregarObjeto("Queso curado");
                    agregarObjeto("Cantimplora vacía");
                },
                siguiente: "acto1_salir_casa"
            },
            {
                texto: "Salir sin desayunar",
                accion: () => gastarEnergia(10),
                siguiente: "acto1_salir_casa"
            }
        ]
    },

    acto1_salir_casa: {
        titulo: "La colina de Vega Serena",
        texto: `Al salir, el aire de la mañana golpea el rostro de Gusamir.

La Vega Serena se extiende ante él: praderas suaves, senderos de tierra y un molino girando lentamente.

En lo alto de una colina, una cabra gris lo observa.

No parpadea.

Gusamir tampoco.

La cabra gana.`,
        opciones: [
            { texto: "Acercarse a la cabra gris", siguiente: "acto1_cabra_desaparece" },
            { texto: "Seguir el camino principal", siguiente: "acto1_camino_principal" },
            { texto: "Explorar la zona", siguiente: "acto1_explorar_vega" }
        ]
    },

    acto1_cabra_desaparece: {
        titulo: "La Guardiana Gris",
        texto: `Gusamir sube la colina.

La cabra gris sigue mirándolo.

Cuando está a pocos pasos, una ráfaga de viento cruza la hierba.

La cabra desaparece.

En el suelo queda una pequeña marca en forma de pezuña.`,
        opciones: [
            {
                texto: "Examinar la marca",
                accion: () => {
                    estado.vinculo += 1;
                    agregarObjeto("Marca de pezuña gris");
                },
                siguiente: "acto1_camino_principal"
            },
            {
                texto: "Aceptar que una cabra acaba de ganarte",
                siguiente: "acto1_camino_principal"
            }
        ]
    },

    acto1_explorar_vega: {
        titulo: "Explorando Vega Serena",
        texto: `Gusamir se aparta del camino y explora entre la hierba alta.

Encuentra una piedra que brilla con un tono verdoso.

Podría ser mágica.

También podría ser una advertencia de la naturaleza.`,
        opciones: [
            {
                texto: "Guardar la piedra",
                accion: () => {
                    agregarObjeto("Piedra brillante sospechosa");
                    avanzarTiempo(1);
                },
                siguiente: "acto1_camino_principal"
            },
            {
                texto: "Lamer la piedra",
                accion: () => {
                    gastarEnergia(10);
                    desbloquearLogro("Gastronomía cuestionable");
                    avanzarTiempo(1);
                },
                siguiente: "acto1_lamer_piedra"
            },
            {
                texto: "Ignorar la piedra y volver al camino",
                accion: () => avanzarTiempo(1),
                siguiente: "acto1_camino_principal"
            }
        ]
    },

    acto1_lamer_piedra: {
        titulo: "Gastronomía cuestionable",
        texto: `No era mágica.

Era moho bioluminiscente.

Gusamir pierde algo de energía y bastante respeto por sí mismo.

En algún lugar, un sabio acaba de sentir una perturbación.`,
        opciones: [
            { texto: "Continuar con la boca rara", siguiente: "acto1_camino_principal" }
        ]
    },

    acto1_camino_principal: {
        titulo: "Camino a la Aldea del Primer Sol",
        texto: `El sendero desciende entre campos dorados.

A lo lejos se distinguen tejados rojos, humo de chimeneas y el sonido lejano de un mercado despertando.

La Aldea del Primer Sol espera al final del camino.`,
        opciones: [
            {
                texto: "Avanzar hacia la aldea",
                accion: () => {
                    descubrirMapa("Aldea del Primer Sol");
                    avanzarTiempo(2);
                },
                siguiente: "acto1_llegada_aldea"
            },
            {
                texto: "Descansar bajo un árbol antes de seguir",
                accion: () => {
                    recuperarEnergia(10);
                    avanzarHastaNoche();
                },
                siguiente: "acto1_llegada_aldea_tarde"
            }
        ]
    },

    acto1_llegada_aldea: {
        titulo: "Aldea del Primer Sol",
        texto: `Gusamir llega a la Aldea del Primer Sol.

La plaza está llena de vida.

Un mercader discute con una gallina.

Un niño persigue una rueda.

Y la taberna huele peligrosamente bien.`,
        opciones: [
            { texto: "Entrar en la taberna", siguiente: "acto1_taberna" },
            { texto: "Explorar la plaza", siguiente: "acto1_plaza" }
        ]
    },

    acto1_llegada_aldea_tarde: {
        titulo: "Aldea del Primer Sol",
        texto: `Gusamir llega algo más tarde de lo previsto.

La aldea sigue viva, aunque algunos puestos empiezan a recoger.

La taberna, por suerte, parece abierta.

Hay prioridades.`,
        opciones: [
            { texto: "Entrar en la taberna", siguiente: "acto1_taberna" },
            { texto: "Explorar la plaza", siguiente: "acto1_plaza" }
        ]
    },

    acto1_plaza: {
        titulo: "La plaza central",
        texto: `En el centro de la plaza hay una fuente antigua.

Junto a ella, una mujer vende manzanas.

Al otro lado, un anciano murmura:

"Otro viajero preguntó hoy por el Santuario..."

Gusamir se queda quieto.`,
        opciones: [
            { texto: "Preguntar por el otro viajero", siguiente: "acto1_rumor_vorian" },
            {
                texto: "Comprar una manzana",
                accion: () => agregarObjeto("Manzana roja"),
                siguiente: "acto1_manzana_comprada"
            },
            { texto: "Ir a la taberna", siguiente: "acto1_taberna" }
        ]
    },

    acto1_manzana_comprada: {
        titulo: "Una manzana roja",
        texto: `Gusamir compra una manzana roja.

La vendedora se la entrega con solemnidad.

"Ten cuidado", dice.

"Las manzanas importantes suelen aparecer antes de decisiones importantes."

Gusamir no sabe si eso es sabiduría popular o marketing agresivo.`,
        opciones: [
            { texto: "Volver a explorar la plaza", siguiente: "acto1_plaza" },
            { texto: "Ir a la taberna", siguiente: "acto1_taberna" }
        ]
    },

    acto1_rumor_vorian: {
        titulo: "El viajero de la túnica oscura",
        texto: `"No sé su nombre", dice el anciano.

"Llevaba túnica oscura, bastón blanco y demasiada seguridad en sí mismo.

Preguntó por Bethriel.

Luego entró en la taberna."

Gusamir siente que la aventura acaba de complicarse.`,
        opciones: [
            { texto: "Ir inmediatamente a la taberna", siguiente: "acto1_taberna" },
            { texto: "Volver a la plaza", siguiente: "acto1_plaza" }
        ]
    },

    acto1_taberna: {
        titulo: "La Taberna del Alba",
        texto: `La Taberna del Alba está cálida y llena de voces.

Junto al fuego hay un hombre de túnica oscura.

Cabello plateado.

Bastón blanco.

No parece sorprendido al ver a Gusamir.

De hecho, parece estar esperándolo.`,
        opciones: [
            { texto: "Acercarse al hombre", siguiente: "acto1_vorian" },
            { texto: "Pedir comida primero", siguiente: "acto1_comida_taberna" }
        ]
    },

    acto1_comida_taberna: {
        titulo: "Prioridades",
        texto: `Gusamir pide pan caliente y algo de beber.

El tabernero lo mira.

"Buen instinto. Ninguna profecía debería afrontarse con hambre."

Gusamir recupera algo de energía.`,
        opciones: [
            {
                texto: "Acercarse al hombre de la túnica oscura",
                accion: () => recuperarEnergia(10),
                siguiente: "acto1_vorian"
            }
        ]
    },

    acto1_vorian: {
        titulo: "Vorian",
        texto: `El hombre levanta la mirada.

"Así que tú eres Gusamir."

Su voz es tranquila, pero pesa demasiado para una simple conversación de taberna.

"Me llamo Vorian. Y si buscas el Santuario de Bethriel, debo advertirte algo."

Hace una pausa.

"No todos los caminos están hechos para todos los viajeros."`,
        opciones: [
            {
                texto: "Responder con respeto",
                accion: () => {
                    estado.valor += 1;
                    estado.vinculo += 1;
                },
                siguiente: "acto1_vorian_respeto"
            },
            {
                texto: "Decirle que no te asustan los magos dramáticos",
                accion: () => estado.valor += 2,
                siguiente: "acto1_vorian_burla"
            },
            { texto: "Preguntar qué sabe de Bethriel", siguiente: "acto1_vorian_bethriel" }
        ]
    },

    acto1_vorian_respeto: {
        titulo: "Palabras medidas",
        texto: `Gusamir decide no empezar una rivalidad mágica antes de comer postre.

Vorian parece aprobarlo.

"Quizá tengas más juicio del que esperaba."

No suena como un cumplido.

Pero tampoco como una amenaza.`,
        opciones: [
            { texto: "Preguntar por el Santuario", siguiente: "acto1_vorian_santuario" }
        ]
    },

    acto1_vorian_burla: {
        titulo: "Diplomacia dudosa",
        texto: `Gusamir sonríe.

"No me asustan los magos dramáticos."

La taberna queda en silencio.

Vorian lo observa durante unos segundos.

"Curioso. La imprudencia suele confundirse con valentía."

Gusamir decide que eso cuenta como empate.`,
        opciones: [
            { texto: "Preguntar por el Santuario", siguiente: "acto1_vorian_santuario" }
        ]
    },

    acto1_vorian_bethriel: {
        titulo: "El nombre de Bethriel",
        texto: `Al escuchar el nombre de Bethriel, Vorian baja la voz.

"Bethriel custodia algo que este mundo ha olvidado."

"No busco hacerle daño."

"Busco lo que me pertenece."

Esa última frase no tranquiliza a nadie.`,
        opciones: [
            { texto: "Preguntar por el Santuario", siguiente: "acto1_vorian_santuario" }
        ]
    },

    acto1_vorian_santuario: {
        titulo: "La primera advertencia",
        texto: `Vorian se levanta.

"El Santuario no se encuentra por casualidad."

"Se alcanza atravesando las Siete Sendas."

Camina hacia la puerta.

Antes de salir, añade:

"Si Bethriel te ha llamado, quizá debas preguntarte por qué."

La puerta se cierra tras él.

El viaje ya no es solo un viaje.`,
        opciones: [
            { texto: "Hablar con el tabernero", siguiente: "acto1_tabernero" }
        ]
    },

    acto1_tabernero: {
        titulo: "El tabernero del Alba",
        texto: `El tabernero limpia una jarra con absoluta falta de prisa.

"Vorian lleva años buscando ese lugar."

"Pero tú has llegado con una flor de Bethriel."

Mira a Gusamir con una sonrisa.

"Eso cambia las cosas."`,
        opciones: [
            { texto: "Preguntar por las Siete Sendas", siguiente: "acto1_siete_sendas" },
            { texto: "Preguntar por Bethriel", siguiente: "acto1_bethriel_tabernero" }
        ]
    },

    acto1_bethriel_tabernero: {
        titulo: "Rumores de Bethriel",
        texto: `"Algunos dicen que Bethriel es una leyenda."

"Otros dicen que es una elfa."

"Yo digo que quien deja cartas con tanta mala leche probablemente existe."

Gusamir no puede discutir eso.`,
        opciones: [
            { texto: "Preguntar por las Siete Sendas", siguiente: "acto1_siete_sendas" }
        ]
    },

    acto1_siete_sendas: {
        titulo: "Las Siete Sendas",
        texto: `"La primera Senda comienza más allá de las Llanuras del Alba."

"Pero antes deberías prepararte."

El tabernero señala la puerta.

"Compra provisiones. Habla con la gente. Y no confíes demasiado en los magos que se presentan de forma teatral."

Buen consejo.`,
        opciones: [
            {
                texto: "Descansar en la posada y prepararse para la Primera Senda",
                accion: () => {
                    completarActo("Acto 1");
                    desbloquearLogro("Primer Paso");

                    agregarEntradaDiario(
                            "Acto I completado",
                            "He llegado a la Aldea del Primer Sol. He conocido a Vorian y, sinceramente, no sé si me preocupa más su bastón blanco o su forma de hablar como si siempre estuviera cerrando un capítulo."
                            );

                    guardarPartida();
                },
                siguiente: "acto1_fin"
            }
        ]
    },

    acto1_fin: {
        titulo: "Acto I completado",
        texto: `Gusamir ha despertado.

Ha encontrado la primera flor.

Ha recibido la primera carta.

Ha visto a la cabra gris.

Y ha conocido a Vorian.

La Primera Senda lo espera más allá de la Aldea del Primer Sol.`,
        opciones: [
            {
                texto: "Descansar en la posada y comenzar el Acto II",
                accion: () => {
                    dormirHastaMananaSiguiente();
                    guardarPartida();
                },
                siguiente: "acto2_inicio"
            },
            {
                texto: "Guardar y volver al menú",
                accion: () => guardarPartida(),
                volverMenu: true
            }
        ]
    }
};