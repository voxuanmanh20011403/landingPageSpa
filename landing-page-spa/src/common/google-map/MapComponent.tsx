const MapComponent = () => {
  return (
    <div style={{ width: "100%", height: "unset" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.9418011320445!2d108.2447479!3d16.0685096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421700751c6207%3A0x80dc18daea860d65!2sZenith%20Spa!5e0!3m2!1svi!2s!4v1725093017655!5m2!1svi!2s"
        style={{ border: 0 }}
        width="100%"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;
