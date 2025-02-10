// Card.js
import React from "react";
import styles from "./Card.module.css";

const Card = ({ title, description, image, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <h3>{title}</h3>
      <p>{description}</p>
      {image && <img src={image} alt={title} className={styles.cardImage} />}
    </div>
  );
};

export default Card;
