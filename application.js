(function($){
  'use strict';

  var api_key = 'AIzaSyDeu2eIN3HXneFNB3ihg5t5rCbSIHy_fZc',
      api_url = 'https://maps.googleapis.com/maps/api/js?v=3.exp&key=' + api_key + '&sensor=false&callback=googleMapsReady';

  function GM($element) {
    this.$element = $element;

    $(window)
      .off('googlemaps:ready')
      .on('googlemaps:ready', $.proxy(this.onApiLoaded, this));

    this.loadApi();
  };

  GM.prototype.loadApi = function() {
    return $.getScript(api_url);
  };

  GM.prototype.onApiLoaded = function() {
    this.initialize();
  };

  GM.prototype.initialize = function() {
    var map_options = {
      center: new google.maps.LatLng(51.220893, 4.397688),
      zoom: 15
    };

    this.map = new google.maps.Map(this.$element.get(0), map_options);
  };

  window.googleMapsReady = function() {
    $(window).trigger('googlemaps:ready');
  }

  new GM( $('#map') );

}(jQuery));
