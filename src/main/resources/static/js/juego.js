const escenasSistema = {
    agotamiento: {
        titulo: "Agotamiento",
        texto: `Las piernas de Gusamir fallan.

El mundo se inclina.

Durante un instante cree escuchar a Brumli decir:

"Eso pasa por no comer."

Cuando despierta, ha pasado un día.

No ha sido una derrota.

Pero el camino ha seguido avanzando sin él.`,
        opciones: [
            {
                texto: "Reincorporarse y continuar",
                accion: () => guardarPartida(),
                siguiente: () => estado.ultimoLugarSeguro
            }
        ]
    }
};

const escenas = {
    ...escenasSistema,
    ...escenasActo1,
    ...escenasActo2,
    ...escenasActo3,
    ...escenasActo4,
    ...escenasActo5
};

function nuevaPartida() {
    localStorage.removeItem("gusamir_partida");

    estado = crearEstadoInicial();

    mostrarJuego();
    cargarEscena("acto1_inicio");
}

function continuarPartida() {
    const partida = localStorage.getItem("gusamir_partida");

    if (!partida) {
        alert("No hay partida guardada.");
        return;
    }

    estado = JSON.parse(partida);
    mostrarJuego();
    cargarEscena(estado.escenaActual);
}

function cargarEscena(idEscena) {
    const escena = escenas[idEscena];

    if (!escena) {
        alert("Escena no encontrada: " + idEscena);
        return;
    }

    estado.escenaActual = idEscena;
    guardarPartida();

    document.getElementById("titulo-escena").textContent = escena.titulo;
    document.getElementById("texto-escena").textContent =
            typeof escena.texto === "function" ? escena.texto() : escena.texto;
    document.getElementById("fecha-juego").textContent =
            `Día ${estado.dia} · ${estado.periodo}`;

    const opcionesDiv = document.getElementById("opciones");
    opcionesDiv.innerHTML = "";

    escena.opciones.forEach(opcion => {
        if (opcion.condicion && !opcion.condicion()) {
            return;
        }

        const boton = document.createElement("button");
        boton.textContent = opcion.texto;

        boton.onclick = () => {
            estado.agotado = false;

            if (opcion.accion) {
                opcion.accion();
            }

            if (estado.agotado) {
                cargarEscena("agotamiento");
                return;
            }

            if (opcion.volverMenu) {
                volverAlMenu();
                return;
            }

            if (opcion.siguiente) {
                const siguienteEscena =
                        typeof opcion.siguiente === "function"
                        ? opcion.siguiente()
                        : opcion.siguiente;

                cargarEscena(siguienteEscena);
            }
        };

        opcionesDiv.appendChild(boton);
    });
}

function mostrarJuego() {
    document.getElementById("menu-principal").classList.add("oculto");
    document.getElementById("zona-logros").classList.add("oculto");
    document.getElementById("menu-juego").classList.add("oculto");
    document.getElementById("zona-juego").classList.remove("oculto");
}

function mostrarMenu() {
    guardarPartida();
    volverAlMenu();
}

function volverAlMenu() {
    document.getElementById("zona-juego").classList.add("oculto");
    document.getElementById("zona-logros").classList.add("oculto");
    document.getElementById("menu-juego").classList.add("oculto");
    document.getElementById("menu-principal").classList.remove("oculto");
}

function guardarPartida() {
    localStorage.setItem("gusamir_partida", JSON.stringify(estado));
    localStorage.setItem("gusamir_logros", JSON.stringify(estado.logros));
}

function agregarObjeto(nombre) {
    if (!estado.inventario.includes(nombre)) {
        estado.inventario.push(nombre);
    }
}

function agregarFlor(nombre) {
    if (!estado.flores.includes(nombre)) {
        estado.flores.push(nombre);
    }
}

function agregarCarta(carta) {
    const existe = estado.cartas.some(c => c.id === carta.id);

    if (!existe) {
        estado.cartas.push(carta);
    }
}

