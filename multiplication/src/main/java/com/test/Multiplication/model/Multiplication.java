package com.test.Multiplication.model;


import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Multiplication {

    private Double nb1;
    private Double nb2;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Double result;
}
