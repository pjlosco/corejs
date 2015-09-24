// In the index.html file there are several elements containing the
// text "Click Me".  Those elements are followed by another element
// containing the number zero, which we'll call the "counter".
//
// Inside the anonymous function below, write the necessary code so
// that clicking any "Click Me" element will increment its paired
// counter.
//
// BONUS: Create a new element on the page that displays the sum of
// all other counters.
(function() {

  var totalClicks = 0;

  var clickers = [];
  clickers.push({
    clicker: document.querySelector("#container ul li:nth-child(1) button"),
    counter: document.querySelector("#container ul li:nth-child(1) span")
  });
  clickers.push({
    clicker: document.querySelector("#container ul li:nth-child(2) button"),
    counter: document.querySelector("#container ul li:nth-child(2) span")
  });
  clickers.push({
    clicker: document.querySelector("body p:nth-child(3) button"),
    counter: document.querySelector("body p:nth-child(3) span")
  });
  clickers.push({
    clicker: document.querySelector("body p:nth-child(4) span:nth-child(1)"),
    counter: document.querySelector("body p:nth-child(4) span:nth-child(2)")
  });
  clickers.push({
    clicker: document.querySelector("body p:nth-child(5) a"),
    counter: document.querySelector("body p:nth-child(5) span")
  });

  function counterTrigger (clicker, counter) {
    clicker.addEventListener("click", function(event) {
      currentCount = Number(counter.innerText);
      counter.innerText = currentCount + 1;
      totalClicks++;
      body.innerText = "Total Clicks: " + totalClicks;
      event.preventDefault();
    });
  }
  
  clickers.forEach(function (item, index, array) {
    counterTrigger(item.clicker, item.counter);
  });

  var body = document.body.appendChild(document.createElement("h2"));
  body.innerText = "Total Clicks: " + totalClicks;

})();

