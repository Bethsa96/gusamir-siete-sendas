const escenasActo6 = {
    acto6_inicio: {
        titulo: "Acto VI — La Torre del Eco Perdido",
        texto: `Al amanecer, Gusamir, Brumli y Saltarina avanzan hacia la Torre del Eco Perdido.

La torre se alza en mitad de una llanura silenciosa.

No parece abandonada.

Parece estar esperando.

Brumli mira hacia arriba.

"Las torres antiguas siempre tienen dos problemas."

"Escaleras."

"Y gente dramática arriba."`,
        opciones: [
            {
                texto: "Entrar en la torre",
                accion: () => {
                    descubrirMapa("Torre del Eco Perdido");
                    avanzarTiempo(1);
                    establecerUbicacion("Torre del Eco Perdido");
                },
                siguiente: "acto6_entrada_torre"
            },
            {
                texto: "Rodear la torre antes de entrar",
                accion: () => {
                    avanzarTiempo(1);
                    establecerUbicacion("Torre del Eco Perdido");
                },
                siguiente: "acto6_rodear_torre"
            }
        ]
    },

    acto6_rodear_torre: {
        titulo: "Alrededor de la torre",
        texto: `Gusamir rodea la torre.

En la parte trasera encuentra una inscripción casi borrada:

"El eco no repite lo que dices.

Repite lo que evitas."

Brumli lee la frase dos veces.

"No me gustan las torres que hacen terapia."`,
        opciones: [
            {
                texto: "Anotar la inscripción",
                accion: () => {
                    agregarEntradaDiario(
                            "El eco de la torre",
                            "En la Torre del Eco Perdido he leído una inscripción: 'El eco no repite lo que dices. Repite lo que evitas'. No sé si me gusta eso."
                            );
                    estado.valor += 1;
                },
                siguiente: "acto6_entrada_torre"
            },
            {
                texto: "Entrar en la torre",
                siguiente: "acto6_entrada_torre"
            }
        ]
    },

    acto6_entrada_torre: {
        titulo: "La entrada de piedra",
        texto: `La puerta de la torre está abierta.

Dentro, el aire es frío.

Cada paso devuelve un eco demasiado claro.

Gusamir oye su propia respiración.

Brumli oye sus propias quejas.

Saltarina no hace ruido.

Lo cual resulta inquietante.`,
        opciones: [
            {
                texto: "Subir la primera escalera",
                accion: () => gastarEnergia(5),
                siguiente: "acto6_escalera"
            },
            {
                texto: "Examinar el vestíbulo",
                siguiente: "acto6_vestibulo"
            }
        ]
    },

    acto6_vestibulo: {
        titulo: "Vestíbulo del eco",
        texto: `En el vestíbulo hay tres relieves.

Una flor.

Una cabra.

Una mesa con velas.

Brumli señala la mesa.

"Ya no es una pista. Es una persecución temática."

Saltarina mira a Gusamir.

Como si esperara que, por fin, entendiera algo.`,
        opciones: [
            {
                texto: "Observar la mesa con velas",
                accion: () => {
                    registrarEvento("pista_cumple_torre");
                    agregarEntradaDiario(
                            "Mesa con velas",
                            "La torre muestra otra vez una mesa con velas. Bethriel no está siendo sutil. Quizá nunca quiso serlo."
                            );
                },
                siguiente: "acto6_escalera"
            },
            {
                texto: "Subir la escalera",
                accion: () => gastarEnergia(5),
                siguiente: "acto6_escalera"
            }
        ]
    },

    acto6_escalera: {
        titulo: "Escalera interminable",
        texto: `La escalera sube en espiral.

Durante un rato, solo existen los peldaños.

Peldaño.

Peldaño.

Peldaño.

Brumli resopla.

"Si la promesa antigua era subir escaleras, dimito."`,
        opciones: [
            {
                texto: "Seguir subiendo",
                accion: () => {
                    gastarEnergia(10);
                    avanzarTiempo(1);
                },
                siguiente: "acto6_sala_ecos"
            },
            {
                texto: "Descansar un momento",
                accion: () => {
                    recuperarEnergia(5);
                    avanzarTiempo(1);
                },
                siguiente: "acto6_sala_ecos"
            }
        ]
    },

    acto6_sala_ecos: {
        titulo: "Sala de los Ecos",
        texto: `La escalera termina en una sala circular.

En el centro hay un espejo de agua negra.

Sobre él flotan palabras que cambian lentamente:

"Nombre."

"Edad."

"Promesa."

Brumli traga saliva.

"Esto pregunta cosas."

"Yo prefiero puertas que solo se abren."`,
        opciones: [
            {
                texto: "Decir tu nombre",
                siguiente: "acto6_nombre"
            },
            {
                texto: "Tocar el agua negra",
                siguiente: "acto6_agua_negra"
            }
        ]
    },

    acto6_agua_negra: {
        titulo: "El agua negra",
        texto: `Gusamir toca el agua.

El eco responde con una voz que parece suya:

"Aún no has respondido."

Brumli da un paso atrás.

"No me gusta cuando el mobiliario tiene expectativas."`,
        opciones: [
            {
                texto: "Decir tu nombre",
                siguiente: "acto6_nombre"
            }
        ]
    },

    acto6_nombre: {
        titulo: "Nombre",
        texto: `Gusamir respira hondo.

"Gusamir."

El agua se mueve.

El eco responde:

"Nombre aceptado."

Las palabras cambian.

"Edad."`,
        opciones: [
            {
                texto: "Responder: veintinueve inviernos",
                condicion: () => !estado.trigesimoInviernoCelebrado,
                siguiente: "acto6_edad_29"
            },
            {
                texto: "Responder: treinta inviernos",
                condicion: () => estado.trigesimoInviernoCelebrado,
                siguiente: "acto6_edad_30"
            }
        ]
    },

    acto6_edad_29: {
        titulo: "Veintinueve inviernos",
        texto: `"Veintinueve inviernos", responde Gusamir.

El agua se oscurece.

La torre entera parece contener el aliento.

Entonces aparece una frase:

"La Séptima Senda no se abre a quien aún no ha celebrado la nueva marcha."

Brumli mira a Gusamir.

"Creo que esto acaba de llamarte joven."

Pausa.

"Disfrútalo. No durará."`,
        opciones: [
            {
                texto: "Preguntar qué significa",
                siguiente: "acto6_revelacion_cumple"
            }
        ]
    },

    acto6_revelacion_cumple: {
        titulo: "El Trigésimo Invierno",
        texto: `El agua muestra una imagen.

La Aldea del Primer Sol.

La Taberna del Alba.

Una mesa.

Velas.

Un pastel.

Un globo rojo sujeto a una silla.

La voz del eco susurra:

"Quien no celebra la marcha vivida, no abre la marcha nueva."

Brumli se lleva una mano a la cara.

"Era un cumpleaños."

"Todo esto era un cumpleaños extremadamente elaborado."`,
        opciones: [
            {
                texto: "Volver a la Aldea del Primer Sol",
                accion: () => {
                    avanzarTiempo(6);
                    descubrirMapa("Aldea del Primer Sol");
                    marcarLugarSeguro("acto6_aldea_regreso");
                    establecerUbicacion("Aldea del Primer Sol");
                },
                siguiente: "acto6_aldea_regreso"
            }
        ]
    },

    acto6_aldea_regreso: {
        titulo: "Regreso a la Aldea del Primer Sol",
        texto: `Gusamir regresa a la Aldea del Primer Sol.

La plaza sigue allí.

La taberna sigue oliendo a pan caliente.

El tabernero ve entrar a Gusamir y sonríe como si llevara días esperando este momento.

"Así que por fin lo entendiste."`,
        opciones: [
            {
                texto: "Preguntar qué hace falta para celebrar el Trigésimo Invierno",
                siguiente: "acto6_mision_cumple"
            }
        ]
    },

    acto6_mision_cumple: {
        titulo: "Preparativos del Trigésimo Invierno",
        texto: () => {
            if (estado.trigesimoInviernoCelebrado) {
                return `El Trigésimo Invierno ya ha sido celebrado.

La taberna conserva restos de pastel, velas consumidas y una cantidad importante de vergüenza pública.

Ya no queda nada que preparar.

Solo decidir cuándo regresar a la Torre del Eco Perdido.`;
            }

            return `El tabernero enumera con solemnidad:

"Para celebrar un Trigésimo Invierno hacen falta cuatro cosas."

"Velas."

"Algo dulce."

"Decoración de fiesta."

"Y una cantidad razonable de vergüenza pública."

Brumli sonríe.

"Por fin una misión sensata."`;
        },
        opciones: [
            {
                texto: "Ir a la plaza a buscar preparativos",
                condicion: () => !estado.trigesimoInviernoCelebrado,
                siguiente: "acto6_plaza_aldea"
            },
            {
                texto: "Revisar las velas",
                condicion: () => !estado.trigesimoInviernoCelebrado,
                siguiente: "acto6_revisar_velas"
            },
            {
                texto: "Preparar la celebración",
                condicion: () => preparativosTrigesimoCompletos() && !estado.trigesimoInviernoCelebrado,
                siguiente: "acto6_mision_lista"
            },
            {
                texto: "Descansar en la taberna unas horas",
                accion: () => avanzarTiempo(2),
                siguiente: "acto6_mision_cumple"
            },
            {
                texto: "Dormir en la taberna hasta mañana",
                condicion: () => estado.periodo !== "Mañana",
                accion: () => dormirEnTabernaHastaManana(),
                siguiente: "acto6_mision_cumple"
            },
            {
                texto: "Volver con Brumli y Saltarina",
                condicion: () => estado.trigesimoInviernoCelebrado,
                siguiente: "acto6_post_celebracion"
            }
        ]
    },

    acto6_plaza_aldea: {
        titulo: "Plaza de la Aldea del Primer Sol",
        texto: () => {
            if (estado.periodo === "Mañana") {
                return `La plaza está despierta desde temprano.

La panadería acaba de abrir y huele a miel y pan caliente.

El puesto de provisiones ya atiende viajeros.

Del mercader viajero no hay rastro todavía.

Brumli mira alrededor.

"Una plaza sin mercader raro es solo una plaza con menos peligro."`;
            }

            if (estado.periodo === "Tarde") {
                return `La plaza está en su momento más animado.

La panadería está cerrada.

El puesto de provisiones atiende sin descanso.

Y un mercader viajero ofrece objetos que parecen demasiado raros para ser casualidad.

Brumli mira alrededor.

"Ahora sí. Esto ya parece una misión con posibilidades de acabar mal."`;
            }

            return `La plaza está casi vacía bajo la luz de la noche.

La panadería está cerrada.

El puesto de provisiones sigue abierto con una lámpara en el mostrador.

El mercader viajero ya no está.

Brumli mira la plaza.

"Las tiendas duermen. Los problemas no."`;
        },
        opciones: [
            {
                texto: "Entrar en la panadería",
                condicion: () => estado.periodo === "Mañana",
                siguiente: "acto6_panaderia"
            },
            {
                texto: "La panadería está cerrada",
                condicion: () => estado.periodo !== "Mañana",
                siguiente: "acto6_panaderia_cerrada"
            },
            {
                texto: "Ir al puesto de provisiones",
                siguiente: "acto6_puesto_provisiones"
            },
            {
                texto: "Hablar con el mercader viajero",
                condicion: () => estado.periodo === "Tarde",
                siguiente: "acto6_mercader_globo"
            },
            {
                texto: "Buscar al mercader viajero",
                condicion: () => estado.periodo !== "Tarde",
                accion: () => {
                    avanzarTiempo(1);
                },
                siguiente: "acto6_mercader_ausente"
            },
            {
                texto: "Volver a la taberna",
                siguiente: "acto6_mision_cumple"
            }
        ]
    },

    acto6_panaderia_cerrada: {
        titulo: "Panadería cerrada",
        texto: `Gusamir se acerca a la panadería.

La puerta está cerrada.

Un cartel dice:

"Abierto por la mañana."

Debajo alguien ha escrito:

"Los pasteles también necesitan descansar."

Brumli lee el cartel.

"Respeto esa filosofía."`,
        opciones: [
            {
                texto: "Volver a la plaza",
                siguiente: "acto6_plaza_aldea"
            }
        ]
    },

    acto6_mercader_ausente: {
        titulo: "El mercader no está",
        texto: () => {
            if (estado.periodo === "Mañana") {
                return `Gusamir busca al mercader viajero.

No hay rastro de él.

Un niño de la plaza señala el camino del oeste.

"Viene por la tarde."

Brumli suspira.

"Los mercaderes raros también tienen horario. Qué decepción."`;
            }

            return `Gusamir busca al mercader viajero.

Pero la plaza está ya demasiado tranquila.

Una tendera le dice:

"Se marchó al caer la tarde. Vuelve mañana."

Brumli mira a Gusamir.

"Podemos dormir o podemos perseguir a un hombre que vende globos proféticos. Yo voto dormir."`;
        },
        opciones: [
            {
                texto: "Volver a la plaza",
                siguiente: "acto6_plaza_aldea"
            }
        ]
    },

    acto6_panaderia: {
        titulo: "Panadería del Primer Sol",
        texto: `La panadería huele a miel, pan caliente y decisiones correctas.

La panadera tiene un pastel de miel sobre el mostrador.

"Para cumpleaños", dice.

"Para promesas antiguas", añade.

Gusamir decide no preguntar cómo lo sabe.`,
        opciones: [
            {
                texto: "Pedir el pastel de miel",
                siguiente: "acto6_enigma_panadera"
            },
            {
                texto: "Volver a la plaza",
                siguiente: "acto6_plaza_aldea"
            }
        ]
    },

    acto6_enigma_panadera: {
        titulo: "El enigma de la panadera",
        texto: `La panadera sonríe.

"Antes de llevarte el pastel, responde."

"¿Qué pesa más: los años que cumples o los caminos que todavía no has recorrido?"

Brumli susurra:

"Como diga que el pastel, me voy."`,
        opciones: [
            {
                texto: "Los años que cumples",
                siguiente: "acto6_enigma_panadera_mal"
            },
            {
                texto: "Los caminos que todavía no has recorrido",
                siguiente: "acto6_enigma_panadera_bien"
            },
            {
                texto: "Depende de cuánto pastel haya",
                siguiente: "acto6_enigma_panadera_gracioso"
            }
        ]
    },

    acto6_enigma_panadera_mal: {
        titulo: "Respuesta incompleta",
        texto: `La panadera niega con suavidad.

"Los años pesan, sí."

"Pero no tanto como lo que haces con ellos."

Brumli asiente.

"Eso ha sonado muy sabio para alguien que vende bollos."`,
        opciones: [
            {
                texto: "Intentarlo de nuevo",
                siguiente: "acto6_enigma_panadera"
            }
        ]
    },

    acto6_enigma_panadera_bien: {
        titulo: "Pastel de miel",
        texto: `La panadera sonríe.

"Exacto."

"Los años te traen hasta aquí."

"Los caminos te llevan más lejos."

Entrega el pastel de miel a Gusamir.`,
        opciones: [
            {
                texto: "Guardar el pastel de miel",
                accion: () => {
                    agregarObjeto("Pastel de miel");
                    avanzarTiempo(1);
                },
                siguiente: "acto6_plaza_aldea"
            }
        ]
    },

    acto6_enigma_panadera_gracioso: {
        titulo: "Prioridades dulces",
        texto: `"Depende de cuánto pastel haya", responde Gusamir.

La panadera se queda seria.

Luego ríe.

"Respuesta peligrosa, pero honesta."

Brumli levanta un dedo.

"Yo apoyo esta filosofía."`,
        opciones: [
            {
                texto: "Guardar el pastel de miel",
                accion: () => {
                    agregarObjeto("Pastel de miel");
                    avanzarTiempo(1);
                },
                siguiente: "acto6_plaza_aldea"
            }
        ]
    },

    acto6_puesto_provisiones: {
        titulo: "Puesto de provisiones",
        texto: `El puesto tiene pan, queso, manzanas y agua fresca.

La tendera mira la mochila de Gusamir.

"Vas de viaje, ¿no?"

Brumli señala a Saltarina.

"Vamos con una cabra legendaria. Técnicamente, el viaje va de nosotros."`,
        opciones: [
            {
                texto: "Comprar pan de viaje",
                accion: () => {
                    agregarObjeto("Pan de viaje");
                    avanzarTiempo(1);
                },
                siguiente: "acto6_plaza_aldea"
            },
            {
                texto: "Comprar queso curado",
                accion: () => {
                    agregarObjeto("Queso curado");
                    avanzarTiempo(1);
                },
                siguiente: "acto6_plaza_aldea"
            },
            {
                texto: "Comprar manzana roja",
                accion: () => {
                    agregarObjeto("Manzana roja");
                    avanzarTiempo(1);
                },
                siguiente: "acto6_plaza_aldea"
            },
            {
                texto: "Rellenar cantimplora",
                condicion: () => tieneObjeto("Cantimplora vacía"),
                accion: () => {
                    quitarObjeto("Cantimplora vacía");
                    agregarObjeto("Cantimplora llena");
                    avanzarTiempo(1);
                },
                siguiente: "acto6_plaza_aldea"
            },
            {
                texto: "Volver a la plaza",
                siguiente: "acto6_plaza_aldea"
            }
        ]
    },

    acto6_mercader_globo: {
        titulo: "El mercader viajero",
        texto: `El mercader viajero ofrece objetos extraños.

Entre ellos hay un globo rojo atado a una piedra.

"Globo Escarlata", dice.

"Imprescindible en ceremonias importantes y fiestas con pretensiones épicas."

Brumli asiente.

"Lo compro como concepto."`,
        opciones: [
            {
                texto: "Pedir el Globo Escarlata",
                siguiente: "acto6_enigma_mercader"
            },
            {
                texto: "Volver a la plaza",
                siguiente: "acto6_plaza_aldea"
            }
        ]
    },

    acto6_enigma_mercader: {
        titulo: "El precio del globo",
        texto: `El mercader levanta un dedo.

"No vendo globos escarlata a cualquiera."

"Primero dime: ¿qué sube cuando pesa menos, pero importa más cuando lo atas a un recuerdo?"

Brumli mira el globo.

"Espero que la respuesta no sea deuda."`,
        opciones: [
            {
                texto: "Un globo",
                siguiente: "acto6_globo_bien"
            },
            {
                texto: "Una piedra",
                siguiente: "acto6_globo_mal"
            },
            {
                texto: "La dignidad de Brumli",
                siguiente: "acto6_globo_gracioso"
            }
        ]
    },

    acto6_globo_bien: {
        titulo: "Globo Escarlata",
        texto: `El mercader sonríe.

"Simple. Correcto. Peligrosamente literal."

Entrega el Globo Escarlata a Gusamir.

Brumli lo mira con respeto.

"Ahora sí parecemos una compañía legendaria."`,
        opciones: [
            {
                texto: "Guardar el Globo Escarlata",
                accion: () => {
                    agregarObjeto("Globo Escarlata");
                    avanzarTiempo(1);
                },
                siguiente: "acto6_plaza_aldea"
            }
        ]
    },

    acto6_globo_mal: {
        titulo: "Respuesta pesada",
        texto: `El mercader niega.

"Una piedra no sube."

Brumli murmura:

"Depende de quién la lance."

El mercader decide ignorarlo.`,
        opciones: [
            {
                texto: "Intentarlo de nuevo",
                siguiente: "acto6_enigma_mercader"
            }
        ]
    },

    acto6_globo_gracioso: {
        titulo: "Dignidad enana",
        texto: `"La dignidad de Brumli", responde Gusamir.

Brumli se gira lentamente.

"Mi dignidad no sube. Está firmemente asentada."

El mercader ríe tanto que entrega el globo por puro respeto al desastre.`,
        opciones: [
            {
                texto: "Guardar el Globo Escarlata",
                accion: () => {
                    agregarObjeto("Globo Escarlata");
                    avanzarTiempo(1);
                },
                siguiente: "acto6_plaza_aldea"
            }
        ]
    },

    acto6_revisar_velas: {
        titulo: "Velas",
        texto: () => {
            if (tieneObjeto("Vela azul") && tieneObjeto("Vela roja")) {
                return `Gusamir revisa su mochila.

Tiene la vela azul.

Y la vela roja.

El tabernero asiente.

"Bethriel preparó bien el camino."

Brumli mira las velas.

"Me molesta admitirlo, pero esto empieza a parecer una fiesta seria."`;
            }

            if (tieneObjeto("Vela azul") && !tieneObjeto("Vela roja")) {
                return `Gusamir revisa su mochila.

Tiene la vela azul.

Pero falta una vela roja.

El tabernero piensa un momento.

"Las cosas importantes suelen esconderse en lugares incómodos."`;
            }

            if (!tieneObjeto("Vela azul") && tieneObjeto("Vela roja")) {
                return `Gusamir revisa su mochila.

Tiene la vela roja.

Pero falta una vela azul.

El tabernero mira hacia las montañas.

"Bethriel dejó muchas señales."`;
            }

            return `Gusamir revisa su mochila.

No tiene velas suficientes.

El tabernero no parece sorprendido.

"Entonces aún no has recogido todo lo que Bethriel dejó en el camino."`;
        },
        opciones: [
            {
                texto: "Marcar velas como preparadas",
                condicion: () => tieneObjeto("Vela azul") && tieneObjeto("Vela roja"),
                accion: () => registrarEvento("velas_preparadas"),
                siguiente: "acto6_mision_cumple"
            },
            {
                texto: "Volver a la taberna",
                condicion: () => !tieneObjeto("Vela azul") || !tieneObjeto("Vela roja"),
                siguiente: "acto6_mision_cumple"
            }
        ]
    },

    acto6_mision_lista: {
        titulo: "Todo preparado",
        texto: `La mesa de la Taberna del Alba está preparada.

Velas.

Pastel.

Globo Escarlata.

Brumli observa la escena con emoción contenida.

Saltarina ocupa el mejor sitio sin pedir permiso.

El tabernero levanta una copa.

"Que comience el Trigésimo Invierno."`,
        opciones: [
            {
                texto: "Celebrar el Trigésimo Invierno",
                accion: () => {
                    estado.trigesimoInviernoCelebrado = true;
                    estado.edad = 30;
                    registrarEvento("trigesimo_invierno_celebrado");
                    agregarEntradaDiario(
                            "Trigésimo Invierno",
                            "He celebrado mi Trigésimo Invierno en la Aldea del Primer Sol. Brumli ha cantado mal. Saltarina ha ocupado media mesa. Y, de algún modo, todo parecía necesario."
                            );
                },
                siguiente: "acto6_celebracion"
            }
        ]
    },

    acto6_celebracion: {
        titulo: "El Trigésimo Invierno",
        texto: `Las velas se encienden.

El pastel de miel desaparece más rápido de lo esperado.

El Globo Escarlata flota sobre la mesa como si fuera parte de una profecía muy específica.

Brumli canta.

Mal.

Muy mal.

Saltarina golpea el suelo con una pezuña.

El tabernero sonríe.

"Gusamir ha vivido treinta inviernos."

"Que la nueva marcha se abra."`,
        opciones: [
            {
                texto: "Quedarse un rato más en la aldea",
                siguiente: "acto6_post_celebracion"
            }
        ]
    },
    
    acto6_post_celebracion: {
        titulo: "Después de la celebración",
        texto: `La fiesta termina poco a poco.

La taberna queda cálida, tranquila y llena de restos de pastel.

Gusamir ya no tiene veintinueve inviernos.

Brumli sigue recuperándose de su propia canción.

Saltarina parece satisfecha.

Ahora pueden prepararse antes de regresar a la Torre del Eco Perdido.`,
        opciones: [
            {
                texto: "Hablar con el tabernero",
                siguiente: "acto6_hablar_tabernero_post"
            },
            {
                texto: "Ir a la plaza",
                siguiente: "acto6_plaza_post_celebracion"
            },
            {
                texto: "Hablar con Brumli y Saltarina para regresar a la torre",
                siguiente: "acto6_regresar_con_grupo"
            }
        ]
    },

    acto6_hablar_tabernero_post: {
        titulo: "El tabernero del Alba",
        texto: `El tabernero limpia una copa.

"Treinta inviernos."

"No parece mucho cuando lo dices rápido."

"Pero pesa distinto cuando entiendes que no es una meta."

"Es una puerta."`,
        opciones: [
            {
                texto: "Volver con el grupo",
                siguiente: "acto6_post_celebracion"
            }
        ]
    },

    acto6_plaza_post_celebracion: {
        titulo: "Plaza de la Aldea del Primer Sol",
        texto: `La plaza sigue activa después de la celebración.

Algunos vecinos comentan la canción de Brumli.

Otros prefieren fingir que no la escucharon.

La panadería, el puesto de provisiones y el mercader viajero siguen en sus lugares habituales según la hora.

Gusamir puede prepararse antes de regresar a la Torre del Eco Perdido.`,
        opciones: [
            {
                texto: "Entrar en la panadería",
                condicion: () => estado.periodo === "Mañana",
                siguiente: "acto6_panaderia_post"
            },
            {
                texto: "Ir al puesto de provisiones",
                siguiente: "acto6_puesto_provisiones_post"
            },
            {
                texto: "Hablar con el mercader viajero",
                condicion: () => estado.periodo === "Tarde",
                siguiente: "acto6_mercader_post"
            },
            {
                texto: "Volver a la taberna",
                siguiente: "acto6_post_celebracion"
            }
        ]
    },

    acto6_panaderia_post: {
        titulo: "Panadería del Primer Sol",
        texto: `La panadera sonríe al ver a Gusamir.

"Ya no quedan pasteles ceremoniales."

"Pero pan para el camino sí."

Brumli asiente.

"El pan no canta. Eso ya lo hace mejor que yo."`,
        opciones: [
            {
                texto: "Comprar pan de viaje",
                accion: () => agregarObjeto("Pan de viaje"),
                siguiente: "acto6_plaza_post_celebracion"
            },
            {
                texto: "Volver a la plaza",
                siguiente: "acto6_plaza_post_celebracion"
            }
        ]
    },

    acto6_puesto_provisiones_post: {
        titulo: "Puesto de provisiones",
        texto: `El puesto sigue abierto.

Hay manzanas, queso, pan y agua fresca.

La tendera mira a Saltarina.

"¿También compra?"

Brumli responde:

"No. Ella ordena."`,
        opciones: [
            {
                texto: "Comprar manzana roja",
                accion: () => agregarObjeto("Manzana roja"),
                siguiente: "acto6_plaza_post_celebracion"
            },
            {
                texto: "Comprar queso curado",
                accion: () => agregarObjeto("Queso curado"),
                siguiente: "acto6_plaza_post_celebracion"
            },
            {
                texto: "Rellenar cantimplora",
                condicion: () => tieneObjeto("Cantimplora vacía"),
                accion: () => {
                    quitarObjeto("Cantimplora vacía");
                    agregarObjeto("Cantimplora llena");
                },
                siguiente: "acto6_plaza_post_celebracion"
            },
            {
                texto: "Volver a la plaza",
                siguiente: "acto6_plaza_post_celebracion"
            }
        ]
    },

    acto6_mercader_post: {
        titulo: "Mercader viajero",
        texto: `El mercader viajero sigue recogiendo objetos extraños.

"Ya vendí el Globo Escarlata."

"Una pieza magnífica. Muy roja. Muy flotante."

Brumli murmura:

"Gran descripción comercial."`,
        opciones: [
            {
                texto: "Comprar una manzana sospechosamente brillante",
                accion: () => agregarObjeto("Manzana sospechosamente brillante"),
                siguiente: "acto6_plaza_post_celebracion"
            },
            {
                texto: "Volver a la plaza",
                siguiente: "acto6_plaza_post_celebracion"
            }
        ]
    },

    acto6_regresar_con_grupo: {
        titulo: "Regreso a la Torre",
        texto: `Brumli ajusta su mochila.

Saltarina se dirige a la puerta antes de que nadie diga nada.

Brumli suspira.

"La cabra ya ha votado."

Gusamir mira una última vez la Taberna del Alba.

La nueva marcha espera.`,
        opciones: [
            {
                texto: "Regresar a la Torre del Eco Perdido",
                accion: () => {
                    quitarObjeto("Pastel de miel");
                    quitarObjeto("Globo Escarlata");
                    dormirHastaMananaSiguiente();
                    avanzarTiempo(3);
                    marcarLugarSeguro("acto6_sala_ecos");
                    guardarPartida();
                },
                siguiente: "acto6_regreso_torre"
            }
        ]
    },

    acto6_regreso_torre: {
        titulo: "Regreso a la torre",
        texto: `Gusamir regresa a la Torre del Eco Perdido.

Esta vez la entrada parece menos fría.

O quizá él ya no es el mismo.

Brumli se frota la garganta.

"No volveré a cantar."

Saltarina parece estar de acuerdo.`,
        opciones: [
            {
                texto: "Volver a la Sala de los Ecos",
                siguiente: "acto6_nombre"
            }
        ]
    },

    acto6_edad_30: {
        titulo: "Treinta inviernos",
        texto: `"Treinta inviernos", responde Gusamir.

El agua negra se vuelve clara.

La torre responde:

"Edad aceptada."

Las palabras cambian una última vez.

"Promesa."`,
        opciones: [
            {
                texto: "Responder a la promesa",
                siguiente: "acto6_promesa"
            }
        ]
    },

    acto6_promesa: {
        titulo: "Promesa",
        texto: `Gusamir mira el agua.

Durante un instante ve flores.

Cartas.

Caminos.

La cabra gris.

Brumli.

Cuatro ojos felinos brillando en la oscuridad.

Y una voz conocida.

Bethriel.

El eco pregunta:

"¿Qué buscas?"

Brumli guarda silencio.

Incluso Saltarina parece esperar la respuesta.`,
        opciones: [
            {
                texto: "Busco llegar al Santuario",
                siguiente: "acto6_respuesta_santuario"
            },
            {
                texto: "Busco a Bethriel",
                siguiente: "acto6_respuesta_bethriel"
            },
            {
                texto: "Busco la siguiente aventura",
                accion: () => {
                    estado.valor += 1;
                    estado.vinculo += 1;
                },
                siguiente: "acto6_respuesta_correcta"
            }
        ]
    },

    acto6_respuesta_santuario: {
        titulo: "Santuario",
        texto: `El agua se agita.

"No buscas un lugar."

Brumli mira a Gusamir.

"Era buena respuesta. Pero muy de mapa."`,
        opciones: [
            {
                texto: "Pensarlo de nuevo",
                siguiente: "acto6_promesa"
            }
        ]
    },

    acto6_respuesta_bethriel: {
        titulo: "Bethriel",
        texto: `El agua brilla.

"No buscas una persona como quien busca un objeto perdido."

"Busca mejor."

Gusamir siente que la respuesta está cerca.`,
        opciones: [
            {
                texto: "Pensarlo de nuevo",
                siguiente: "acto6_promesa"
            }
        ]
    },

    acto6_respuesta_correcta: {
        titulo: "La siguiente aventura",
        texto: `"Busco la siguiente aventura."

La torre queda en silencio.

Luego, desde lo alto, una puerta invisible se abre.

El eco responde:

"La Sexta Senda queda completa."

"La Séptima espera."

Saltarina se acerca a Gusamir y permanece a su lado.

No delante.

A su lado.`,
        opciones: [
            {
                texto: "Subir al último mirador",
                siguiente: "acto6_mirador_final"
            }
        ]
    },

    acto6_mirador_final: {
        titulo: "El último mirador",
        texto: `Desde el mirador superior, Gusamir ve el camino hacia la montaña sagrada.

Allí, oculto dentro de la roca y el bosque, espera el Santuario de Bethriel.

Pero no todos pueden continuar.

Brumli mira la inscripción del arco:

"Solo quienes hayan vivido treinta inviernos podrán cruzar."

Se queda en silencio.

Luego carraspea.

"Yo tengo veintinueve."

Gusamir lo mira.

Brumli se encoge de hombros.

"Edad táctica."`,
        opciones: [
            {
                texto: "Despedirte de Brumli",
                siguiente: "acto6_despedida_brumli"
            }
        ]
    },

    acto6_despedida_brumli: {
        titulo: "Despedida de Brumli",
        texto: `Brumli aprieta el mango de su hacha.

"Llegas hasta aquí, alto."

"Y cuando encuentres a Bethriel..."

Pausa.

"Dile que me debe una cerveza."

Saltarina se acerca a Brumli y le da un pequeño golpe con la cabeza.

Brumli sonríe.

"Sí, sí. Yo también te quiero, cabra autoritaria."`,
        opciones: [
            {
                texto: "Continuar con Saltarina hacia la Séptima Senda",
                accion: () => {
                    completarActo("Acto 6");
                    registrarEvento("brumli_se_queda");
                    agregarEntradaDiario(
                            "Brumli se queda",
                            "Brumli no puede cruzar la Séptima Senda. Tiene veintinueve inviernos. Se ha despedido pidiendo una cerveza para cuando encontremos a Bethriel."
                            );
                    guardarPartida();
                },
                siguiente: "acto7_inicio"
            },
            {
                texto: "Guardar y volver al menú",
                accion: () => guardarPartida(),
                volverMenu: true
            }
        ]
    }
};