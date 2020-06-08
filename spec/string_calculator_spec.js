const Calculator = require ("../src/string_calculator")

describe("Calculator that can handle two integers", function () {

    it("should return 0 if input is an empty string", function () {
      expect(calculator.add("")).toBe(0);
    });
  
    it("should return 1 if input is \"1\"", function () {
      expect(calculator.add("1")).toBe(1);
    });
  
    it("should return 2 if input is \"1,1\"", function () {
      expect(calculator.add("1,1")).toBe(2);
    
    });
});

2.//Modify the add function to handle multiple integers.

describe("Calculator that can handle multiple integers", function() {

    it("should return 10 if input is \"1,2,3,4\"", function () {
        expect(calculator.add("1,2,3,4")).toBe(10);
      });
    
      it("should return 0 if its an empty string", function () {
        expect(calculator.add("")).toBe(0);
      });
    
      it("should return 18 if input is \"1\"", function () {
        expect(calculator.add("1")).toBe(1);
      });
    
      it("should return 2 if input is \"1,1\"", function () {
        expect(calculator.add("1,1")).toBe(2);
     
    });
});

3.//Modify the add function so that it can handle new lines between integers.

describe("Calculator that can new lines between integers", function() {

    it("should return 6 if input is \"1\n2,3", function () {
        expect(calculator.add("1\n2,3")).toBe(6);
      });
});

4.//Modify the add function so that it can handle different delimeters

describe("Calculator that can handle different delimeters", function() {

    it("should return 6 if input is \"//;\n1;2", function () {
        expect(calculator.add("1\n2,3")).toBe(3);
      });
      it("should return 3 if input is \"//4\\n142\"", function () {
        expect(calculator.add("//4\n142")).toBe(3);
      });    
    
});

5.//Modify the add function so that it can handle negative integers.

describe("Calculator that can handle negative numbers", function() {
    
    it("should throw an exception if input is a negative number", function () {
        expect(calculator.add("-1,-2,3,4")).toThrow("negative numbers not allowed");
      });
    
});

6.//Modify the add function so that it ignores integers greater than or equal to 1000.
describe("Calculator that ignores integers greater or equal to 1000", function() {

  it("should return 3 if input is \"//;1000,1;2\"", function () {
    expect(calculator.add("//;1000,1;2")).toBe(3);
    });
});

7.//Modify the add function so that it can support delimiters of any length
describe("Calculator that can support delimeters of any length", function() {

  it("should return 6 if input is \"//***\n1***2***3\"", function () {
      expect(calculator.add("//***\n1***2***3")).toBe(6);
    });
});

  
 
  
  
    
  
    
 