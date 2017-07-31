// $(document).ready() is a jQuery function that delays executing the passed in
// JavaScript function until the browser has loaded all of the HTML.
$(document).ready(function() {

    // Coordinates for Dayton in an array formated as [latitude, longitude]
    var DAYTON = [39.7589, -84.1916];

    // This line tells leaflet where to render the map in the HTML, where to
    // center the map at (Dayton), and what zoom level to use.
    var mymap = L.map('map').setView(DAYTON, 6);

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mymap);

    var countiesLayer = L.featureGroup();
    countiesLayer.addTo(mymap);

    var bindPopup = function(feature, layer) {
        var countyTemplate = '<h2>{COUNTY_NAM}</h2><p>FIPS Code: {FIPS_CODE}</p><p>2000 Population: {POP_2000}</p>';
        layer.bindPopup(L.Util.template(countyTemplate, feature.properties));
    };

    var color = function(feature){
      var num = feature.properties.ELEVATION_/255.0;
      return {color: `rgb(${num},${num},${num})`};
    }

    // First, we need to load the GeoJSON file
    $.get('counties.oh.json', function(data) {

        // Since Leaflet already knows how to render GeoJSON, we won't have to
        // do any processing to the data.
        L.geoJson(data, {
            style: color,
            onEachFeature: bindPopup
        }).addTo(countiesLayer);

        // We can still zoom to the extents of a layer by using our old
        // FeatureGroup layer trick
        mymap.fitBounds(countiesLayer.getBounds());
    }); // $.get()
});
