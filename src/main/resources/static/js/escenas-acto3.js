const escenasActo3 = {
    acto3_inicio: {
        titulo: "Acto III — El Bosque de los Dos Guardianes",
        texto: `Gusamir despierta al borde del Bosque de los Dos Guardianes.

La niebla se mueve entre los árboles como si tuviera intención propia.

El cartel torcido sigue allí:

"Bosque de los Dos Guardianes."

Debajo, alguien ha escrito:

"No entrar si no sabes escuchar."`,
        opciones: [
            {
                texto: "Entrar al bosque",
                accion: () => {
                    descubrirMapa("Bosque de los Dos Guardianes");
                    agregarEntradaDiario(
                        "Entrada al bosque",
                        "He entrado en el Bosque de los Dos Guardianes. El cartel decía que no entrara si no sabía escuchar. He decidido fingir confianza."
                    );
                },
                siguiente: "acto3_cruce_senderos"
            },
            {
                texto: "Revisar el borde del bosque antes de entrar",
                accion: () => avanzarTiempo(1),
                siguiente: "acto3_borde_bosque"
            }
        ]
    },

    acto3_borde_bosque: {
        titulo: "El borde del bosque",
        texto: () => tieneLogro("Gastronomía cuestionable")
                ? `Gusamir revisa los alrededores.

Encuentra ramas partidas, huellas pequeñas y una seta con un brillo sospechoso.

Tras la experiencia previa con piedras brillantes, decide que quizá no todo lo brillante merece contacto con la lengua.`
                : `Gusamir revisa los alrededores.

Encuentra ramas partidas, huellas pequeñas y una seta con un brillo sospechoso.

El bosque parece estar poniendo a prueba su curiosidad de una forma bastante poco higiénica.`,
        opciones: [
            {
                texto: "Entrar al bosque con prudencia",
                siguiente: "acto3_cruce_senderos"
            },
            {
                texto: "Lamer la seta",
                accion: () => {
                    estado.energia -= 10;
                },
                siguiente: "acto3_seta_lamida"
            }
        ]
    },

    acto3_seta_lamida: {
        titulo: "La seta no era necesaria",
        texto: () => tieneLogro("Gastronomía cuestionable")
                ? `La seta sabe a arrepentimiento.

Gusamir no aprende.

Pero el bosque sí aprende algo sobre Gusamir.`
                : `La seta sabe a arrepentimiento.

Gusamir no entiende nada.

Pero el bosque aprende algo sobre Gusamir.`,
        opciones: [
            {
                texto: "Entrar al bosque con la dignidad tocada",
                accion: () => {
                    desbloquearLogro("Gastronomía cuestionable");
                },
                siguiente: "acto3_cruce_senderos"
            }
        ]
    },

    acto3_cruce_senderos: {
        titulo: "Tres senderos",
        texto: `El camino se divide en tres.

A la izquierda, un sendero estrecho desaparece entre raíces.

Al centro, un camino amplio parece demasiado cómodo.

A la derecha, varios árboles forman un arco natural.

Algo se mueve entre las ramas.`,
        opciones: [
            {
                texto: "Tomar el sendero izquierdo",
                accion: () => avanzarTiempo(1),
                siguiente: "acto3_sendero_izquierdo"
            },
            {
                texto: "Tomar el camino central",
                accion: () => avanzarTiempo(1),
                siguiente: "acto3_sendero_central"
            },
            {
                texto: "Tomar el sendero derecho",
                accion: () => avanzarTiempo(1),
                siguiente: "acto3_sendero_derecho"
            }
        ]
    },

    acto3_sendero_izquierdo: {
        titulo: "Raíces y silencio",
        texto: `El sendero izquierdo está cubierto de raíces.

Gusamir avanza despacio.

Entre dos troncos ve unas huellas diminutas.

No son de cabra.

No son de orco.

Parecen de gato.`,
        opciones: [
            {
                texto: "Seguir las huellas de gato",
                accion: () => estado.vinculo += 1,
                siguiente: "acto3_huellas_guardianes"
            },
            {
                texto: "Ignorar las huellas y continuar",
                siguiente: "acto3_claro_brumli"
            }
        ]
    },

    acto3_sendero_central: {
        titulo: "Demasiado fácil",
        texto: `El camino central parece cómodo.

Demasiado cómodo.

Tras diez minutos, Gusamir llega exactamente al mismo cruce de antes.

El bosque no parece impresionado por su sentido de la orientación.`,
        opciones: [
            {
                texto: "Probar otro sendero",
                accion: () => avanzarTiempo(1),
                siguiente: "acto3_cruce_senderos"
            }
        ]
    },

    acto3_sendero_derecho: {
        titulo: "El arco de árboles",
        texto: `Gusamir cruza bajo el arco natural.

Durante un instante ve dos puntos brillantes sobre una rama.

Dos ojos.

Parpadean.

Luego desaparecen.`,
        opciones: [
            {
                texto: "Saludar a los ojos brillantes",
                accion: () => estado.vinculo += 1,
                siguiente: "acto3_maullido_lejano"
            },
            {
                texto: "Acelerar el paso",
                siguiente: "acto3_claro_brumli"
            }
        ]
    },

    acto3_huellas_guardianes: {
        titulo: "Huellas imposibles",
        texto: `Las huellas de gato avanzan sobre barro, raíces y piedras.

En algunos puntos no deberían poder existir.

Pero existen.

Gusamir las sigue hasta un claro pequeño donde el aire huele a lluvia antigua.`,
        opciones: [
            {
                texto: "Seguir adelante",
                siguiente: "acto3_maullido_lejano"
            }
        ]
    },

    acto3_maullido_lejano: {
        titulo: "Dos maullidos",
        texto: `Un maullido suena a la izquierda.

Otro responde desde la derecha.

Gusamir se detiene.

No hay gatos.

Solo bosque.

Y aun así, por primera vez desde que empezó el viaje, siente que no camina solo.`,
        opciones: [
            {
                texto: "Continuar hacia el claro",
                accion: () => {
                    agregarEntradaDiario(
                        "Dos maullidos",
                        "He oído dos maullidos en el bosque. No he visto gatos, pero he sentido que alguien me estaba guiando."
                    );
                },
                siguiente: "acto3_claro_brumli"
            }
        ]
    },

    acto3_claro_brumli: {
        titulo: "El claro y el hacha pequeña",
        texto: `Gusamir llega a un claro.

En el centro hay un enano intentando sacar su hacha de un tronco.

No parece atrapada.

Parece que el tronco se niega a colaborar.

El enano gruñe:

"Esto no es falta de fuerza. Es resistencia vegetal organizada."`,
        opciones: [
            {
                texto: "Ayudar al enano",
                accion: () => {
                    estado.valor += 1;
                    estado.vinculo += 1;
                },
                siguiente: "acto3_ayudar_brumli"
            },
            {
                texto: "Preguntar si necesita ayuda",
                siguiente: "acto3_preguntar_brumli"
            },
            {
                texto: "Pasar de largo discretamente",
                siguiente: "acto3_ignorar_brumli"
            }
        ]
    },

    acto3_ayudar_brumli: {
        titulo: "Brumli",
        texto: `Gusamir ayuda a tirar del hacha.

Tras varios intentos, el hacha sale disparada y ambos caen al suelo.

El enano se levanta con orgullo.

"Lo tenía controlado."

Pausa.

"Soy Brumli."

Mira a Gusamir de arriba abajo.

"Y antes de que digas nada: no soy bajo. Estoy optimizado."`,
        opciones: [
            {
                texto: "Decir que eso suena a tamaño táctico",
                accion: () => desbloquearLogro("Tamaño táctico"),
                siguiente: "acto3_brumli_tamano"
            },
            {
                texto: "Presentarte con educación",
                siguiente: "acto3_brumli_presentacion"
            }
        ]
    },

    acto3_preguntar_brumli: {
        titulo: "Orgullo enano",
        texto: `"¿Ayuda?"

El enano mira el hacha.

Luego mira a Gusamir.

Luego vuelve a mirar el hacha.

"Yo no necesito ayuda. Necesito que este árbol acepte la derrota."

Tras un silencio incómodo, añade:

"Pero puedes tirar de ahí."`,
        opciones: [
            {
                texto: "Ayudarle igualmente",
                accion: () => {
                    estado.valor += 1;
                    estado.vinculo += 1;
                },
                siguiente: "acto3_ayudar_brumli"
            }
        ]
    },

    acto3_ignorar_brumli: {
        titulo: "La discreción dura poco",
        texto: `Gusamir intenta pasar de largo.

El enano lo ve.

"¡Eh! Tú. El alto con cara de estar perdido."

Gusamir se detiene.

"Sí, tú. No mires atrás. No hay otro alto perdido."

Parece que evitar esta conversación no era una opción.`,
        opciones: [
            {
                texto: "Volver y hablar con el enano",
                siguiente: "acto3_preguntar_brumli"
            }
        ]
    },

    acto3_brumli_tamano: {
        titulo: "Tamaño táctico",
        texto: `Brumli señala a Gusamir con absoluta seriedad.

"Exacto. Tamaño táctico."

"Los altos tardáis más en caer. Nosotros llegamos antes al suelo."

Gusamir no sabe cómo responder.

Brumli parece satisfecho.`,
        opciones: [
            {
                texto: "Preguntar qué hace en el bosque",
                siguiente: "acto3_brumli_mision"
            }
        ]
    },

    acto3_brumli_presentacion: {
        titulo: "Presentaciones",
        texto: `Gusamir se presenta.

Brumli asiente.

"Gusamir. Buen nombre. Suena a alguien que debería saber dónde va."

Pausa.

"Lo cual, por tu cara, no es el caso."`,
        opciones: [
            {
                texto: "Preguntar qué hace en el bosque",
                siguiente: "acto3_brumli_mision"
            }
        ]
    },

    acto3_brumli_mision: {
        titulo: "Un enano con dirección aproximada",
        texto: `Brumli recoge su hacha.

"Busco el antiguo sendero bajo las raíces."

"Dicen que lleva hacia las montañas sin pasar por el barranco."

Mira alrededor.

"El problema es que todos los árboles son iguales."

Gusamir mira alrededor.

Tiene razón.`,
        opciones: [
            {
                texto: "Proponer viajar juntos",
                accion: () => {
                    agregarObjeto("Compañero: Brumli");
                    agregarEntradaDiario(
                        "Brumli",
                        "He conocido a Brumli, un enano que asegura no ser bajo sino estar optimizado. Parece saber algo sobre senderos antiguos."
                    );
                },
                siguiente: "acto3_brumli_se_une"
            }
        ]
    },

    acto3_brumli_se_une: {
        titulo: "Compañía inesperada",
        texto: `Brumli acepta acompañar a Gusamir.

"Temporalmente."

"Solo hasta encontrar el sendero."

Pausa.

"Y quizá hasta que alguien haga comida."

El grupo aumenta en uno.

El nivel de quejas también.`,
        opciones: [
            {
                texto: "Avanzar con Brumli",
                siguiente: "acto3_saltarina_aparece"
            }
        ]
    },

    acto3_saltarina_aparece: {
        titulo: "La cabra gris",
        texto: `El bosque se abre en un sendero estrecho.

Allí está.

La cabra gris.

De pie en mitad del camino.

Observa a Gusamir.

Luego observa a Brumli.

Brumli frunce el ceño.

"¿Esa cabra nos está juzgando?"

La respuesta parece ser sí.`,
        opciones: [
            {
                texto: "Saludar a la cabra gris",
                accion: () => estado.vinculo += 1,
                siguiente: "acto3_saludar_saltarina"
            },
            {
                texto: "Intentar acariciarla",
                siguiente: "acto3_acariciar_saltarina"
            },
            {
                texto: "Ignorarla y seguir caminando",
                siguiente: "acto3_ignorar_saltarina"
            }
        ]
    },

    acto3_saludar_saltarina: {
        titulo: "Un saludo prudente",
        texto: `Gusamir saluda con cuidado.

La cabra gris inclina ligeramente la cabeza.

Brumli susurra:

"Eso ha sido una reverencia o una amenaza muy educada."

La cabra empieza a caminar.

Después se detiene y mira atrás.`,
        opciones: [
            {
                texto: "Seguir a la cabra gris",
                accion: () => estado.vinculo += 1,
                siguiente: "acto3_seguir_saltarina"
            },
            {
                texto: "No seguirla",
                siguiente: "acto3_no_seguir_saltarina"
            }
        ]
    },

    acto3_acariciar_saltarina: {
        titulo: "Mala lectura del ambiente",
        texto: `Gusamir intenta acariciar a la cabra gris.

La cabra da un paso atrás.

Luego lo mira.

Largo.

Muy largo.

Brumli carraspea.

"Yo no tocaría a una criatura que claramente tiene más autoridad que nosotros."`,
        opciones: [
            {
                texto: "Disculparte y saludarla",
                accion: () => estado.vinculo += 1,
                siguiente: "acto3_saludar_saltarina"
            },
            {
                texto: "Insistir con la caricia",
                accion: () => estado.vinculo -= 1,
                siguiente: "acto3_saltarina_ofendida"
            }
        ]
    },

    acto3_saltarina_ofendida: {
        titulo: "La dignidad caprina",
        texto: `La cabra gris resopla.

Luego se marcha entre los árboles.

Brumli mira a Gusamir.

"Excelente. Has ofendido a nuestro mapa."

Ahora solo queda encontrar otro camino.`,
        opciones: [
            {
                texto: "Tomar la ruta larga",
                accion: () => {
                    avanzarTiempo(2);
                    estado.energia -= 10;
                },
                siguiente: "acto3_ruta_larga"
            }
        ]
    },

    acto3_ignorar_saltarina: {
        titulo: "Ignorar señales evidentes",
        texto: `Gusamir decide ignorar a la cabra.

La cabra no parece sorprendida.

Brumli mira a Gusamir.

"¿A menudo ignoras animales misteriosos en bosques legendarios?"

El silencio responde por él.`,
        opciones: [
            {
                texto: "Volver y seguir a la cabra",
                accion: () => estado.vinculo += 1,
                siguiente: "acto3_seguir_saltarina"
            },
            {
                texto: "Continuar por cuenta propia",
                accion: () => {
                    avanzarTiempo(2);
                    estado.energia -= 10;
                },
                siguiente: "acto3_ruta_larga"
            }
        ]
    },

    acto3_no_seguir_saltarina: {
        titulo: "La ruta larga",
        texto: `Gusamir decide no seguir a la cabra gris.

Brumli suspira.

"Claro. Porque cuando una cabra mística te señala un camino, lo lógico es desconfiar."

El bosque tarda bastante en perdonar esa decisión.`,
        opciones: [
            {
                texto: "Continuar por la ruta larga",
                accion: () => {
                    avanzarTiempo(2);
                    estado.energia -= 10;
                },
                siguiente: "acto3_ruta_larga"
            }
        ]
    },

    acto3_seguir_saltarina: {
        titulo: "El sendero que no estaba",
        texto: `Saltarina avanza entre raíces y ramas.

Donde antes no había camino, ahora parece abrirse uno.

Brumli camina detrás de Gusamir.

"Me niego a admitir que una cabra orienta mejor que yo."

Pausa.

"Pero orienta mejor que yo."`,
        opciones: [
            {
                texto: "Confiar en Saltarina",
                accion: () => {
                    estado.vinculo += 1;
                    registrarEvento("saltarina_guiando_acto3");
                },
                siguiente: "acto3_colina_saltarina"
            },
            {
                texto: "Dudar y detenerse",
                siguiente: "acto3_dudar_atajo"
            }
        ]
    },

    acto3_dudar_atajo: {
        titulo: "Dudas en mitad del atajo",
        texto: `Gusamir se detiene.

Saltarina también.

La cabra lo mira como quien ha visto demasiadas decisiones mediocres en una sola mañana.

Brumli susurra:

"Creo que nos está suspendiendo."`,
        opciones: [
            {
                texto: "Seguir confiando en ella",
                accion: () => estado.vinculo += 1,
                siguiente: "acto3_colina_saltarina"
            },
            {
                texto: "Volver al camino conocido",
                accion: () => {
                    avanzarTiempo(2);
                    estado.energia -= 10;
                },
                siguiente: "acto3_ruta_larga"
            }
        ]
    },

    acto3_colina_saltarina: {
        titulo: "La colina equivocada",
        texto: `El sendero termina en lo alto de una colina.

Abajo se ve un claro oculto entre árboles.

En el centro hay una roca antigua cubierta de flores.

Gusamir busca una bajada.

Brumli también.

Saltarina se coloca detrás de Gusamir.

Brumli abre mucho los ojos.

"Yo que tú me apartaría."`,
        opciones: [
            {
                texto: "Apartarte rápidamente",
                siguiente: "acto3_sin_cabezazo"
            },
            {
                texto: "Confiar en Saltarina",
                accion: () => {
                    desbloquearLogro("Transporte alternativo");
                    estado.vinculo += 2;
                    registrarEvento("saltarina_empujon_acto3");
                    registrarEvento("saltarina_guiando_acto3");
                },
                siguiente: "acto3_cabezazo"
            }
        ]
    },

    acto3_sin_cabezazo: {
        titulo: "Bajada tradicional",
        texto: `Gusamir se aparta.

Saltarina resopla.

El grupo baja por una pendiente estrecha, incómoda y llena de ramas con intenciones personales.

Brumli tropieza tres veces.

"Este camino no estaba aprobado por enanos."`,
        opciones: [
            {
                texto: "Llegar al claro oculto",
                accion: () => {
                    avanzarTiempo(1);
                    estado.energia -= 5;
                    registrarEvento("saltarina_guiando_acto3");
                },
                siguiente: "acto3_claro_oculto"
            }
        ]
    },

    acto3_cabezazo: {
        titulo: "Transporte alternativo",
        texto: `Saltarina embiste a Gusamir.

No especialmente fuerte.

Pero sí exactamente en la dirección correcta.

Gusamir rueda colina abajo.

Rueda.

Sigue rodando.

Durante un instante alcanza una velocidad que ningún héroe debería alcanzar sin ruedas.

Cuando por fin se detiene, está en el claro oculto.

Brumli llega detrás, jadeando.

"Eso ha sido horrible."

Pausa.

"Pero eficiente."`,
        opciones: [
            {
                texto: "Levantarte y fingir que era el plan",
                siguiente: "acto3_claro_oculto"
            }
        ]
    },

    acto3_ruta_larga: {
        titulo: "El bosque se alarga",
        texto: `Sin la ayuda de Saltarina, el bosque parece multiplicarse.

Los árboles se repiten.

Las sombras cambian.

Brumli empieza a marcar troncos con su hacha.

A los veinte minutos descubre que ha marcado el mismo árbol tres veces.`,
        opciones: [
            {
                texto: "Seguir caminando hasta encontrar un claro",
                accion: () => avanzarTiempo(2),
                siguiente: "acto3_claro_oculto"
            }
        ]
    },

    acto3_claro_oculto: {
        titulo: "El claro de los guardianes",
        texto: `El claro está en silencio.

En el centro hay una roca cubierta de musgo.

Sobre ella descansa una flor blanca con bordes dorados.

A su lado hay una carta doblada.

Y talladas en la piedra, dos figuras pequeñas:

dos gatos mirando hacia un mismo umbral.`,
        opciones: [
            {
                texto: "Recoger la flor",
                accion: () => {
                    agregarFlor("Flor de los Guardianes Gemelos");
                },
                siguiente: "acto3_recoger_carta"
            },
            {
                texto: "Observar primero las figuras de los gatos",
                siguiente: "acto3_figuras_gatos"
            }
        ]
    },

    acto3_figuras_gatos: {
        titulo: "Los Guardianes Gemelos",
        texto: `Las figuras parecen antiguas.

Una tiene la cola levantada.

La otra parece sentada con absoluta calma.

Brumli se inclina.

"Gatos."

Pausa.

"Los seres más peligrosos después de los dragones y las tías que preguntan cuándo vas a sentar cabeza."`,
        opciones: [
            {
                texto: "Recoger la flor",
                accion: () => {
                    estado.vinculo += 1;
                    agregarFlor("Flor de los Guardianes Gemelos");
                },
                siguiente: "acto3_recoger_carta"
            }
        ]
    },

    acto3_recoger_carta: {
        titulo: "Carta de Bethriel",
        texto: () => tieneEvento("saltarina_empujon_acto3")
                ? `Gusamir abre la carta.

La letra de Bethriel aparece clara sobre el papel:

"Gusamir.

Hace doscientos cincuenta y ocho años que conozco a Saltarina.

Sigue siendo igual de testaruda.

Si te empuja por un barranco, probablemente sea por algún motivo.

— Bethriel"

Brumli mira a Gusamir.

"Eso deberías haberlo leído antes de la colina."`
                : `Gusamir abre la carta.

La letra de Bethriel aparece clara sobre el papel:

"Gusamir.

Hace doscientos cincuenta y ocho años que conozco a Saltarina.

Sigue siendo igual de testaruda.

Si te empuja por un barranco, probablemente sea por algún motivo.

— Bethriel"

Brumli mira hacia los árboles.

"Me alegra haber recibido esa advertencia antes de cualquier barranco."`,
        opciones: [
            {
                texto: "Guardar la carta",
                accion: () => {
                    agregarCarta({
                        id: "carta_3",
                        titulo: "Carta III: Sobre Saltarina",
                        texto: `"Gusamir.

Hace doscientos cincuenta y ocho años que conozco a Saltarina.

Sigue siendo igual de testaruda.

Si te empuja por un barranco, probablemente sea por algún motivo.

— Bethriel"`
                    });

                    if (tieneEvento("saltarina_empujon_acto3")) {
                        agregarEntradaDiario(
                                "Carta sobre Saltarina",
                                "Bethriel conoce a Saltarina desde hace doscientos cincuenta y ocho años. También afirma que si me empuja por un barranco probablemente sea por algún motivo. Esta información habría sido útil antes."
                                );
                    } else {
                        agregarEntradaDiario(
                                "Carta sobre Saltarina",
                                "Bethriel conoce a Saltarina desde hace doscientos cincuenta y ocho años. También afirma que si me empuja por un barranco probablemente sea por algún motivo. He decidido recordar esto antes de que ocurra."
                                );
                    }
                },
                siguiente: "acto3_salida_bosque"
            }
        ]
    },

    acto3_salida_bosque: {
        titulo: "La salida del bosque",
        texto: () => tieneEvento("saltarina_guiando_acto3")
                ? `El bosque empieza a abrirse.

Entre los árboles aparece una línea de montañas grises.

Saltarina espera junto al último tronco.

No se acerca.

No se marcha.

Solo mira a Gusamir.

Brumli se cruza de brazos.

"Creo que la cabra espera una valoración del servicio."`
                : `El bosque empieza a abrirse.

Entre los árboles aparece una línea de montañas grises.

A lo lejos, sobre una roca, Gusamir ve a Saltarina.

No parece haberlo guiado.

Más bien parece haber supervisado sus errores desde una distancia segura.

Brumli se cruza de brazos.

"Creo que la cabra nos ha puesto una nota baja."`,
        opciones: [
            {
                texto: "Agradecer a Saltarina la ayuda",
                condicion: () => tieneEvento("saltarina_guiando_acto3"),
                accion: () => {
                    estado.vinculo += 1;

                    if (estado.vinculo >= 6) {
                        desbloquearLogro("Amigo de las cabras");
                    }
                },
                siguiente: "acto3a_fin"
            },
            {
                texto: "Mirarla con desconfianza razonable",
                siguiente: "acto3a_fin"
            }
        ]
    },

    acto3a_fin: {
        titulo: "Acto IIIA completado",
        texto: `Gusamir ha cruzado el Bosque de los Dos Guardianes.

Ha conocido a Brumli.

Ha seguido señales imposibles.

Ha encontrado una flor y una carta de Bethriel.

Y, dependiendo de sus decisiones, puede que haya descubierto una nueva forma de transporte caprino.

Más allá del bosque comienzan los senderos de montaña.

El Paso de la Cabra Gris espera.`,
        opciones: [
            {
                texto: "Guardar y volver al menú",
                accion: () => guardarPartida(),
                volverMenu: true
            }
        ]
    }
};