// Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.

// Explain & TIP: Swapping variables is a common task. You can use a temporary variable to hold one value while you swap them around. It's like juggling where you temporarily place one ball in a basket to free up your hand.

function swapvalues() {
  let a = 5;
  let b = 10;

  console.log("\n");

  console.log("value at a before swapping", a);
  console.log("value at b at swapping", b);

  //Swapping numbers is a common programming concept used to exchange the values of two variables. This is often done without using a temporary variable. There are several methods to achieve this:1-using a teporary variable,2-Using Arithmetic Operators and so on.

  //1-Using a Temporary Variable:
  // In this method, you use an additional variable to temporarily hold one of the values while swapping the other two.

  console.log("\n");

  let temp = a; //additiona variable named temp is used to hold value of a.
  a = b; //We assign the value of b to a:
  b = temp; //Finally, we assign the value stored in the temporary variable temp to b:
  console.log("value of a after swapping", a); //So, a now holds the initial value of b, and b holds the initial value of a, achieving the swap.
  console.log("value of b after swapping", b);
}
swapvalues();//Author- HUMA MOHSIN
