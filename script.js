"use strict";

function Counter() {
  let counter = 0;
  const getCounter = () => counter;

  const increaseCounter = () => (counter += 1);
  const decreaseCounter = () => (counter -= 1);
  const resetCounter = () => (counter = 0);

  return {
    getCounter,
    increaseCounter,
    decreaseCounter,
    resetCounter,
  };
}

function displayCounter() {
  const buttonControls = document.querySelector(".buttons-ctn");
  const counterStatus = document.querySelector(".counter");

  const runCounter = Counter();

  const changeCounterColor = () => {
    if (runCounter.getCounter() === 0) {
      return (counterStatus.style.color = "black");
    }
    if (runCounter.getCounter() > 0) {
      return (counterStatus.style.color = "green");
    }
    if (runCounter.getCounter() < 0) {
      return (counterStatus.style.color = "red");
    }
  };

  buttonControls.addEventListener("click", (e) => {
    switch (e.target.classList[0]) {
      case "increase-btn":
        runCounter.increaseCounter();
        changeCounterColor();
        counterStatus.textContent = runCounter.getCounter();
        break;
      case "decrease-btn":
        runCounter.decreaseCounter();
        changeCounterColor();
        counterStatus.textContent = runCounter.getCounter();
        break;
      case "reset-btn":
        runCounter.resetCounter();
        changeCounterColor();
        counterStatus.textContent = runCounter.getCounter();
    }
  });
}

displayCounter();
