const escenasActo4 = {
    acto4_inicio: {
        titulo: "Acto IV — El Paso de la Cabra Gris",
        texto: `Gusamir entra en el Paso de la Cabra Gris.

Las paredes de roca se elevan a ambos lados.

La niebla se mueve despacio.

Saltarina camina delante, como si aquel lugar le perteneciera.

Brumli baja la voz.

"No me gusta cuando las montañas parecen estar escuchando."`,
        opciones: [
            {
                texto: "Seguir a Saltarina",
                accion: () => {
                    avanzarTiempo(1);
                    establecerUbicacion("Paso de la Cabra Gris");
                },
                siguiente: "acto4_sendero_cabra"
            },
            {
                texto: "Observar las paredes del paso",
                accion: () => {
                    avanzarTiempo(1);
                    establecerUbicacion("Paso de la Cabra Gris");
                },
                siguiente: "acto4_paredes"
            }
        ]
    },

    acto4_paredes: {
        titulo: "Marcas en la roca",
        texto: `Gusamir observa las paredes del paso.

Hay marcas antiguas talladas en la piedra.

Pezuñas.

Flores.

Cuatro pequeños ojos felinos.

Y una frase casi borrada:

"La Guardiana Gris protege el camino de quien sabe esperar."`,
        opciones: [
            {
                texto: "Anotar la frase en el diario",
                accion: () => {
                    agregarEntradaDiario(
                        "La Guardiana Gris",
                        "En las paredes del Paso de la Cabra Gris he leído una frase: 'La Guardiana Gris protege el camino de quien sabe esperar'. Creo que habla de Saltarina."
                    );
                    estado.vinculo += 1;
                },
                siguiente: "acto4_sendero_cabra"
            },
            {
                texto: "Seguir caminando",
                siguiente: "acto4_sendero_cabra"
            }
        ]
    },

    acto4_sendero_cabra: {
        titulo: "El sendero estrecho",
        texto: `El sendero se estrecha.

A un lado, roca.

Al otro, una caída bastante convincente.

Saltarina avanza sin dificultad.

Brumli mira el borde.

"Me gustaría recordar que soy de tamaño táctico, no de tamaño volador."`,
        opciones: [
            {
                texto: "Avanzar con cuidado",
                accion: () => avanzarTiempo(1),
                siguiente: "acto4_piedra_suelta"
            },
            {
                texto: "Seguir exactamente las pisadas de Saltarina",
                accion: () => {
                    estado.vinculo += 1;
                    avanzarTiempo(1);
                },
                siguiente: "acto4_atajo_seguro"
            }
        ]
    },

    acto4_piedra_suelta: {
        titulo: "Piedra suelta",
        texto: `Gusamir pisa una piedra suelta.

La piedra cae por el borde.

Tarda demasiado en dejar de sonar.

Brumli traga saliva.

"Buena noticia: ahora sabemos que era profundo."

Saltarina resopla desde delante.`,
        opciones: [
            {
                texto: "Continuar con más cuidado",
                accion: () => {
                    gastarEnergia(5);
                    avanzarTiempo(1);
                },
                siguiente: "acto4_casa_saltarina"
            }
        ]
    },

    acto4_atajo_seguro: {
        titulo: "El paso correcto",
        texto: `Gusamir sigue las pisadas de Saltarina.

Cada marca de pezuña evita una piedra inestable.

El camino sigue siendo estrecho, pero ya no parece imposible.

Brumli murmura:

"No admitiré que la cabra tiene técnica."

Pausa.

"La tiene."`,
        opciones: [
            {
                texto: "Llegar al refugio de Saltarina",
                siguiente: "acto4_casa_saltarina"
            }
        ]
    },

    acto4_casa_saltarina: {
        titulo: "El refugio de Saltarina",
        texto: `El paso se abre en una pequeña explanada protegida del viento.

Allí hay una cabaña de piedra y madera.

No es grande.

Pero parece antigua, firme y sorprendentemente acogedora.

Saltarina se planta frente a la puerta.

Brumli parpadea.

"La cabra tiene casa."

Pausa.

"La cabra vive mejor que algunos enanos."`,
        opciones: [
            {
                texto: "Entrar en el refugio",
                siguiente: "acto4_refugio_interior"
            },
            {
                texto: "Explorar alrededor de la cabaña",
                accion: () => avanzarTiempo(1),
                siguiente: "acto4_exterior_refugio"
            }
        ]
    },

    acto4_exterior_refugio: {
        titulo: "Alrededor del refugio",
        texto: `Gusamir explora el exterior.

Junto a una roca encuentra un pequeño cuenco de piedra lleno de agua limpia.

También hay flores secas colgadas bajo el tejado.

Una de ellas tiene el mismo tono que las flores de Bethriel.`,
        opciones: [
            {
                texto: "Recoger la flor seca",
                accion: () => {
                    agregarFlor("Flor Seca del Paso Gris");
                    agregarEntradaDiario(
                        "Flor seca",
                        "He encontrado una flor seca junto al refugio de Saltarina. No brilla, pero parece importante. Quizá Bethriel también estuvo aquí."
                    );
                },
                siguiente: "acto4_refugio_interior"
            },
            {
                texto: "Entrar en el refugio",
                siguiente: "acto4_refugio_interior"
            }
        ]
    },

    acto4_refugio_interior: {
        titulo: "Dentro del refugio",
        texto: `El interior del refugio huele a madera, hierbas secas y montaña.

Hay una mesa baja.

Una manta antigua.

Un estante con objetos cuidadosamente colocados.

Y en la pared, una ilustración vieja:

Bethriel junto a una cabrita gris.

Brumli se acerca.

"¿Esa es...?"

Saltarina golpea el suelo con una pezuña.

No parece querer explicaciones fáciles.`,
        opciones: [
            {
                texto: "Observar la ilustración",
                siguiente: "acto4_ilustracion_bethriel"
            },
            {
                texto: "Examinar el estante",
                siguiente: "acto4_estante"
            },
            {
                texto: "Esperar a que Saltarina indique qué hacer",
                accion: () => estado.vinculo += 1,
                siguiente: "acto4_prueba_paciencia"
            }
        ]
    },

    acto4_ilustracion_bethriel: {
        titulo: "Bethriel y la cabrita gris",
        texto: `La ilustración está envejecida.

Bethriel aparece mucho más joven.

A su lado, una cabrita gris mira al mundo con la misma expresión testaruda que Saltarina conserva ahora.

Brumli susurra:

"Doscientos cincuenta y ocho años, ¿no?"

Gusamir recuerda la carta.

Saltarina no era solo una guía.

Era parte de la historia.`,
        opciones: [
            {
                texto: "Guardar este recuerdo en el diario",
                accion: () => {
                    agregarEntradaDiario(
                        "Bethriel y Saltarina",
                        "He visto una ilustración antigua de Bethriel junto a Saltarina cuando era una cabrita. Saltarina lleva muchísimo más tiempo protegiendo este camino de lo que imaginaba."
                    );
                    estado.vinculo += 1;
                },
                siguiente: "acto4_estante"
            }
        ]
    },

    acto4_estante: {
        titulo: "El estante de objetos",
        texto: `En el estante hay varios objetos.

Una vela azul.

Una piedra lisa.

Una pequeña llave de bronce.

Y una nota escrita con letra de Bethriel.

Brumli señala la llave.

"Las llaves siempre son importantes."

Mira la piedra.

"Las piedras a veces."

Mira la vela.

"Las velas solo si alguien se empeña en cumplir años."`,
        opciones: [
            {
                texto: "Leer la nota de Bethriel",
                siguiente: "acto4_nota_bethriel"
            },
            {
                texto: "Coger la llave de bronce",
                accion: () => agregarObjeto("Llave de bronce"),
                siguiente: "acto4_llave_bronce"
            },
            {
                texto: "Coger la vela azul",
                accion: () => agregarObjeto("Vela azul"),
                siguiente: "acto4_vela_azul"
            }
        ]
    },

    acto4_nota_bethriel: {
        titulo: "Nota de Bethriel",
        texto: `La nota dice:

"Gusamir.

Hay puertas que se abren con llaves.

Otras con paciencia.

Y algunas, aunque te moleste admitirlo, con cumpleaños.

No olvides las velas.

— Bethriel"

Brumli mira la nota.

"Eso suena sospechosamente específico."`,
        opciones: [
            {
                texto: "Guardar la nota como carta",
                accion: () => {
                    agregarCarta({
                        id: "carta_5",
                        titulo: "Carta V: No olvides las velas",
                        texto: `"Gusamir.

Hay puertas que se abren con llaves.

Otras con paciencia.

Y algunas, aunque te moleste admitirlo, con cumpleaños.

No olvides las velas.

— Bethriel"`
                    });

                    agregarEntradaDiario(
                        "No olvides las velas",
                        "Bethriel ha dejado una nota hablando de llaves, paciencia y cumpleaños. Brumli cree que es sospechosamente específico. Yo también."
                    );
                },
                siguiente: "acto4_prueba_paciencia"
            }
        ]
    },

    acto4_llave_bronce: {
        titulo: "Llave de bronce",
        texto: `Gusamir guarda la llave de bronce.

Brumli asiente con aprobación.

"Eso sí. Una llave nunca sobra."

Saltarina mira la llave.

Luego mira a Gusamir.

Como si quisiera decir que no todo se abre así.`,
        opciones: [
            {
                texto: "Volver al centro del refugio",
                siguiente: "acto4_prueba_paciencia"
            }
        ]
    },

    acto4_vela_azul: {
        titulo: "Vela azul",
        texto: `Gusamir guarda la vela azul.

La cera tiene un brillo suave.

Brumli la mira.

"Si esto acaba siendo para una fiesta, quiero dejar claro que yo canto fatal."

Saltarina resopla.

Puede que eso signifique que ya lo sabía.`,
        opciones: [
            {
                texto: "Volver al centro del refugio",
                siguiente: "acto4_prueba_paciencia"
            }
        ]
    },

    acto4_prueba_paciencia: {
        titulo: "La prueba de paciencia",
        texto: `Saltarina se coloca frente a una puerta baja al fondo del refugio.

La puerta no tiene cerradura.

Solo una inscripción:

"Quien no sabe esperar, no sabe entrar."

Brumli mira a Gusamir.

"Yo odio las puertas filosóficas."`,
        opciones: [
            {
                texto: "Empujar la puerta",
                siguiente: "acto4_puerta_empujar"
            },
            {
                texto: "Esperar en silencio",
                accion: () => {
                    estado.vinculo += 1;
                    avanzarTiempo(3);
                },
                siguiente: "acto4_puerta_esperar"
            },
            {
                texto: "Preguntar a Saltarina qué quiere",
                siguiente: "acto4_preguntar_saltarina"
            }
        ]
    },

    acto4_puerta_empujar: {
        titulo: "Paciencia inexistente",
        texto: `Gusamir empuja la puerta.

No se mueve.

Empuja otra vez.

Tampoco.

Brumli observa.

"Buena estrategia. Si la inscripción decía esperar, claramente la solución era lo contrario."

Saltarina no parece impresionada.`,
        opciones: [
            {
                texto: "Aceptar la indirecta y esperar",
                accion: () => {
                    avanzarTiempo(3);
                },
                siguiente: "acto4_puerta_esperar"
            }
        ]
    },

    acto4_preguntar_saltarina: {
        titulo: "Una pregunta sin palabras",
        texto: `Gusamir mira a Saltarina.

"¿Qué quieres que haga?"

Saltarina se tumba frente a la puerta.

Luego cierra los ojos.

Brumli se cruza de brazos.

"Creo que la respuesta es dormir. O hacerse la interesante."

Puede que ambas.`,
        opciones: [
            {
                texto: "Sentarse y esperar con ella",
                accion: () => {
                    avanzarTiempo(3);
                },
                siguiente: "acto4_puerta_esperar"
            }
        ]
    },

    acto4_puerta_esperar: {
        titulo: "La puerta se abre",
        texto: `Gusamir espera.

Al principio no pasa nada.

Luego sigue sin pasar nada.

Después de un rato, algo cambia.

La puerta se abre sola con un crujido suave.

Brumli señala la puerta.

"Me molesta muchísimo que eso haya funcionado."`,
        opciones: [
            {
                texto: "Entrar en la cámara interior",
                siguiente: "acto4_camara_interior"
            }
        ]
    },

    acto4_camara_interior: {
        titulo: "La cámara interior",
        texto: `La cámara interior es pequeña.

En el centro hay una piedra blanca.

Sobre ella descansa una campanilla parecida a la que Gusamir encontró en la montaña.

Saltarina se acerca despacio.

Por primera vez, la Guardiana Gris parece cansada.`,
        opciones: [
            {
                texto: "Colocar la campanilla antigua sobre la piedra",
                condicion: () => tieneObjeto("Campanilla antigua"),
                accion: () => {
                    registrarEvento("campanilla_colocada_acto4");
                    estado.vinculo += 2;
                },
                siguiente: "acto4_campanilla"
            },
            {
                texto: "Observar la piedra blanca",
                siguiente: "acto4_piedra_blanca"
            }
        ]
    },

    acto4_piedra_blanca: {
        titulo: "La piedra blanca",
        texto: `La piedra blanca está tibia.

No hay fuego cerca.

En su superficie se leen unas palabras:

"La Guardiana Gris no protege un lugar.

Protege a quienes aún tienen camino."

Saltarina baja la cabeza.

Brumli no hace bromas esta vez.`,
        opciones: [
            {
                texto: "Permanecer en silencio",
                accion: () => {
                    agregarEntradaDiario(
                        "La piedra blanca",
                        "La piedra decía que la Guardiana Gris no protege un lugar, sino a quienes aún tienen camino. Saltarina parecía entenderlo mejor que nadie."
                    );
                },
                siguiente: "acto4_salida_camara"
            }
        ]
    },

    acto4_campanilla: {
        titulo: "El sonido que no sonaba",
        texto: `Gusamir coloca la campanilla antigua sobre la piedra.

Durante un segundo no ocurre nada.

Luego suena.

Una nota clara.

Suave.

Imposible.

Saltarina cierra los ojos.

El aire de la cámara parece volverse más ligero.`,
        opciones: [
            {
                texto: "Esperar a que el sonido termine",
                accion: () => {
                    agregarEntradaDiario(
                        "La campanilla",
                        "La campanilla antigua ha sonado al colocarla sobre la piedra blanca. Saltarina parecía reconocer ese sonido."
                    );
                },
                siguiente: "acto4_salida_camara"
            }
        ]
    },

    acto4_salida_camara: {
        titulo: "Fuera de la cámara",
        texto: () => tieneEvento("campanilla_colocada_acto4")
            ? `Al salir de la cámara, Saltarina se queda junto a Gusamir.

No camina delante.

No se marcha.

Se queda a su lado.

Brumli sonríe.

"Creo que acabas de ser aceptado por una cabra ancestral."

Pausa.

"No sé si felicitarte o preocuparme."`
            : `Al salir de la cámara, Saltarina observa a Gusamir durante un largo momento.

Luego camina hacia la puerta del refugio.

No parece enfadada.

Pero tampoco completamente convencida.

Brumli murmura:

"Creo que hemos aprobado. Pero con nota justa."`,
        opciones: [
            {
                texto: "Salir del refugio",
                accion: () => avanzarHastaTarde(),
                siguiente: "acto4_exterior_final"
            }
        ]
    },

    acto4_exterior_final: {
        titulo: "La noche en el Paso",
        texto: `Fuera, la tarde empieza a caer sobre las montañas.

El Paso de la Cabra Gris ya no parece una amenaza.

Parece una frontera.

Más allá del refugio, el camino desciende hacia unas tierras rojizas.

Brumli señala el horizonte.

"Ruinas."

"Siempre hay ruinas."

Saltarina permanece junto a Gusamir.`,
        opciones: [
            {
                texto: "Acampar junto al refugio",
                accion: () => {
                    avanzarHastaNoche();
                    recuperarEnergia(20);
                },
                siguiente: "acto4_campamento"
            }
        ]
    },

    acto4_campamento: {
        titulo: "Campamento bajo la montaña",
        texto: `El grupo acampa junto al refugio.

Brumli se queda dormido casi al instante.

Saltarina permanece despierta, mirando hacia las estrellas.

Durante un momento, Gusamir cree ver cuatro luces pequeñas sobre una roca cercana.

Cuatro ojos.

Dos guardianes.

Luego desaparecen.`,
        opciones: [
            {
                texto: "Anotar lo ocurrido en el diario",
                accion: () => {
                    estado.vinculo += 1;
                    marcarLugarSeguro("acto4_campamento");
                    agregarEntradaDiario(
                        "Ojos en la noche",
                        "Durante la noche he creído ver cuatro ojos sobre una roca. Quizá los Guardianes del Umbral siguen cerca."
                    );
                },
                siguiente: "acto4_fin"
            },
            {
                texto: "Dormir sin decir nada",
                accion: () => marcarLugarSeguro("acto4_campamento"),
                siguiente: "acto4_fin"
            }
        ]
    },

    acto4_fin: {
        titulo: "Acto IV completado",
        texto: `Gusamir ha cruzado el Paso de la Cabra Gris.

Ha encontrado el refugio de Saltarina.

Ha descubierto parte de su historia con Bethriel.

Y ha comprendido que la Guardiana Gris no protege solo caminos.

Protege a quienes aún tienen una nueva marcha por delante.

Al amanecer, las Ruinas del Valle Rojo esperan.`,
        opciones: [
            {
                texto: "Dormir y partir hacia las Ruinas del Valle Rojo",
                accion: () => {
                    dormirHastaMananaSiguiente();
                    descubrirMapa("Ruinas del Valle Rojo");
                    completarActo("Acto 4");
                    agregarEntradaDiario(
                        "Acto IV completado",
                        "Hemos dejado atrás el Paso de la Cabra Gris. Saltarina ya no parece solo una guía. Empieza a parecer parte del grupo."
                    );
                    guardarPartida();
                },
                siguiente: "acto5_inicio"
            },
            {
                texto: "Guardar y volver al menú",
                accion: () => guardarPartida(),
                volverMenu: true
            }
        ]
    }
};