import styles from "../GalleryTop/GalleryTop.module.css";
// import { Product } from '../Product/Product'
import { useState, useEffect } from "react";
import * as cakeService from "../../../services/cakeService";
import { GalleryTopItem } from "../GalleryTopItem/GalleryTopItem";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

export const GalleryTop = () => {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    cakeService
      .getAll()
      .then((result) => {
        setCakes(result);
      })
      .catch((err) => console.log(err));
  }, []);

 
  return (

    <div className={styles.container}>
      <div className="row blog">
        <div className="col-md-12">
          <div
            id="blogCarousel"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#blogCarousel"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#blogCarousel" data-slide-to={1} />
              <li data-target="#blogCarousel" data-slide-to={2} />
            </ol>
            
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  {/* <div className="col-md-3"> */}
                  {cakes.length > 0 ? (
                    <>
                      {cakes.slice(0, 4).map((cake) => (
                        <GalleryTopItem key={cake._id} img={cake.imgUrl} />
                      ))}
                    </>
                  ) : (
                    <div>Error</div>
                  )}

                  {/* </div> */}
                </div>
                {/*.row*/}
              </div>
              
              <div className="carousel-item">
                <div className="row">
                  {/* <div className="col-md-3"> */}
                  {cakes.length > 0 ? (
                    <>
                      {cakes.slice(4, 8).map((cake) => (
                        <GalleryTopItem key={cake._id} img={cake.imgUrl} />
                      ))}
                    </>
                  ) : (
                    <div>Error</div>
                  )}
                </div>
                {/*.row*/}
              </div>
              
              <div className="carousel-item">
                <div className="row">
                  {/* <div className="col-md-3"> */}
                  {cakes.length > 0 ? (
                    <>
                      {cakes.slice(8, 12).map((cake) => (
                        <GalleryTopItem key={cake._id} img={cake.imgUrl} />
                      ))}
                    </>
                  ) : (
                    <div>Error</div>
                  )}
                </div>
                {/*.row*/}
              </div>
              
            </div>
            
          </div>
         
        </div>
      </div>
    </div>
  );
};
