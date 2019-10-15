package com.test.Multiplication.controller;

import com.test.Multiplication.model.Multiplication;
import com.test.Multiplication.service.MultiplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("multiplication")
public class MultiplicationController {

    @Autowired
    MultiplicationService multiplicationService;

    @PostMapping
    public Multiplication getResult(@RequestBody Multiplication obj){
        return this.multiplicationService.calculateResult(obj);
    }
}
