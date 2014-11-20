package me.wwsun.java;

import com.sun.istack.internal.logging.Logger;

public class Calculator {
	private final static Logger logger = Logger.getLogger(Calculator.class.getName(), null);
	
	public static int addTwoIntegers(int first, int second){
		logger.info("Calculator::addTwoIntegers");
		return first + second;
	}
	
}
