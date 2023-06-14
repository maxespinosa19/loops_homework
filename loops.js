
// // Factorial Calculator

function calculateFactorial(num) {
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
      factorial *= i;
    }
 return factorial;
  }

console.log(factorial(4))
  
  
  const number = 2;
  const result = calculateFactorial(number);
  
  // Triangle Level 1

 

  function printRightTriangle(height) {
    for (let i = 0; i < height; i++) {
        console.log("X".repeat(i+1));
    }
  }

  printRightTriangle(7);

  // level 2

function triangle2(height){
    for(let i = 0; i < height; i++){
        console.log("  ".repeat(height-(i+1)) + "x".repeat(i*4+1)) 
    }

}

triangle2(5)

  
//crying my eys out
  

  
 