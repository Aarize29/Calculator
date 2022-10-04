// const op = prompt('Enter operator to perform the calculation ( either +, -, * or / ): ');  
const op=document.getElementById("b")
  
// accept the number from the user through prompt box  
// const n1 = parseFloat(prompt ('Enter the first number: '));  
const n1=document.getElementById("button")
// const n2 = parseFloat(prompt ('Enter the second number: '));  
const n2=document.getElementById("button")
let r;
if(op=='+')
{
    r=n1+n2;
}
else if(op=='-')
{
    r=n1-n2;
}
else if(op=='*')
{
    r=n1*n2;
}
else if(op=='/')
{
    r=n1/n2;
}
else if(op=='%')
{
    r=n1%n2;
}
// window.alert("RESULT IS"+r);

 function Darkmode()
   {
    var c=document.getElementById("but")
    var e=document.body
     document.body.style.backgroundColor="#A020F0"
     c.innerText="Dark mode is on"
   }