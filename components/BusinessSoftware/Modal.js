// Modal.js
import React from "react";
import styles from "./Modal.module.css"; // Ensure you are importing the updated CSS

const Modal = ({ isOpen, onClose, title, description, image, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        {image && <img src={image} alt={title} className={styles.modalImage} />}
        <h2 className={styles.h2}>{title}</h2>
        <p className={styles.p}>{description}</p>
        {children}
      </div>
    </div>
  );
};

export default Modal;
