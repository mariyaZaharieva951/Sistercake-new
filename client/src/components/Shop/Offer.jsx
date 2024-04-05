import { Link } from "react-router-dom";
import styles from '../Shop/Offer.module.css'

export const Offer = () => {
  return (
    <div className="container-fluid bg-offer ">
      <div className="container">
        <div className={styles.offerRow}>
          <div className={styles.offerCard}>
            <div
              className="section-title position-relative text-center mx-auto mb-4 pb-3"
              style={{ maxWidth: 600 }}
            >
              <h2 className="text-primary font-secondary">Опитайте</h2>
              <h1 className="display-4 text-uppercase text-white">
                Изберете вашата торта
              </h1>
            </div>
            <p className={styles.offerText}>
              Предлагаме Ви да разгледате нашите предложения. Не се притеснявайте, ако не видите Вашата торта, свържете се с нас и ние ще направим всичко възможно, за да изпълним желанията Ви
            </p>
            <div className={styles.button}>
              <Link
                to={"/menu"}
                className="btn btn-custom border-inner py-3 px-5 me-3"
              >
                Меню
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
