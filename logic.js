//Set variable to hold the Query URL in Global Scope

var queryURL ="https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// Perform a GET request to the query URL
d3.json(queryURL, function(data) {
  // Once we get a response, send the data.features object to the createFeatures function
console.log(data.features);
 });

