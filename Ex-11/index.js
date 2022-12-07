document.write("Print Sum using For Loop"+"<br/><br/>");

let sum = 0;
for(let i=1;i<=100;i++)
{
    sum += i;
}
document.write("The sum of 1 to 100 is "+sum+"<hr/>");


document.write("Print multiplication table of 10"+"<br/><br/>");

for(let i=1;i<=10;i++)
{
    let num = 10 * i;
    document.write("10 x "+i+" = "+num+"<br/>");
}
document.write("<hr/>");


document.write("Loop through an array using for of"+"<br/><br/>");

let subjects = new Array("HTML","CSS","JS","REACT","VUE");
for(let i of subjects)
{
    document.write(i+"<br/>");
}