package com.waly.api_gateway.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hello-world")
public class HealthCheckController {

    @GetMapping
    public String healthCheck() {
        return "Hello World from Gateway Service!";
    }
}
