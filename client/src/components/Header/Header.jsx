import { Link } from "react-router-dom";
import styles from "../Header/Header.module.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContex";

export const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="container-fluid">
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.card}>
              <i className="bi bi-envelope fs-1"></i>
              <div className={styles.text}>
                <h6 className={styles.top}>Пишете ни</h6>
                <span>info@sistercake.com</span>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.center}>
              <div className={styles.border}>
                <div className={styles.card}>
                  <Link to="/">
                    <div className={styles.cardTop}>
                      <i className="fa fa-birthday-cake fs-1"></i>
                      <h1 className={styles.name}>Sistercake</h1>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.card}>
              <i className="bi bi-phone-vibrate fs-1"></i>
              <div className={styles.text}>
                <h6 className={styles.top}>Обадете ни се</h6>
                <span>+359 895 678978</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-0">
        <Link to="/" className="navbar-brand d-block d-lg-none">
          <i className="fa fa-birthday-cake fs-1 text-primary me-3"></i>
          <h1 className="m-0 text-uppercase text-white">Sistercake</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto mx-lg-auto py-0">
            <Link to="/" className="nav-item nav-link active">
              Начало
            </Link>
            <Link to="/about" className="nav-item nav-link">
              За нас
            </Link>
            <Link to="/gallery" className="nav-item nav-link">
              Галерия
            </Link>
            <Link to="/menu" className="nav-item nav-link">
              Меню
            </Link>
            <Link to="/comments" className="nav-item nav-link">
              Клиенти
            </Link>

            {user.email ? (
              <div className={styles.user}>
                <Link to="/logout" className="nav-item nav-link">
                  Изход
                </Link>
              </div>
            ) : (
              <div className={styles.guest}>
                <div className="nav-item dropdown">
                  <Link
                    to="/"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Профил
                  </Link>
                  <div className="dropdown-menu m-0 bg-dark">
                    <Link to="/login" className="dropdown-item text-light bg-dark text-uppercase" style={{ fontFamily: 'Oswald' }}>
                      Вход
                    </Link>
                    <Link to="/register" className="dropdown-item text-light bg-dark text-uppercase" style={{ fontFamily: 'Oswald' }}>
                      Регистрация
                    </Link>
                  </div>
                </div>
              </div>
            )}
            <Link to="/contact" className="nav-item nav-link">
              Контакт
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