function agregarEntradaDiario(titulo, texto) {
    if (!estado.diario) {
        estado.diario = [];
    }

    const existe = estado.diario.some(entrada =>
        entrada.titulo === titulo &&
        entrada.texto === texto
    );

    if (!existe) {
        estado.diario.push({
            dia: estado.dia,
            periodo: estado.periodo,
            titulo: titulo,
            texto: texto
        });
    }
}

function descubrirMapa(nombre) {
    if (!estado.mapa.includes(nombre)) {
        estado.mapa.push(nombre);
    }
}

function completarActo(nombre) {
    if (!estado.actosCompletados.includes(nombre)) {
        estado.actosCompletados.push(nombre);
    }
}

function desbloquearLogro(nombre) {
    if (!estado.logros.includes(nombre)) {
        estado.logros.push(nombre);
        alert("Logro desbloqueado: " + nombre);
    }
}

function avanzarTiempo(puntos) {
    estado.puntosPeriodo += puntos;

    while (estado.puntosPeriodo >= 2) {
        estado.puntosPeriodo -= 2;

        if (estado.periodo === "Mañana") {
            estado.periodo = "Tarde";
        } else if (estado.periodo === "Tarde") {
            estado.periodo = "Noche";
        } else {
            estado.periodo = "Mañana";
            estado.dia++;
        }
    }
    
    estado.vorianVentaja += puntos;
}

function mostrarLogros() {
    document.getElementById("menu-principal").classList.add("oculto");
    document.getElementById("zona-juego").classList.add("oculto");
    document.getElementById("menu-juego").classList.add("oculto");
    document.getElementById("zona-logros").classList.remove("oculto");

    const logrosGuardados =
        JSON.parse(localStorage.getItem("gusamir_logros")) || [];

    const contenedor = document.getElementById("lista-logros");
    contenedor.innerHTML = "";

    todosLosLogros.forEach(logro => {
        const p = document.createElement("p");

        p.textContent = logrosGuardados.includes(logro)
            ? "🏆 " + logro
            : "🔒 " + logro;

        contenedor.appendChild(p);
    });
}

function abrirMenuJuego() {
    document.getElementById("zona-juego").classList.add("oculto");
    document.getElementById("menu-juego").classList.remove("oculto");

    mostrarSubmenu("estado");
}

function cerrarMenuJuego() {
    document.getElementById("menu-juego").classList.add("oculto");
    document.getElementById("zona-juego").classList.remove("oculto");
}

function mostrarSubmenu(tipo) {
    const contenedor = document.getElementById("contenido-submenu");

    let html = "";

    switch (tipo) {
        case "inventario":
            html = "<h3>🎒 Mochila</h3>";

            if (estado.inventario.length === 0) {
                html += "<p>No llevas nada.</p>";
            } else {
                estado.inventario.forEach(objeto => {
                    html += `<p>• ${objeto}</p>`;

                    if (consumibles[objeto]) {
                        html += `
                    <button onclick="usarConsumible('${objeto}')">
                        ${consumibles[objeto].texto}
                    </button>
                `;
                    }
                });
            }

            break;

        case "cartas":
            html = "<h3>✉️ Cartas de Bethriel</h3>";

            if (estado.cartas.length === 0) {
                html += "<p>No has encontrado cartas.</p>";
            } else {
                estado.cartas.forEach(carta => {
                    html += `
                <div class="entrada-menu">
                    <h4>${carta.titulo}</h4>
                    <p>${carta.texto.replaceAll("\n", "<br>")}</p>
                </div>
            `;
                });
            }

            break;

        case "flores":
            html = "<h3>🌸 Flores de Bethriel</h3>";
            html += `<p>${estado.flores.length}/7 encontradas</p>`;

            if (estado.flores.length === 0) {
                html += "<p>No has encontrado flores.</p>";
            } else {
                estado.flores.forEach(flor => {
                    html += `<p>• ${flor}</p>`;
                });
            }

            break;

        case "mapa":
            html = "<h3>📜 Mapa</h3>";

            estado.mapa.forEach(zona => {
                html += `<p>✓ ${zona}</p>`;
            });

            break;
            
        case "diario":
            html = "<h3>📖 Diario de viaje</h3>";

            if (!estado.diario || estado.diario.length === 0) {
                html += "<p>El diario todavía está vacío.</p>";
            } else {
                estado.diario.forEach(entrada => {
                    html += `
                <div class="entrada-menu">
                    <h4>Día ${entrada.dia} · ${entrada.periodo} — ${entrada.titulo}</h4>
                    <p>${entrada.texto}</p>
                </div>
            `;
                });
            }

            break;

        case "estado":
            html = `
                <h3>📊 Estado</h3>
                <p>⚡ Energía: ${estado.energia}</p>
                <p>🛡 Valor: ${estado.valor}</p>
                <p>🤝 Vínculo: ${estado.vinculo}</p>
                <p>📅 Día: ${estado.dia}</p>
                <p>🕒 Periodo: ${estado.periodo}</p>
            `;

            break;
    }

    contenedor.innerHTML = html;
}

