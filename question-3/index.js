// //Question 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.
// Explain & TIP: Compound assignment operators combine an arithmetic operation with assignment, making your code cleaner and more concise. Instead of writing x = x + 2, you can simply write x += 2.
function compoundstatment() {
    var x = 4;
    console.log("value of x is", x);
    console.log("\n");
    //addition
    x += 8; //it adds 2 in x and then produce output.
    console.log("value of x after addition", x);
    console.log("\n");
    x -= 1;
    console.log("value of x after subtraction", x);
    console.log("\n");
    x *= 10;
    console.log("value of x after multiplication", x);
    console.log("\n");
    x /= 2;
    console.log("value of x after divison", x);
    console.log("\n");
}
compoundstatment();
//Author-HUMA MOHSIN
