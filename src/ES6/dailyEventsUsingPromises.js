const cleanRoom = () => {
  return new Promise((resolve, reject) => {
    const isClean = true;
    if (isClean) resolve("room is clean");
    else reject("room isnt clean");
  });
};

const goForWalk = () => {
  return new Promise((resolve, reject) => {
    const walked = true;
    if (walked) resolve("walk is complete");
    else reject("didnt walk");
  });
};

const eatIceCream = () => {
  return new Promise((resolve, reject) => {
    const ice = true;
    if (ice) resolve("had iceCream");
    else reject("no icecream");
  });
};

cleanRoom()
  .then(success => {
    console.log(success);
    return goForWalk();
  })
  .then(success => {
    console.log(success);
    return eatIceCream();
  })
  .then(success => {
    console.log(success);
  })
  .catch(error => console.log(error));

const myAsynchFunction = async () => {
  try {
    const isCleaned = await cleanRoom();
    if (isCleaned) {
      const isWalkComplete = await goForWalk();
      console.log(isWalkComplete);
      if (isWalkComplete) {
        const isIce = await eatIceCream();
        if (isIce) {
          console.log(isIce);
        }
      }
    }
  } catch (err) {
    console.error(err);
  }
};

myAsynchFunction();
