var map = L.map('mymap', {
    center: [13.125, 106.134],
    zoom: 6,
    layers: op_street,
});

var op_street = L.tileLayer.provider("OpenStreetMap").addTo(map);

var mymarker = {};
map.on('click', function (e) {
    var coord = e.latlng.toString().split(',');
    var lat = coord[0].split('(');
    var lng = coord[1].split(')');
    //console.log(lat[1], lng[0]);
    if (mymarker != undefined) {
        map.removeLayer(mymarker);
    };

    document.getElementById("lat").value = parseFloat(lat[1]);
    document.getElementById("lng").value = parseFloat(lng[0]);
    mymarker = L.marker(e.latlng).addTo(map);
});

/*require([
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/BasemapToggle",
    "esri/widgets/BasemapGallery"
], function (Map, MapView, BasemapToggle, BasemapGallery) {

    var map = new Map({
        basemap: "topo-vector"
    });

    var view = new MapView({
        container: "mymap",
        map: map,
        center: [105.410, 13.617], // longitude, latitude
        zoom: 6
    });


    var coordsWidget = document.createElement("div");
    coordsWidget.id = "coordsWidget";
    coordsWidget.className = "esri-widget esri-component";
    coordsWidget.style.padding = "7px 15px 5px";
    view.ui.add(coordsWidget, "bottom-right");


    function showCoordinates(pt) {
        var coords = "Lat/Lon " + pt.latitude.toFixed(3) + " " + pt.longitude.toFixed(3) +
            " | Scale 1:" + Math.round(view.scale * 1) / 1 +
            " | Zoom " + view.zoom;
        coordsWidget.innerHTML = coords;
    }


    view.watch(["stationary"], function () {
        showCoordinates(view.center);
    });

    view.on(["pointer-down", "pointer-move"], function (evt) {
        showCoordinates(view.toMap({x: evt.x, y: evt.y}));
    });
});*/