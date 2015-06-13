
        <script>
        function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
          center: new google.maps.LatLng(40.131214, -75.323780),
          zoom: 17,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
        }
        google.maps.event.addDomListener(window, 'load', initialize);
        </script>