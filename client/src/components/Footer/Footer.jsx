import styles from "../Footer/Footer.module.css";
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <div>
      <div
        className="container-fluid bg-img text-secondary"
        // style={{ marginTop: 90 }}
      >
        <div className="container">
          <div className="row gx-5">
            <div className={styles.row}>
              <div className={styles.border}>
                <div className={styles.leftCard}>
                  <div className={styles.box}>
                    <Link href="index.html">
                      <h1>
                        <i className="fa fa-birthday-cake fs-1" />
                        Sistercake
                      </h1>
                    </Link>
                    <p className={styles.text}>
                      Lorem diam sit erat dolor elitr et, diam lorem justo
                      labore amet clita labore stet eos magna sit. Elitr dolor
                      eirmod duo tempor lorem, elitr clita ipsum sea. Nonumy
                      rebum et takimata ea takimata amet gubergren, erat rebum
                      magna lorem stet eos. Diam amet et kasd eos duo dolore no.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.rightCard}>
                <div className={styles.cards}>
                  <div className={styles.contact}>
                    <h4 className="text-primary text-uppercase mb-4">
                      Контакти
                    </h4>
                    <div className={styles.line}>
                      <i className="bi bi-geo-alt" />
                      <p className={styles.text}>гр. Ямбол, ул. Атанас Кратунов №5</p>
                    </div>
                    <div className={styles.line}>
                      <i className="bi bi-envelope-open" />
                      <p className={styles.text}>info@sistercake.com</p>
                    </div>
                    <div className={styles.line}>
                      <i className="bi bi-telephone" />
                      <p className={styles.text}>+359 895678978</p>
                    </div>
                    <div className={styles.icons}>
                      <Link
                        className="btn btn-lg btn-custom btn-lg-square border-inner rounded-0 me-2"
                        href="#"
                      >
                        <i className="fab fa-twitter fw-normal" />
                      </Link>
                      <Link
                        className="btn btn-lg btn-custom btn-lg-square border-inner rounded-0 me-2"
                        href="#"
                      >
                        <i className="fab fa-facebook-f fw-normal" />
                      </Link>
                      <Link
                        className="btn btn-lg btn-custom btn-lg-square border-inner rounded-0 me-2"
                        href="#"
                      >
                        <i className="fab fa-linkedin-in fw-normal" />
                      </Link>
                    </div>
                  </div>
                  <div className={styles.info}>
                    <h4 className="text-primary text-uppercase mb-4">
                      Информация
                    </h4>
                    <div className={styles.infoCard}>
                      <Link className={styles.link} to={"/"}>
                        <i className="bi bi-arrow-right" />
                        Начало
                      </Link>
                      <Link className={styles.link} to={"/about"}>
                        <i className="bi bi-arrow-right" />
                        За нас
                      </Link>
                      <Link className={styles.link} to={"/gallery"}>
                        <i className="bi bi-arrow-right" />
                        Галерия
                      </Link>
                      <Link className={styles.link} to={"/comments"}>
                        <i className="bi bi-arrow-right" />
                        Клиенти
                      </Link>
                      <Link className={styles.link} to={"/menu"}>
                        <i className="bi bi-arrow-right" />
                        Меню
                      </Link>
                    </div>
                  </div>
                  {/* <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
              <h4 className="text-primary text-uppercase mb-4">Newsletter</h4>
              <p>Amet justo diam dolor rebum lorem sit stet sea justo kasd</p>
              <form action="">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control border-white p-3"
                    placeholder="Your Email"
                  />
                  <button className="btn btn-primary">Sign Up</button>
                </div>
              </form>
            </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid text-secondary py-4"
        style={{ background: "#111111" }}
      >
        <div className="container text-center">
          <p className="mb-0">
            ©{" "}
            <Link className="text-white border-bottom" href="#">
              sistercake.com   
            </Link>
            {" "}Мария Захариева. Всички права запазени.
          </p>
        </div>
      </div>
    </div>
  );
};
