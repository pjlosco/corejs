// In the index.html file there is a button.  When the button is
// clicked kick off an HTTP GET request to the following URL:
//
//   /api/artists
//
// The response text will be a JSON-encoded array of objects.  Inspect
// the response using the browser debugger and then insert the objects
// into the DOM.  Each artist in the response should be used to create
// a new <li> element in the existing <ul> container (the one with the
// ID of "artists").  Display the name of each artist inside the newly
// created <li> elements.
//
// BONUS:
//
// Clicking one of the <li> elements should display all information
// about the clicked artist in the <ul> with the ID of "details".
// (Hint: make another HTTP request to /api/artists/N where N is the
// artist ID.)
(function() {

  var artistsDetails = [];

  // Your code here.
  var loadContentButton = document.querySelector("#loadContent");
  loadContentButton.addEventListener("click", function(event) {
    
    var req = new XMLHttpRequest(); 

    req.addEventListener("load", function(e) { 
      if (req.status == 200) {
        var data = JSON.parse(req.responseText);
        // break out artists
        for(var index = 0; index < data.length; index++) {
          artistsDetails.push({
            id: data[index].id,
            artistName: data[index].name,
            formationYear: data[index].formation_year,
            website: data[index].website
          });
        }

        // TODO
      }
    });

    req.open("GET", "/api/artists");
    req.send(null);
  });

})();
