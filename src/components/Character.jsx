import React from "react";
import PropTypes from "prop-types";

// Componente usando arrow function

const Character = ({ name, image, origin, location, status, species }) => (
  <div className="single-character">
    <h2>{name}</h2>
    <img src={image} alt={name} />
    <p>
      Origin: {origin} — Location: {location}
    </p>
    <p>
      Status: {status} — Species: {species}
    </p>
  </div>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
};

export default Character;
