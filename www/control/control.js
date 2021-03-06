// Leave the next line intact and ignore it for now.
ControlFlow = function(test) {

  /****************************************************************************/
  // EXERCISE 1:
  //
  // In the anonymous function below, return true if the input
  // variable is equal to the number 42.  Otherwise return false.  Use
  // an `if' statement to achieve this.
  test.confirm(function(input) { // Write your code below this line.
    if (input === 42) {
      return true;
    } else {
      return false;
    }
  }); // End of the anonymous function.

  /****************************************************************************/
  // EXERCISE 2:
  //
  // In the anonymous function below, return true if the input
  // variable is equal to the number 42.  If the input is the number
  // 43 then return null.  In all other cases return false.
  //
  // Use an `if' statement to achieve this.
  test.confirm(function(input) { // Write your code below this line.
    if (input === 42) {
      return true;
    } else if (input === 43) {
      return null;
    } else {
      return false;
    }
  }); // End of the anonymous function.

  /****************************************************************************/
  // EXERCISE 3:
  //
  // Repeat exercise 2, this time using a `switch' statement.
  test.confirm(function(input) { // Write your code below this line.
    switch (input) {
      case 42:
        return true;
      case 43:
        return null;
      default:
        return false;
    }
  }); // End of the anonymous function.

  /****************************************************************************/
  // EXERCISE 4:
  //
  // In the anonymous function below, write a loop that calls the
  // `counter' function exactly 3 times.
  //
  // Example of calling the counter function:
  //
  //     counter();
  //
  test.confirm(function(counter) { // Write your code below this line.
    for (var i=0; i<3; ++i) { // executes 10 times.
      counter();
    }
  }); // End of the anonymous function.



  // Don't change anything below this line.
};
