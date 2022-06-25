function closestToTheMark(player1, player2) {
  const theMark = Math.floor(Math.random() * 100);
  
  var numberArray = [];

  //push difference between the mark and p1 to array
  if (player1 > theMark) {
    numberArray.push(player1 - theMark);
  } else {
    numberArray.push(theMark - player1);
  }

  //push difference between the mark and p2 to array
  if (player2 > theMark) {
    numberArray.push(player2 - theMark);
  } else {
    numberArray.push(theMark - player2);
  }

  //get smallest difference from array
  var result = Math.min(...numberArray);

  //return result
  if (result === numberArray[0]) {
    return `the mark is ${theMark}\n player1 is the closest with ${player1} \n player2 is the farthest with ${player2}`;
  } else {
    return `the mark is ${theMark}\n player2 is the closest with ${player2}\n player1 is the farthest with ${player1}`;
  }
}
