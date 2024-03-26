// //Question 73: Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. Then, update its value within the same function and log both the initial and updated values.

// Explain & TIP: In JavaScript, you can assign a value to a variable with = and later update it as needed. This is fundamental for keeping track of changing data within your programs.

function personName() {
  console.log("\n");
  //declare a variable using let and assign an initial value.
  let person = "HUMA";
  console.log("Initial value at variable personName is :-", person);

  console.log("\n");

  //update its value within the same function and log both the initial and updated values.
  person = "HUMA MOHSIN";
  console.log(
    "After Redeclaration,Value at variable personName is :-",
    person
  );
}
personName();//The function doesn't require any arguments since it doesn't have any parameters defined.
//Author-HUMA MOHSIN