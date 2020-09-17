const options = () => ({
  zoomControl: false,
  fullscreenControl: false,
  disableDoubleClickZoom: true,
  keyboardShortcuts: false,
  scrollwheel: false,
  panControl: false,
  styles: [
    {
      featureType: "administrative",
      stylers: [{ color: "#333333" }],
    },
    {
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "landscape",
      stylers: [{ color: "#333333" }],
    },
    {
      featureType: "water",
      stylers: [{ color: "#b0b0b0" }],
    },
  ],
});

export default options;
