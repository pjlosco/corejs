/*
 * Using only the built-in DOM methods, find the elements that have
 * the text "FLAG" inside them and move them (the element) into the
 * div with id of #bucket.
 *
 * Hint: you can use:
 *
 *   - document.getElementById
 *   - document.getElementsByTagName
 *   - document.getElementsByClassName
 *   - document.querySelector
 *   - document.querySlectorAll
 *
 * and all the parent, child and sibling selectors, along with the DOM
 * traversal properties such as:
 *
 *   - parentNode
 *   - previousSibling
 *   - nextSibling
 *   - firstChild
 *   - lastChild
 *   - childNodes
 *
 * Make sure to read the index.html file and study the locations of
 * the FLAG elements.
 */
(function() { // Keep this line.
  var flags = [];

  flags.push({flagName: document.querySelector("div#container .main ul li.flag"), includeTag: false});
  flags.push({flagName: document.querySelector("#articles article:nth-child(1) p:nth-child(3) a span"), includeTag: true});
  flags.push({flagName: document.querySelector("div.footer div div div:nth-child(2) div:nth-child(1)"), includeTag: true});
  flags.push({flagName: document.querySelector("#article-3 p:nth-child(4) span"), includeTag: true});
  flags.push({flagName: document.querySelector("#article-3 p:nth-child(4)"), includeTag: true});
  
  function bucketIt(flag, includeTag) {
    var bucket =  document.querySelector("#bucket ul");
    if (includeTag) {
      bucket.appendChild(document.createElement("li")).appendChild(flag);
    } else {
      bucket.appendChild(flag);
    }
  }

  flags.forEach(function (item, index, array) {
    bucketIt(item.flagName, item.includeTag);
  });

})(); // Keep this line.
