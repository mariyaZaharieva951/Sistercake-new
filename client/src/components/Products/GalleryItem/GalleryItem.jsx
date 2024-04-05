import { useState } from "react";
import styles from "./GalleryItem.module.css";
import Modal from 'react-modal';

export const GalleryItem = ({ img }) => {
  const [show, setShow] = useState(false);

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);
  
  return (
    <>
      <div className="col-sm-4 col-md-2 col-lg-3_item">
        <div className={styles.item}>
          <img
            className="img-fluid"
            src={img}
            alt="cake"
            onClick={openModal}
            data-toggle="modal"
            data-target="#exampleModal"
          />
          <Modal isOpen={show} onRequestClose={closeModal} className={`${styles.modal} ${show ? styles['open'] : styles['close']}`}>
          <button onClick={closeModal} className={styles.close}>x</button>
          <img
            className="img-fluid"
            src={img}
            alt="cake"
          />
          
          </Modal>
        </div>
      </div>
    </>
  );
};
