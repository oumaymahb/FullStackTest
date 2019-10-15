package com.test.Multiplication.service;

import com.test.Multiplication.model.Multiplication;
import org.springframework.stereotype.Service;

@Service
public class MultiplicationService {

    public Multiplication calculateResult(Multiplication obj){
        obj.setResult(obj.getNb1()*obj.getNb2());
        return obj;
    }
}
