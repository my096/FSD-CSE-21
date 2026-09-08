function f1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hi");
      resolve();
    }, 4000);
  });
}

function f2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("abes");
      resolve();
    }, 1000);
  });
}

async function test() {
    try {
        await f1();
        await f2();
    }
    catch (err) {
        console.log("Error",err);
    }
    
}
test();