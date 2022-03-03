async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function run() {
  for (let i = 0; i < 3; i++) {
    await sleep(5000);
    console.log(`Sleep ${i}`);
  }

  process.exit(1);
}

run();
