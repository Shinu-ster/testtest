import React, { useState } from "react";
import Card from "./Card";
import Modal from "./Modal"; // Import the Modal component
import styles from "./BusinessSoftware.module.css";

const BusinessSoftware = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleCardClick = (title, description, image, additionalContent) => {
    setModalContent({ title, description, image, additionalContent });
    setIsModalOpen(true); // Open the modal when a card is clicked
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>All-In-One Business Software</h2>
      <p className={styles.subHeading}>
        Boost productivity using our WhatsApp-first ERP software for small
        businesses
      </p>

      <div className={styles.grid}>
        <Card
          title="Seamless Reservation"
          description="Effortlessly book your table, haircut, or any other service in advance with Samparka."
          image="./reservation.png"
          onClick={() =>
            handleCardClick(
              "Seamless Reservation",
              "Effortlessly book your table, haircut, or any other service in advance with Samparka.",
              "./reservation.png"
            )
          }
        />
        <Card
          title="Inventory"
          description="Manage inventory online and prevent overselling/shortages"
          onClick={() =>
            handleCardClick(
              "Inventory",
              "Manage inventory online and prevent overselling/shortages",
              null,
              (
                <ul className={styles.inventoryList}>
                  <li>
                    <span>Journal</span>
                    <span>2</span>
                    <span>$15.00</span>
                  </li>
                  <li>
                    <span>Lipstick</span>
                    <span>2</span>
                    <span>$9.99</span>
                  </li>
                  <li>
                    <span>T-shirts</span>
                    <span>10</span>
                    <span>$10.99</span>
                  </li>
                  <li>
                    <span>Candle</span>
                    <span>10</span>
                    <span>$12.99</span>
                  </li>
                </ul>
              )
            )
          }
        />
        <Card
          title="Wholesale"
          description="Boost sales with personalized pricing for customers"
          onClick={() =>
            handleCardClick(
              "Wholesale",
              "Boost sales with personalized pricing for customers",
              null,
              (
                <div className={styles.wholesale}>
                  <p>
                    <strong>Regular user</strong>: Handcream - $15.00
                  </p>
                  <p>
                    <strong>VIP user</strong>: Handcream -{" "}
                    <span className={styles.discount}>$10.00</span> <s>$15.00</s>
                  </p>
                </div>
              )
            )
          }
        />
        <Card
          title="Analytics"
          description="Visitors and business insights"
          onClick={() =>
            handleCardClick(
              "Analytics",
              "Visitors and business insights",
              null,
              (
                <div className={styles.analytics}>
                  <p>
                    👥 <strong>1500 visitors</strong>
                  </p>
                </div>
              )
            )
          }
        />
        <Card
          title="Payment Link"
          description="Get paid faster for Accounts Receivable"
          image="./reservation.png"
          onClick={() =>
            handleCardClick(
              "Payment Link",
              "Get paid faster for Accounts Receivable",
              "./reservation.png",
              (
                <div>
                  <h3>Seamless Reservation</h3>
                  <p>
                    Effortlessly book your table, haircut, or any other service
                    in advance with Samparka.
                  </p>
                </div>
              )
            )
          }
        />
        <Card
          title="Membership"
          description="Incentivize repeat purchases with reward credit"
          onClick={() =>
            handleCardClick(
              "Membership",
              "Incentivize repeat purchases with reward credit",
              null,
              (
                <div className={styles.rewards}>
                  <p>Enable rewards:</p>
                  <input type="checkbox" />
                  <p>10%</p>
                </div>
              )
            )
          }
        />
      </div>

      {/* Modal component */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={modalContent.title}
        description={modalContent.description}
        image={modalContent.image}
      >
        {modalContent.additionalContent}
      </Modal>
    </div>
  );
};

export default BusinessSoftware;
