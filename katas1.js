function oneThroughTwenty() { 
  let count = []
  for (let i = 1; i <= 20; i++) {
    count.push(i)
  }
  return count
}

console.log(oneThroughTwenty())

function evensToTwenty() {
  let count = []
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      count.push(i)
    }
  }
  return count
}

console.log(evensToTwenty())

function oddsToTwenty() {
    let count = []
    for (let i = 1; i <= 20; i++){
      if (i % 2 !== 0) {
        count.push(i)
      }
    } 
    return count
}

console.log(oddsToTwenty())

function multiplesOfFive() {
  let count = []
  for (let i = 5; i <= 100 ; i++) {
    if (i % 5 === 0) {
      count.push(i)
    }
  }
  return count
}

console.log(multiplesOfFive())

function squareNumbers(x) {
/* Um número inteiro diz-se um quadrado perfeito se é o quadrado de um outro inteiro.
Por exemplo: 25 é um quadrado perfeito porque 25 = 5² */
    let quad = []
    for (let i = 1; i <= x; i++) {
        quad.push(i*i)
    }
    return quad
}

console.log(squareNumbers(10))

function countingBackwards() {
  let count = []
  for (let i = 21 -1; i > 0; i--) {
    count.push(i)
  }
  return count
}

console.log(countingBackwards())

function evenNumbersBackwards() {
  let count = []
  for (let i = 21 - 1; i > 0; i--) {
    if (i % 2 === 0) {
      count.push(i)
    }
  }
  return count
}

console.log(evenNumbersBackwards())

function oddNumbersBackwards() {
  let count = []
  for (let i = 20; i > 0; i--){
    if (i % 2 !== 0) {
      count.push(i)
    }
  } 
  return count
}

console.log(oddNumbersBackwards())

function multiplesOfFiveBackwards() {
  let count = []
  for (let i = 100; i >= 5; i--) {
    if (i % 5 === 0) {
      count.push(i)
    }
  }
  return count
}

console.log(multiplesOfFiveBackwards())

function squareNumbersBackwards(x) {
  let quad = []
  for (let i = x; i >= 1; i--) {
      quad.push(i*i)
  }
  return quad
}

console.log(squareNumbersBackwards(10))