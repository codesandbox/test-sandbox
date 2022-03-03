async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function run() {
  for (let i = 0; i < 5; i++) {
    await sleep(5000);
    console.log("Sleep 1");
  }

  process.exit(1);
}

run();
