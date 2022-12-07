
let num = prompt("Enter the number to find factorial of that number");
let res = factorial(num);
document.write("Calculating Factorial of a Number"+"<br/><br/>");
document.write("The factorial of "+num+" is : "+res+"<hr>");
document.write("Calculating Area  of a Rectangle"+"<br/><br/>");
function factorial(num)
{
    if(num >= 1)
        return num * factorial(num-1);
    else if(num == 0)
        return 1;
    else
        alert("Enter a valid positive number");
}

let rectangle = {
    length:prompt("Enter the length of rectangle"),
    breadth:prompt("Enter the breadth of rectangle"),
    area(){
        let res = this.length * this.breadth;
       
        document.write("The area of rectangle is : "+res+" square units.<hr>");
    }
}

rectangle.area();

document.write("Calculating Area of square"+"<br/><br/>");
let square = {
    area(side){
        let res = side * side;
       
        document.write("The area of square is : "+res+" square units.");
    }
}
square.area(prompt("Enter the side of square"));


