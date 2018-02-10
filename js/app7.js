// Marksheet APP
alert("Find your Result / Grade!");
var n = +prompt("Hom many subjects?");
var i, obt = 0, tot = n * 100, prc;
alert("Your total marks for "+ n +" subjects are "+ tot +". Now enter obtained marks of "+ n +" subjects");
for(i=1 ; i<=n ; i++){
    sum = +prompt("Enter Subject " + i + " marks ");
    obt = obt + sum;
}
alert("Your obatined marks are "+ obt +" out of "+ tot);
prc = (obt / tot) * 100;

if (prc >= 80 && prc <= 100) {
    alert(prc + "% & your grade is A+");
}  
else if(prc >= 70 && prc < 80) {
    alert(prc + "% & your grade is A");
} 
else if (prc >= 60 && prc < 70) {
    alert(prc + "% & your grade is B");
} 
else if (prc >= 50 && prc < 60) {
    alert(prc + "% & your grade is C");
} 
else if (prc >= 40 && prc < 50) {
    alert(prc + "% & your grade is D");
} 
else if (prc >= 33 && prc < 40) {
    alert(prc + "% & your grade is E");
}
else {
    alert("You are FAIL!");  
};
alert("Thank You!");
