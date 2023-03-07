for (let i = 100; i < 201; i++) {
  let output = "";
  if (i % 3 === 0) {
    output += "Loopy";
  }
  if (i % 4 === 0) {
    output += "Lighthouse";
  }
  // Log output if truthy, i otherwise
  console.log(output || i); 
}

/*
Original Code

for (let i = 100; i < 201; i++) {
  if (i % 3 === 0 && i % 4 === 0) {
    console.log("LoopyLighthouse");
    continue;
  } else if (i % 3 === 0) {
    console.log("Loopy");
    continue;
  } else if (i % 4 === 0) {
    console.log("Lighthouse");
    continue;
  } else {
    console.log(i); 
  }
}

*/