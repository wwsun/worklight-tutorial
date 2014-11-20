Section 3: worklight server-side development basics
==================

###Samples:

1. Communicating with HTTP back-end systems: get Engadget.com feeds (adapters)
2. Communicating with SQL databases (todo)
3. Invoking adapter procedures form hybrid client applications (adapters + app)
4. Using Java in adapters (adapters)

###Tips:
> Using Java in adapters:

1. put your java code in the `server/java` folder
2. put your 3rd java library in `server/lib` folder
3. you can invoke your java code in JavaScript or Java

e.g. Invoke Java codes in JavaScript

	function addTwoIntegers(a,b){
		return {
			//addTwoIntegers is a static method (or instace method)
			//otherwise you should new a object
			result: com.worklight.customcode.Calculator1.addTwoIntegers(a,b)
		};
	}