function tieneObjeto(nombre) {
    return estado.inventario.includes(nombre);
}

function quitarObjeto(nombre) {
    estado.inventario = estado.inventario.filter(objeto => objeto !== nombre);
}

function avanzarHastaNoche() {

    while (estado.periodo !== "Noche") {
        avanzarTiempo(1);
    }
}

function avanzarHastaTarde() {

    while (estado.periodo !== "Tarde") {
        avanzarTiempo(1);
    }
}

function dormirHastaMananaSiguiente() {
    estado.dia++;
    estado.periodo = "Mañana";
    estado.puntosPeriodo = 0;
}

function tieneLogro(nombre) {
    return estado.logros.includes(nombre);
}

function registrarEvento(nombre) {
    if (!estado.eventos) {
        estado.eventos = [];
    }

    if (!estado.eventos.includes(nombre)) {
        estado.eventos.push(nombre);
    }
}

function tieneEvento(nombre) {
    return estado.eventos && estado.eventos.includes(nombre);
}

function cambiarEnergia(cantidad) {
    estado.energia += cantidad;

    if (estado.energia > 100) {
        estado.energia = 100;
    }

    if (estado.energia <= 0) {
        estado.energia = 0;
        activarAgotamiento();
        return;
    }
}

function recuperarEnergia(cantidad) {
    cambiarEnergia(cantidad);
}

function gastarEnergia(cantidad) {
    cambiarEnergia(-cantidad);
}

function activarAgotamiento() {
    estado.agotado = true;
    
    estado.dia++;
    estado.periodo = "Mañana";
    estado.puntosPeriodo = 0;
    estado.energia = 50;

    agregarEntradaDiario(
        "Agotamiento",
        "Gusamir agotó por completo sus fuerzas. Despertó más tarde, con la sensación de que el camino no perdona a quien olvida descansar."
    );

    guardarPartida();

    cargarEscena("agotamiento");
}

function marcarLugarSeguro(idEscena) {
    estado.ultimoLugarSeguro = idEscena;
}

const consumibles = {
    "Pan de viaje": {
        texto: "Comer pan de viaje",
        energia: 15,
        reemplazo: null
    },
    "Queso curado": {
        texto: "Comer queso curado",
        energia: 20,
        reemplazo: null
    },
    "Manzana roja": {
        texto: "Comer manzana roja",
        energia: 10,
        reemplazo: null
    },
    "Cantimplora llena": {
        texto: "Beber agua",
        energia: 15,
        reemplazo: "Cantimplora vacía"
    }
};

function usarConsumible(nombre) {
    const consumible = consumibles[nombre];

    if (!consumible) {
        return;
    }

    quitarObjeto(nombre);
    recuperarEnergia(consumible.energia);

    if (consumible.reemplazo) {
        agregarObjeto(consumible.reemplazo);
    }

    guardarPartida();
    mostrarSubmenu("inventario");
}

function aumentarVentajaVorian(cantidad) {
    estado.vorianVentaja += cantidad;
}