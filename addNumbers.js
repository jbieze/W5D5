const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft === 0) {
    reader.close();
    return completionCallback(sum);
  }


  if (numsLeft > 0) {
    reader.question("Gimme a number, dummy.", (response) => {
      let num = parseInt(response, 10);
      sum += num;
      console.log(`${response}? I can add that up easy.`);
      console.log(`The sum is ${sum}. Obviously.`);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  }
}

addNumbers(0, 3, function (sum) { console.log(`Total Sum: ${sum}`);});
