// Declare a variable for map
var map;
// Get lattitude and longitude of America Centre
var centreUsa = new google.maps.LatLng(40.830850, -98.230535);

// Initialise the map
function initMap() {

    // Define the properties for America Centre map

    var usaMap = {
        center: centreUsa,
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // Create a map object for Canberra Centre 
    // using canberraMap and the <div> element with id="googleMap"
    map = new google.maps.Map(
        document.getElementById("googleMap"), usaMap);

    // Add markers below this line

    addAmazonLocationMarker(map);
    addIBMLocationMarker(map);
    addGoogleLocationMarker(map);
    addMicrosoftLocationMarker(map);
    addOracleLocationMarker(map);
    addSasLocationMarker(map);
}

//////////////////////////////////////AMAZON HEADQUARTERS ///////////////////////////////////////////////

function addAmazonLocationMarker(map) {
    // Canberra Centre
    var amazonLocation = new google.maps.LatLng(47.619308, -122.338724);
    var markerAmazonLocation = new google.maps.Marker({
        position: amazonLocation,
    });

    markerAmazonLocation.setMap(map);

    var infoAmazonLocation =
        ' <h1>Amazon Headquarters</h1>' +
        ' <img src="../images/AMAZON_ICON.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">'

    var infoAmazonLocation = new google.maps.InfoWindow({
        content: infoAmazonLocation
    });

    google.maps.event.addListener(markerAmazonLocation, 'click', function () {
        infoAmazonLocation.open(map, markerAmazonLocation);
    });
}

//////////////////////////////////////IBM HEADQUARTERS ///////////////////////////////////////////////

function addIBMLocationMarker(map) {
    // Canberra Centre
    var ibmLocation = new google.maps.LatLng(40.763249, -73.972770);
    var markerIBMLocation = new google.maps.Marker({
        position: ibmLocation,
    });

    markerIBMLocation.setMap(map);

    var infoIBMLocation =
        ' <h1>IBM Headquarters</h1>' +
        ' <img src="../images/IBM_ICON.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">'

    var infoIBMLocation = new google.maps.InfoWindow({
        content: infoIBMLocation
    });

    google.maps.event.addListener(markerIBMLocation, 'click', function () {
        infoIBMLocation.open(map, markerIBMLocation);
    });
}

//////////////////////////////////////GOOGLE HEADQUARTERS ///////////////////////////////////////////////

function addGoogleLocationMarker(map) {
    // Canberra Centre
    var googleLocation = new google.maps.LatLng(37.422255, -122.084015);
    var markerGoogleLocation = new google.maps.Marker({
        position: googleLocation,
    });

    markerGoogleLocation.setMap(map);

    var infoGoogleLocation =
        ' <h1>Google Headquarters</h1>' +
        ' <img src="../images/GOOGLE_ICON.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">'

    var infoGoogleLocation = new google.maps.InfoWindow({
        content: infoGoogleLocation
    });

    google.maps.event.addListener(markerGoogleLocation, 'click', function () {
        infoGoogleLocation.open(map, markerGoogleLocation);
    });
}

//////////////////////////////////////MICROSOFT HEADQUARTERS ///////////////////////////////////////////////

function addMicrosoftLocationMarker(map) {
    // Canberra Centre
    var microsoftLocation = new google.maps.LatLng(37.416196, -122.075722);
    var markerMicrosoftLocation = new google.maps.Marker({
        position: microsoftLocation,
    });

    markerMicrosoftLocation.setMap(map);

    var infoMicrosoftLocation =
        ' <h1>Microsoft Headquarters</h1>' +
        ' <img src="../images/MICROSOFT_ICON.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">'

    var infoMicrosoftLocation = new google.maps.InfoWindow({
        content: infoMicrosoftLocation
    });

    google.maps.event.addListener(markerMicrosoftLocation, 'click', function () {
        infoMicrosoftLocation.open(map, markerMicrosoftLocation);
    });
}

//////////////////////////////////////ORACLE HEADQUARTERS ///////////////////////////////////////////////

function addOracleLocationMarker(map) {
    // Canberra Centre
    var oracleLocation = new google.maps.LatLng(37.529155, -122.264558);
    var markerOracleLocation = new google.maps.Marker({
        position: oracleLocation,
    });

    markerOracleLocation.setMap(map);

    var infoOracleLocation =
        ' <h1>Oracle Headquarters</h1>' +
        ' <img src="../images/ORACLE_ICON.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">'

    var infoOracleLocation = new google.maps.InfoWindow({
        content: infoOracleLocation
    });

    google.maps.event.addListener(markerOracleLocation, 'click', function () {
        infoOracleLocation.open(map, markerOracleLocation);
    });
}

////////////////////////////////////// SAS HEADQUARTERS ///////////////////////////////////////////////

function addSasLocationMarker(map) {
    // Canberra Centre
    var sasLocation = new google.maps.LatLng(35.818767, -78.754023);
    var markerSASLocation = new google.maps.Marker({
        position: sasLocation,
    });

    markerSASLocation.setMap(map);

    var infoSASLocation =
        ' <h1>SAS Headquarters</h1>' +
        ' <img src="../images/SAS_ICON.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">'

    var infoSASLocation = new google.maps.InfoWindow({
        content: infoSASLocation
    });

    google.maps.event.addListener(markerSASLocation, 'click', function () {
        infoSASLocation.open(map, markerSASLocation);
    });
}

function addCanberraMuseumGallery(map) {
    // Canberra Museum and Gallery
    var canberraMuseumGallery =
        new google.maps.LatLng(-35.2818211, 149.1289204);
    var markerCanberraMuseumGallery = new google.maps.Marker({
        position: canberraMuseumGallery,
    });

    markerCanberraMuseumGallery.setMap(map);

    var contentCanberraMuseumGallery =
        ' <h4>Canberra Museum and Gallery</h>' +
        ' ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        ' <p><b>Canberra Museum and Gallery</b> is an art gallery ' +
        'and museum in Canberra, the capital of Australia. ' +
        'It is located on London Circuit, in Civic in ' +
        'the centre of the city. The gallery was opened ' +
        'on 13 February, 1998.<br>' +
        '<a href="https://en.wikipedia.org/wiki/Canberra_' +
        'Museum_and_Gallery">Wikipedia</a>' +
        ' </p>';

    var infoCanberraMuseumGallery = new google.maps.InfoWindow({
        content: contentCanberraMuseumGallery
    });

    google.maps.event.addListener(markerCanberraMuseumGallery, 'click',
        function () {
            infoCanberraMuseumGallery.open(map, markerCanberraMuseumGallery);
        });
}

// Add other functions below this line

// Add a DOM listener that will execute the initMap function 
// on window load (when the page is loaded)
google.maps.event.addDomListener(window, 'load', initMap);