const escenasActo8 = {
    acto8_inicio: {
        titulo: "Acto VIII — El Santuario de Bethriel",
        texto: `Gusamir cruza la puerta blanca.

La Séptima Senda queda atrás.

Al otro lado no hay una sala.

Ni un castillo.

Ni un trono.

Hay un claro inmenso bajo un cielo imposible.

Flores blancas cubren el suelo.

En el centro, una figura espera.

Bethriel.`,
        opciones: [
            {
                texto: "Avanzar hacia Bethriel",
                siguiente: "acto8_bethriel"
            }
        ]
    },

    acto8_bethriel: {
        titulo: "Bethriel",
        texto: `Bethriel sonríe al ver a Gusamir.

No parece sorprendida.

Parece aliviada.

"Has tardado."

Saltarina, blanca o gris, se coloca junto a Gusamir.

Bola y Venus observan desde el borde del claro, como dos pequeñas estrellas con forma de gato.`,
        opciones: [
            {
                texto: "Decir que el camino era largo",
                siguiente: "acto8_conversacion_bethriel"
            },
            {
                texto: "Decir que Bethriel dejó demasiadas pistas raras",
                siguiente: "acto8_conversacion_bethriel"
            }
        ]
    },

    acto8_conversacion_bethriel: {
        titulo: "La promesa",
        texto: `Bethriel camina despacio entre las flores.

"No te llamé para que encontraras un lugar."

"Ni para que ganaras una carrera."

"Ni siquiera para que demostraras que podías recorrer las Siete Sendas."

Gusamir mira el claro.

Siente que todas las cartas leídas, todas las flores encontradas y todas las decisiones absurdas pesan de golpe.

Bethriel se detiene frente a él.

"Te llamé porque una promesa antigua no se cumple llegando."

"Se cumple eligiendo continuar."`,
        opciones: [
            {
                texto: "Preguntar cuál era la promesa",
                siguiente: "acto8_vorian_llega"
            }
        ]
    },

    acto8_vorian_llega: {
        titulo: "Vorian",
        texto: `La niebla del borde del claro se agita.

Vorian aparece entre las flores.

Su túnica está manchada por el viaje.

Su bastón blanco ya no parece tan impecable.

Mira a Bethriel.

Luego a Gusamir.

Luego a Saltarina.

"Así que era cierto."

"El Santuario no se abre a quien llega primero."`,
        opciones: [
            {
                texto: "Escuchar a Vorian",
                siguiente: "acto8_vorian_comprende"
            },
            {
                texto: "Enfrentarte a Vorian con firmeza",
                condicion: () => estado.valor >= 5,
                siguiente: "acto8_vorian_valor"
            }
        ]
    },

    acto8_vorian_valor: {
        titulo: "Valor",
        texto: `Gusamir da un paso al frente.

"No todo lo que se busca pertenece al que más insiste."

Vorian baja la mirada.

Durante un instante parece que va a responder con orgullo.

Pero no lo hace.

"Quizá ese fue mi error."

"Confundí búsqueda con derecho."`,
        opciones: [
            {
                texto: "Dejar que Vorian hable con Bethriel",
                siguiente: "acto8_vorian_comprende"
            }
        ]
    },

    acto8_vorian_comprende: {
        titulo: "Comprender",
        texto: `Vorian mira el Santuario.

"Creí que la promesa era algo que podía recuperar."

Bethriel niega suavemente.

"Las promesas no se recuperan."

"Se sostienen."

Vorian cierra los ojos.

Por primera vez, no parece rival.

Parece alguien que ha llegado tarde a entender su propio camino.`,
        opciones: [
            {
                texto: "Resolver el final",
                siguiente: () => decidirFinal()
            }
        ]
    },

    acto8_final_absurdo: {
        titulo: "Final Absurdo — El elegido cuestionable",
        texto: `Bethriel abre un pergamino.

"Antes de continuar, debo revisar ciertos informes del viaje."

El claro queda en silencio.

Bethriel lee:

"Piedras lamidas."

"Setas lamidas."

"Ollas de procedencia dudosa."
        
"Enfrentamientos intules a orcos."

"Transporte voluntario mediante cabra."

Vorian mira a Gusamir.

Saltarina mira a Bethriel.

Bola y Venus miran al vacío, como si prefirieran no estar asociados a esto.

Bethriel dobla el pergamino.

"Gusamir."

"Te quiero."

"Pero necesitamos suspender la ceremonia por revisión de criterio heroico."

Saltarina emite un sonido que se parece demasiado a una risa.

Fin.`,
        opciones: [
            {
                texto: "Desbloquear Final Absurdo",
                accion: () => {
                    desbloquearLogro("Final Absurdo");
                    guardarPartida();
                },
                siguiente: "acto8_post_final"
            }
        ]
    },

    acto8_final_tardio: {
        titulo: "Final Tardío — El Santuario vacío",
        texto: `Bethriel mira a Gusamir con ternura.

"Has llegado."

"Pero el Santuario ya respondió antes."

Vorian baja la cabeza.

No parece victorioso.

Solo cansado.

Las flores del claro se mueven con un viento suave.

La promesa no se rompe.

Pero esta vez no se completa del todo.

Gusamir entiende que no todos los caminos esperan para siempre.`,
        opciones: [
            {
                texto: "Aceptar el final tardío",
                accion: () => {
                    desbloquearLogro("Final Tardío");
                    guardarPartida();
                },
                siguiente: "acto8_post_final"
            }
        ]
    },

    acto8_final_normal: {
        titulo: "Final Normal — La promesa encontrada",
        texto: `Bethriel toma las manos de Gusamir.

"Has llegado."

"Eso ya importa."

Algunas flores del claro permanecen cerradas.

Algunas cartas nunca llegaron a ser leídas.

Pero el camino fue real.

Y a veces, llegar con piezas perdidas sigue siendo llegar.`,
        opciones: [
            {
                texto: "Completar Final Normal",
                accion: () => {
                    desbloquearLogro("Final Normal");
                    guardarPartida();
                },
                siguiente: "acto8_post_final"
            }
        ]
    },

    acto8_final_bueno: {
        titulo: "Final Bueno — Casi todas las sendas",
        texto: `Bethriel mira las flores que Gusamir ha reunido.

Luego las cartas.

"Has escuchado mucho."

"No todo."

"Pero sí lo suficiente para entender que una aventura no se mide solo por llegar."

Saltarina, transformada en Blanca, permanece a su lado.

Bola y Venus se acercan por primera vez.

No hablan.

Pero el Santuario parece más completo con ellos allí.`,
        opciones: [
            {
                texto: "Completar Final Bueno",
                accion: () => {
                    desbloquearLogro("Final Bueno");
                    guardarPartida();
                },
                siguiente: "acto8_post_final"
            }
        ]
    },

    acto8_final_verdadero: {
        titulo: "Final Verdadero — La nueva región del mapa",
        texto: `Bethriel sonríe.

"¿Sabes cuál era la promesa?"

Gusamir no responde enseguida.

Bethriel continúa:

"La promesa nunca fue llegar al Santuario."

"Ni encontrarme."

"Ni completar las Siete Sendas."

Saltarina la Blanca se coloca junto a ellos.

Bola y Venus aparecen entre las flores.

Vorian observa en silencio.

Y entonces llegan los recuerdos:

Brumli.

El tabernero.

La panadera.

El orco del puente.

Las voces del camino.

Todos los que, de alguna forma, hicieron posible la llegada.

Bethriel toma la mano de Gusamir.

"La promesa era que cuando llegara el momento de comenzar una nueva marcha..."

"...la recorreríamos juntos."

El cielo del Santuario se abre como un mapa.

Y una región nueva aparece donde antes solo había niebla.

Cumplir 30 años no es el final de una etapa.

Es desbloquear una nueva región del mapa.`,
        opciones: [
            {
                texto: "Completar Final Verdadero",
                accion: () => {
                    desbloquearLogro("Final Verdadero");
                    guardarPartida();
                },
                siguiente: () => puedeOctavaSenda()
                    ? "acto8_octava_senda"
                    : "acto8_post_final"
            }
        ]
    },

    acto8_octava_senda: {
        titulo: "La Octava Senda",
        texto: `Cuando todo parece terminar, Bethriel mira más allá del Santuario.

"Has encontrado las Siete Sendas."

Gusamir asiente.

"Entonces ya está."

Bethriel sonríe.

"No."

"Siempre hubo una octava."

Saltarina la Blanca se coloca frente a una puerta que no estaba allí.

Bola y Venus se sientan a ambos lados.

Brumli aparece al fondo del claro, con una jarra en la mano.

"No sé cómo he entrado."

"Pero me niego a irme."

La puerta se abre hacia una luz que no pertenece a ningún mapa conocido.

La aventura no termina.

Solo cambia de región.`,
        opciones: [
            {
                texto: "Desbloquear La Octava Senda",
                accion: () => {
                    desbloquearLogro("La Octava Senda");
                    guardarPartida();
                },
                siguiente: "acto8_post_final"
            }
        ]
    },

    acto8_post_final: {
        titulo: "Fin de la aventura",
        texto: `La historia de Gusamir queda escrita.

No como una línea recta.

Sino como un mapa lleno de caminos, errores, flores, cartas, cabras, gatos guardianes y decisiones difíciles de justificar.

Puedes volver al menú principal.

Y si quieres, iniciar otra partida para descubrir otro final.`,
        opciones: [
            {
                texto: "Volver al menú principal",
                accion: () => guardarPartida(),
                volverMenu: true
            }
        ]
    }
};