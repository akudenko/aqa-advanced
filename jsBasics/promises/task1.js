function showTextWithDelay(text, delay) {
    setTimeout(() => {
      console.log(text);
    }, delay);
  }

  showTextWithDelay('Hello', 3000);