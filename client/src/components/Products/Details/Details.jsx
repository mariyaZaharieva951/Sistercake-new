import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../contexts/authContex";
import * as cakeService from "../../../services/cakeService";
import styles from "../Details/Details.module.css";
import { useForm } from "../../../hooks/useForm";



export const Details = () => {
  
  const navigate = useNavigate();
  const { menuId,cakeId } = useParams();

  const { user } = useContext(AuthContext);
  const [buys, setBuys] = useState([]);
  const [currentCake, setCurrentCake] = useState({});

  const [selectedOptions, setSelectedOptions] = useState({});

  const [cream1, setCream1] = useState("");
  const [cream2, setCream2] = useState("");
  const [pieces, setPieces] = useState("");


  useEffect(() => {
  
    cakeService.getAllBuys().then((result) => {
      setBuys(result);
    });

    if(menuId === 'birthday') {
      cakeService.getOneBdCake(cakeId).then((result) => {
          setCurrentCake(result);
      });
    } else if(menuId === 'wedding') {
      cakeService.getOneWeddingCake(cakeId).then((result) => {
          setCurrentCake(result);
      });
    } else if(menuId === 'kids') {
      cakeService.getOneKidsCake(cakeId).then((result) => {
          setCurrentCake(result); 
      });
    } else if(menuId === 'individual') {
      cakeService.getOneIndividualCake(cakeId).then((result) => {
          setCurrentCake(result);
      });
    }
    
  }, [cakeId]);

  const submitHandler = (values) => {
    cakeService.buyOneCake(values, user.accessToken).then(
      (result) => {
        user.buys.push(result);
        setBuys((state) => ({ ...state, buys: result }));
      },
      alert("Вашата поръчка е успешна!"),
      navigate("/menu")
    );
  };

  const onSelect = (ev) => {
    if (ev.target.name === "typeCream1") {
      setCream1(ev.target.value);
      setSelectedOptions((state) => ({
        ...state,
        cream1: ev.target.value,
        price: currentCake.price,
      }));
    }
    if (ev.target.name === "typeCream2") {
      setCream2(ev.target.value);
      setSelectedOptions((state) => ({
        ...state,
        cream2: ev.target.value,
        price: currentCake.price,
      }));
    }
    if (ev.target.name === "pieces") {
      setPieces(ev.target.value);
      setSelectedOptions((state) => ({
        ...state,
        pieces: ev.target.value,
        price: currentCake.price,
      }));
    }
  };

  const { values, onChange, onSubmit } = useForm(
    submitHandler,
    selectedOptions
  );

  const onNavigate = () => {
    navigate("/menu");
  };

  return (
    <div className="container mt-5 mb-5 d-flex justify-content-center align-items-center">
<div className={styles.detailsBox}>
      <div className="card">
        <div className="inner-card">
          <form className={styles.formCake} onSubmit={onSubmit}>
            <div className={styles.item}>
              <div className={styles.img}>
                <img src={currentCake.imgUrl} alt="cake" />
              </div>
              <div className={styles.img}>
                <div className="mt-2 px-2">
                  <p>Ръчно изработена от висококачествени продукти.</p>
                  <p>Притежава сертификат за качество.</p>
                </div>
                <div className="px-2">
                  <div className={styles.onePrice}>
                    <p>Цена на парче</p>
                    <h5 value={currentCake.price}>{currentCake.price}лв.</h5>
                  </div>
                </div>
                <div className={styles.inputs}>
                  <div className={styles.select}>
                    <p>крем 1</p>
                    <select
                      name="typeCream1"
                      id="type"
                      onChange={(ev) => {
                        onChange(ev);
                        onSelect(ev);
                      }}
                      value={cream1}
                      required
                    >
                      <option value={values.Избор}></option>
                      <option value={values.Ягода}>Ягода</option>
                      <option value={values.Боровинка}>Боровинка</option>
                      <option value={values.Йогурт}>Йогурт</option>
                      <option value={values.Ванилия}>Ванилия</option>
                      <option value={values.Брюле}>Брюле</option>
                      <option value={values.Шоколад}>Шоколад</option>
                      <option value={values.Банан}>Банан</option>
                    </select>
                  </div>

                  <div className={styles.select}>
                    <p>крем 2</p>
                    <select
                      name="typeCream2"
                      id="type"
                      onChange={(ev) => {
                        onChange(ev);
                        onSelect(ev);
                      }}
                      value={cream2}
                      required
                    >
                      <option value={values.Избор}></option>
                      <option value={values.Ягода}>Ягода</option>
                      <option value={values.Боровинка}>Боровинка</option>
                      <option value={values.Йогурт}>Йогурт</option>
                      <option value={values.Ванилия}>Ванилия</option>
                      <option value={values.Брюле}>Брюле</option>
                      <option value={values.Шоколад}>Шоколад</option>
                      <option value={values.Банан}>Банан</option>
                    </select>
                  </div>

                  <div className={styles.select}>
                    <p>Брой парчета</p>
                    <select
                      name="pieces"
                      id="type"
                      onChange={(ev) => {
                        onChange(ev);
                        onSelect(ev);
                      }}
                      value={pieces}
                      required
                    >
                      <option value={values.Избор}></option>
                      <option value={values.pieces}>6</option>
                      <option value={values.pieces}>8</option>
                      <option value={values.pieces}>12</option>
                      <option value={values.pieces}>18</option>
                      <option value={values.pieces}>24</option>
                      <option value={values.pieces}>30</option>
                    </select>
                  </div>
                </div>
                <div className="px-2 mt-3">
                  <div className={styles.btnItem}>
                    <button className="btn btn-custom px-3">Купи</button>
                    <button
                      className="btn btn-custom px-3"
                      onClick={onNavigate}
                    >
                      Отказ
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
</div>
    </div>
  );
};
