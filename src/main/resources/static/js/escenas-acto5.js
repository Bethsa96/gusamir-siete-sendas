const escenasActo5 = {
    acto5_inicio: {
        titulo: "Acto V — Ruinas del Valle Rojo",
        texto: `Al amanecer, Gusamir, Brumli y Saltarina descienden hacia unas tierras rojizas.

Las ruinas aparecen entre la niebla como huesos de piedra.

Columnas partidas.

Arcos hundidos.

Escaleras que no llevan a ninguna parte.

Brumli observa el lugar.

"Ruinas antiguas. Perfecto."

"Seguro que nadie ha dejado trampas, maldiciones o puertas absurdas."`,
        opciones: [
            {
                texto: "Entrar por el arco principal",
                accion: () => {
                    descubrirMapa("Ruinas del Valle Rojo");
                    avanzarTiempo(1);
                },
                siguiente: "acto5_arco_principal"
            },
            {
                texto: "Rodear las ruinas y buscar otra entrada",
                accion: () => avanzarTiempo(2),
                siguiente: "acto5_entrada_lateral"
            }
        ]
    },

    acto5_arco_principal: {
        titulo: "El arco principal",
        texto: `El arco principal está cubierto de símbolos antiguos.

En el centro hay una inscripción:

"Solo quien recuerda lo pequeño abre lo perdido."

Brumli se queda mirando.

"No me gusta cuando las puertas hablan en acertijos."

Saltarina golpea el suelo con una pezuña.`,
        opciones: [
            {
                texto: "Usar la moneda antigua",
                condicion: () => tieneObjeto("Moneda antigua"),
                accion: () => {
                    registrarEvento("moneda_usada_ruinas");
                    quitarObjeto("Moneda antigua");
                    estado.vinculo += 1;
                },
                siguiente: "acto5_moneda_puerta"
            },
            {
                texto: "Empujar la puerta",
                siguiente: "acto5_empujar_puerta"
            },
            {
                texto: "Buscar otra entrada",
                accion: () => avanzarTiempo(2),
                siguiente: "acto5_entrada_lateral"
            }
        ]
    },

    acto5_moneda_puerta: {
        titulo: "La moneda antigua",
        texto: `Gusamir coloca la moneda antigua en una pequeña ranura casi invisible.

Durante un instante no ocurre nada.

Luego el arco vibra suavemente.

La piedra se aparta.

Brumli mira la abertura.

"Vaya."

"Entonces guardar basura debajo de la cama sí sirve para algo."`,
        opciones: [
            {
                texto: "Entrar en la cámara principal",
                siguiente: "acto5_camara_principal"
            }
        ]
    },

    acto5_empujar_puerta: {
        titulo: "Método tradicional",
        texto: `Gusamir empuja la piedra.

La piedra no opina.

Brumli también empuja.

La piedra sigue sin opinar.

Saltarina observa.

Su mirada sugiere que la fuerza bruta no siempre es la respuesta.

Algo que molesta profundamente a Brumli.`,
        opciones: [
            {
                texto: "Buscar otra entrada",
                accion: () => {
                    gastarEnergia(5);
                    avanzarTiempo(2);
                },
                siguiente: "acto5_entrada_lateral"
            }
        ]
    },

    acto5_entrada_lateral: {
        titulo: "Entrada lateral",
        texto: `El grupo rodea las ruinas.

Tras un muro derrumbado encuentran una grieta estrecha.

Brumli sonríe.

"Entrada perfecta."

Gusamir mira la grieta.

"Para ti."

Brumli se encoge de hombros.

"Tamaño táctico."`,
        opciones: [
            {
                texto: "Pasar por la grieta",
                accion: () => {
                    gastarEnergia(5);
                    avanzarTiempo(1);
                },
                siguiente: "acto5_pasillo_estrecho"
            },
            {
                texto: "Pedir a Brumli que mire primero",
                siguiente: "acto5_brumli_explora"
            }
        ]
    },

    acto5_brumli_explora: {
        titulo: "Exploración táctica",
        texto: `Brumli entra por la grieta con bastante dignidad.

Desde dentro grita:

"Hay polvo."

Pausa.

"Y una araña que claramente no paga alquiler."

Pausa más larga.

"También hay una palanca."

Suena un golpe metálico.

La entrada principal se abre a lo lejos.`,
        opciones: [
            {
                texto: "Entrar por la puerta abierta",
                accion: () => {
                    avanzarTiempo(1);
                    estado.vinculo += 1;
                },
                siguiente: "acto5_camara_principal"
            }
        ]
    },

    acto5_pasillo_estrecho: {
        titulo: "El pasillo estrecho",
        texto: `Gusamir consigue pasar por la grieta.

Con dificultad.

Con poca elegancia.

Y con una piedra clavándosele donde ninguna leyenda debería mencionar.

Al otro lado encuentra una cámara amplia.`,
        opciones: [
            {
                texto: "Avanzar hacia el centro de las ruinas",
                siguiente: "acto5_camara_principal"
            }
        ]
    },

    acto5_camara_principal: {
        titulo: "La cámara principal",
        texto: `La cámara principal está iluminada por grietas en el techo.

En el centro hay tres pedestales.

Uno tiene forma de llave.

Otro tiene forma de campana.

El tercero tiene forma de flor.

Al fondo, una puerta roja permanece cerrada.

Brumli suspira.

"Tres pedestales. Una puerta cerrada."

"Esto huele a puzzle."`,
        opciones: [
            {
                texto: "Examinar el pedestal de la llave",
                siguiente: "acto5_pedestal_llave"
            },
            {
                texto: "Examinar el pedestal de la campana",
                siguiente: "acto5_pedestal_campana"
            },
            {
                texto: "Examinar el pedestal de la flor",
                siguiente: "acto5_pedestal_flor"
            },
            {
                texto: "Abrir la puerta roja",
                condicion: () =>
                    tieneEvento("pedestal_llave_activado") &&
                            tieneEvento("pedestal_campana_activado") &&
                            tieneEvento("pedestal_flor_activado"),
                siguiente: "acto5_puerta_roja"
            },
            {
                texto: "Salir de las ruinas para buscar lo que falta",
                condicion: () =>
                    !tieneEvento("pedestal_llave_activado") ||
                            !tieneEvento("pedestal_campana_activado") ||
                            !tieneEvento("pedestal_flor_activado"),
                siguiente: "acto5_salir_buscar_objetos"
            }
        ]
    },

    acto5_salir_buscar_objetos: {
        titulo: "Algo falta",
        texto: `Gusamir observa los pedestales.

La puerta roja sigue cerrada.

Brumli se cruza de brazos.

"Esto es lo malo de los puzzles antiguos."

"Siempre esperan que vengas con media ferretería en la mochila."

Saltarina mira hacia la salida.

Quizá sea momento de volver atrás, buscar lo que falta y regresar después.`,
        opciones: [
            {
                texto: "Salir de las ruinas",
                accion: () => {
                    avanzarTiempo(2);
                    marcarLugarSeguro("acto5_inicio");
                },
                siguiente: "acto5_inicio"
            }
        ]
    },

    acto5_pedestal_llave: {
        titulo: "Pedestal de la llave",
        texto: `El pedestal tiene una ranura pequeña.

Sobre ella hay una frase:

"Hay caminos que solo se abren cuando aceptas que necesitabas ayuda."

Brumli señala la ranura.

"Eso pide una llave."

"Las frases bonitas son decoración."`,
        opciones: [
            {
                texto: "Usar la llave de bronce",
                condicion: () => tieneObjeto("Llave de bronce"),
                accion: () => {
                    registrarEvento("pedestal_llave_activado");
                    estado.valor += 1;
                },
                siguiente: "acto5_llave_activada"
            },
            {
                texto: "Volver al centro",
                siguiente: "acto5_camara_principal"
            }
        ]
    },

    acto5_llave_activada: {
        titulo: "La llave gira sola",
        texto: `Gusamir coloca la llave de bronce.

La llave gira sola.

Una línea roja se ilumina desde el pedestal hasta la puerta.

Brumli intenta parecer poco impresionado.

Fracasa.`,
        opciones: [
            {
                texto: "Volver a los pedestales",
                siguiente: "acto5_camara_principal"
            }
        ]
    },

    acto5_pedestal_campana: {
        titulo: "Pedestal de la campana",
        texto: `El pedestal está cubierto de polvo.

Tiene grabada una campana diminuta.

Saltarina se acerca.

Mira a Gusamir.

Luego mira su mochila.

Brumli murmura:

"Creo que la cabra acaba de revisar tu inventario mentalmente."`,
        opciones: [
            {
                texto: "Colocar la campanilla antigua",
                condicion: () => tieneObjeto("Campanilla antigua"),
                accion: () => {
                    registrarEvento("pedestal_campana_activado");
                    estado.vinculo += 1;
                },
                siguiente: "acto5_campana_activada"
            },
            {
                texto: "Volver al centro",
                siguiente: "acto5_camara_principal"
            }
        ]
    },

    acto5_campana_activada: {
        titulo: "Una nota clara",
        texto: `La campanilla suena.

Esta vez todos la oyen.

El sonido recorre las ruinas como agua bajo piedra.

Una línea roja se ilumina desde el pedestal hasta la puerta.

Saltarina baja la cabeza, satisfecha.`,
        opciones: [
            {
                texto: "Volver a los pedestales",
                siguiente: "acto5_camara_principal"
            }
        ]
    },

    acto5_pedestal_flor: {
        titulo: "Pedestal de la flor",
        texto: `El tercer pedestal tiene forma de flor abierta.

En su base hay una inscripción:

"No todas las flores son para adornar caminos.

Algunas recuerdan por qué los recorremos."`,
        opciones: [
            {
                texto: "Colocar una Flor de Bethriel",
                condicion: () => estado.flores.length > 0,
                accion: () => {
                    registrarEvento("pedestal_flor_activado");
                    estado.vinculo += 1;
                },
                siguiente: "acto5_flor_activada"
            },
            {
                texto: "Volver al centro",
                siguiente: "acto5_camara_principal"
            }
        ]
    },

    acto5_flor_activada: {
        titulo: "La flor responde",
        texto: `Gusamir acerca una de las flores de Bethriel.

No se marchita.

No desaparece.

Solo brilla.

Una línea roja se ilumina desde el pedestal hasta la puerta.`,
        opciones: [
            {
                texto: "Volver a los pedestales",
                siguiente: "acto5_camara_principal"
            }
        ]
    },

    acto5_puerta_roja: {
        titulo: "La puerta roja",
        texto: `La puerta roja se abre lentamente.

Al otro lado hay una sala circular.

En el centro, una figura espera.

Túnica oscura.

Bastón blanco.

Vorian.`,
        opciones: [
            {
                texto: "Entrar en la sala circular",
                siguiente: "acto5_vorian"
            }
        ]
    },

    acto5_vorian: {
        titulo: "Vorian en las ruinas",
        texto: `Vorian mira a Gusamir sin sorpresa.

"Has llegado."

"No tan rápido como esperaba."

Mira a Saltarina.

"Pero acompañado por fuerzas antiguas."

Brumli susurra:

"¿Todos los magos hablan como si estuvieran encima de una montaña aunque estén bajo techo?"`,
        opciones: [
            {
                texto: "Preguntar qué busca realmente",
                siguiente: "acto5_vorian_busca"
            },
            {
                texto: "Decirle que Bethriel no le pertenece",
                accion: () => estado.valor += 1,
                siguiente: "acto5_vorian_bethriel"
            }
        ]
    },

    acto5_vorian_busca: {
        titulo: "Lo que Vorian cree",
        texto: `Vorian apoya ambas manos sobre su bastón.

"El Santuario guarda una promesa antigua."

"Una promesa que este mundo ha olvidado."

"Yo he dedicado años a encontrarla."

Mira a Gusamir.

"Y tú apareces con flores, cartas y una cabra gris."

No lo dice con odio.

Lo dice con frustración.`,
        opciones: [
            {
                texto: "Responder que quizás no todo se gana por buscar más tiempo",
                accion: () => estado.valor += 1,
                siguiente: "acto5_vorian_respuesta"
            },
            {
                texto: "Guardar silencio",
                siguiente: "acto5_vorian_respuesta"
            }
        ]
    },

    acto5_vorian_bethriel: {
        titulo: "Bethriel",
        texto: `"Bethriel no le pertenece a nadie", dice Gusamir.

Por primera vez, Vorian parece molesto.

"No hablo de posesión."

"Hablas como quien no entiende el peso de una promesa."

Saltarina da un paso hacia delante.

Vorian la mira con respeto.

"Guardiana Gris..."`,
        opciones: [
            {
                texto: "Preguntar por la promesa",
                siguiente: "acto5_vorian_respuesta"
            }
        ]
    },

    acto5_vorian_respuesta: {
        titulo: "Treinta inviernos",
        texto: `Vorian camina hacia una pared cubierta de símbolos.

"Hay una inscripción más antigua que estas ruinas."

"La Séptima Senda solo se abre a quienes han vivido treinta inviernos."

Brumli mira a Gusamir.

"Eso suena... específico."

Vorian continúa:

"Si no entiendes eso, no llegarás al Santuario. Aunque camines más rápido que yo."`,
        opciones: [
            {
                texto: "Preguntar qué significa",
                siguiente: "acto5_treinta_inviernos"
            }
        ]
    },

    acto5_treinta_inviernos: {
        titulo: "La pista del cumpleaños",
        texto: `Vorian no responde directamente.

Se limita a mirar una pintura antigua.

En ella aparece una mesa.

Velas.

Flores.

Una pequeña celebración bajo un cielo estrellado.

Debajo se lee:

"Quien no celebra la marcha vivida, no abre la marcha nueva."

Brumli se rasca la barba.

"Definitivamente esto habla de cumpleaños."

Saltarina mira a Gusamir como si llevara días esperando que se diera cuenta.`,
        opciones: [
            {
                texto: "Anotar la pista en el diario",
                accion: () => {
                    agregarEntradaDiario(
                        "Treinta inviernos",
                        "En las Ruinas del Valle Rojo hemos encontrado una inscripción sobre treinta inviernos. Brumli cree que habla de cumpleaños. Saltarina parece pensar que era obvio."
                    );
                    registrarEvento("pista_trigesimo_invierno");
                },
                siguiente: "acto5_vorian_sale"
            }
        ]
    },

    acto5_vorian_sale: {
        titulo: "Vorian se adelanta",
        texto: `Vorian se dirige hacia otra salida de la sala.

"No confundas señales con destino, Gusamir."

"Yo seguiré buscando el Santuario."

Se detiene un instante.

"Pero ahora sé que Bethriel te preparó el camino."

Y por primera vez, parece dudar.

Luego desaparece entre las ruinas.`,
        opciones: [
            {
                texto: "Seguir explorando la sala",
                siguiente: "acto5_sala_final"
            }
        ]
    },

    acto5_sala_final: {
        titulo: "La sala de la marcha",
        texto: `Cuando Vorian se marcha, la sala queda en silencio.

En el centro aparece un pequeño cofre de piedra.

No estaba allí antes.

Brumli señala el cofre.

"Eso no es normal."

Pausa.

"Aunque a estas alturas normal es una palabra débil."`,
        opciones: [
            {
                texto: "Abrir el cofre",
                siguiente: "acto5_cofre_final"
            },
            {
                texto: "Salir de las ruinas",
                accion: () => avanzarHastaTarde(),
                siguiente: "acto5_salida_ruinas"
            }
        ]
    },

    acto5_cofre_final: {
        titulo: "El cofre de piedra",
        texto: `El cofre se abre.

Dentro hay una vela pequeña, roja como el atardecer.

Junto a ella, una nota breve:

"Una vela no hace una fiesta.

Pero ayuda a admitir que la necesitas."

— Bethriel`,
        opciones: [
            {
                texto: "Guardar la vela roja",
                accion: () => {
                    agregarObjeto("Vela roja");
                    agregarCarta({
                        id: "carta_6",
                        titulo: "Carta VI: Una vela no hace una fiesta",
                        texto: `"Una vela no hace una fiesta.

Pero ayuda a admitir que la necesitas."

— Bethriel`
                    });
                    agregarEntradaDiario(
                            "Vela roja",
                            "He encontrado una vela roja y otra pista sobre una celebración. Empiezo a sospechar que Bethriel lleva tiempo intentando decirme algo bastante evidente."
                            );
                    avanzarHastaTarde();
                },
                siguiente: "acto5_salida_ruinas"
            }
        ]
    },

    acto5_salida_ruinas: {
        titulo: "Salida de las Ruinas del Valle Rojo",
        texto: `El grupo sale de las ruinas cuando el cielo empieza a oscurecer.

Las tierras rojizas se extienden hacia el norte.

A lo lejos, una torre se recorta contra el horizonte.

Brumli la mira.

"Déjame adivinar."

"Torre antigua, eco raro, probablemente otra puerta con opinión propia."

Saltarina permanece junto a Gusamir.

Vorian va por delante.

Pero ya no parece tan seguro.`,
        opciones: [
            {
                texto: "Acampar fuera de las ruinas",
                accion: () => {
                    avanzarHastaNoche();
                    recuperarEnergia(20);
                    marcarLugarSeguro("acto5_campamento_ruinas");
                },
                siguiente: "acto5_campamento_ruinas"
            }
        ]
    },

    acto5_campamento_ruinas: {
        titulo: "Campamento entre piedras rojas",
        texto: () => {
            if (tieneObjeto("Vela azul") && tieneObjeto("Vela roja")) {
                return `El campamento es tranquilo.

Demasiado tranquilo para estar junto a unas ruinas antiguas.

Brumli se duerme murmurando algo sobre puertas filosóficas.

Saltarina permanece despierta.

Gusamir mira las velas en su mochila.

Azul.

Roja.

Quizá Bethriel no estaba dejando solo pistas.

Quizá estaba preparando una fiesta.`;
            }

            if (tieneObjeto("Vela roja")) {
                return `El campamento es tranquilo.

Demasiado tranquilo para estar junto a unas ruinas antiguas.

Brumli se duerme murmurando algo sobre puertas filosóficas.

Saltarina permanece despierta.

Gusamir mira la vela roja en su mochila.

Quizá Bethriel no estaba dejando solo pistas.

Quizá estaba preparando una fiesta.`;
            }

            return `El campamento es tranquilo.

Demasiado tranquilo para estar junto a unas ruinas antiguas.

Brumli se duerme murmurando algo sobre puertas filosóficas.

Saltarina permanece despierta.

Gusamir repasa mentalmente las pistas sobre velas y cumpleaños.

Quizá Bethriel no estaba dejando solo pistas.

Quizá estaba preparando una fiesta.`;
        },
        opciones: [
            {
                texto: "Dormir y continuar hacia la Torre del Eco Perdido",
                accion: () => {
                    dormirHastaMananaSiguiente();
                    descubrirMapa("Torre del Eco Perdido");
                    completarActo("Acto 5");
                    agregarEntradaDiario(
                        "Acto V completado",
                        "Hemos dejado atrás las Ruinas del Valle Rojo. Vorian sigue por delante, pero por primera vez ha dudado. También hemos encontrado más pistas sobre los treinta inviernos."
                    );
                    guardarPartida();
                },
                siguiente: "acto6_inicio"
            },
            {
                texto: "Guardar y volver al menú",
                accion: () => guardarPartida(),
                volverMenu: true
            }
        ]
    }
};