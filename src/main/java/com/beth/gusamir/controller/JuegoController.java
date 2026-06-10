package com.beth.gusamir.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class JuegoController {

    @GetMapping("/")
    public String inicio() {
        return "juego";
    }

    @GetMapping("/juego")
    public String juego() {
        return "juego";
    }
}