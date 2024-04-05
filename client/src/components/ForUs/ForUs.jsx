import styles from '../ForUs/ForUs.module.css'

export const ForUs = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="section-title position-relative text-center mx-auto mb-5 pb-3"
          style={{ maxWidth: 600 }}>
          <h2 className="text-primary font-secondary">За нас</h2>
        </div>
        <div className={styles.row}>
          <div className={styles.colImg}>
            <div className={styles.img}>
              <img src="img/about3.jpg"/>
            </div>
          </div>
          <div className={styles.colText}>
            <h4>
              Tempor erat elitr rebum clita. Diam dolor diam ipsum erat lorem
              sed stet labore lorem sit clita duo
            </h4>
            <p>
              Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et
              tempor sit. Clita erat ipsum et lorem et sit, sed stet no labore
              lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore
              erat amet magna
            </p>
            <p>
              Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et
              tempor sit. Clita erat ipsum et lorem et sit, sed stet no labore
              lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore
              erat amet magna
            </p>
            <p>
              Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et
              tempor sit. Clita erat ipsum et lorem et sit, sed stet no labore
              lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore
              erat amet magna
            </p>
            <p>
              Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et
              tempor sit. Clita erat ipsum et lorem et sit, sed stet no labore
              lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore
              erat amet magna
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};
