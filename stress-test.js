const fs = require('fs')

function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  

let runCount = 0

async function run() {
  runCount++
  if (runCount > 2) {
    return
  } 
  
  await wait(randomIntFromInterval(500, 2000))
  const json = fs.readFileSync('test.json').toString()
  try {
      const parsedJson = JSON.parse(json)
      parsedJson[Date.now()] = {
          foo: 'bar'
      }
      fs.writeFileSync('test.json', JSON.stringify(parsedJson, null, 2))
  } catch {
    console.log("Could not parse")
  }
  
  run()
}

run()