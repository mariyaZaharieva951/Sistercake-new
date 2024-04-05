import { useEffect, useState } from "react";
import styles from "../Contact/Contact.module.css";

export const Contact = () => {

  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsExpanded(true);
    }, 500);

    return() => clearTimeout(timeout)
  }, []);
  return (
    <div className={styles.contact}>
      <div className="container">
        <div className="row g-5 mb-5">
        <div className={`col-lg-4 col-md-6 ${isExpanded ? styles.expanded : styles.noExpanded}`}>
            <div className={styles.border}>
              <div className={styles.card}>
                <i className="bi bi-geo-alt fs-1 text-white top" />
                <h6 className={styles.h6}>Адрес</h6>
                <span>гр. Ямбол, ул. Атанас Кратунов №5</span>
              </div>
            </div>
          </div>

          <div className={`col-lg-4 col-md-6 ${isExpanded ? styles.expanded : styles.noExpanded}`}>
            <div className={styles.border}>
              <div className={styles.card}>
                <i className="bi bi-envelope-open fs-1 text-white" />
                <h6 className={styles.h6}>Пишете ни</h6>
                <span>info@sistercake.com</span>
              </div>
            </div>
          </div>
          <div className={`col-lg-4 col-md-6 ${isExpanded ? styles.expanded : styles.noExpanded}`}>
            <div className={styles.border}>
              <div className={styles.card}>
                <i className="bi bi-phone-vibrate fs-1 text-white" />
                <h6 className={styles.h6}>Обадете ни се</h6>
                <span>+359 895 678978</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
