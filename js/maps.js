function initialize() {
    var mapProp = {
        center: new google.maps.LatLng(50.464379, 30.519131),
        zoom: 11
    };
    var html_element = document.getElementById("googleMap");
    var map = new google.maps.Map(html_element, mapProp);

    var point = new google.maps.LatLng(50.464379,30.519131);
    var contentString = '<b>' +'Top Hotel Kyiv' + '</b>' + '<br/>' + 'вул. Спаська, 10';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: point,
        //map - це змінна карти створена за допомогою new google.maps.Map(...)
        map:  map,
        icon: "../img/home-icon.png"
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}
google.maps.event.addDomListener(window, 'load', initialize);