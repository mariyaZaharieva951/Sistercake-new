import { useState, useContext} from "react";
import { useForm } from "../../../hooks/useForm";
import { AuthContext } from "../../../contexts/authContex";
import { useNavigate, Link } from "react-router-dom";

import * as authService from '../../../services/authService';
import styles from "../Login/Login.module.css";

export const Login = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({email: "",password: ""}); 
  const [errors,setErrors] = useState({});
  const [serverErrors,setServerErrors] = useState({})
  const [hasError,setHasError] = useState(false);


  const resetFormHandler = () => {
    setFormValues({email: "", password: ""}),
    setErrors({});
    };

      const submitHandler = (values) => {
            
            const { email, password } = values;
            
            authService.login(email,password)
            .then(authData => { 
                login(authData);
                navigate('/');
            })
            .catch((error) => {
              setServerErrors(error.message);
              setHasError(true)
              navigate('/login')
            })  
            resetFormHandler();
    }

    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
    
    const emailValidator = () => {
  
      if(!validateEmail(values.email)) {
        setErrors(state => ({
          ...state,
          email: 'Въведете валиден формат на ел. поща'
        }))
      }
  
      if(values.email.length < 5) {
        setErrors(state => ({
          ...state, email: 'Ел. поща име трябва да съдържа минимум 5 символа'
        })) 
      } else {
        if(errors.email) {
          setErrors(state => ({
            ...state, email: ''
          }))
        }
      }
  }
  
    const { values, onChange, onSubmit} = useForm(submitHandler,formValues)


  return (
    <div className={styles.container}>
      <div className={styles.row}>
        
          <div className={styles.card}>
            <form className={styles.box} onSubmit={onSubmit}>
              <h1>Вход</h1>

              <div className={styles.columnn}>
              <input 
              type="text" 
              name="email" 
              placeholder="Имейл" 
              id="email"
              value={values.email}
              onChange={onChange}
              onBlur={emailValidator}
              />
              {errors.email && (<p className={styles.error}>{errors.email}</p>)}
              </div>

              <div className={styles.columnn}>
              <input 
              type="password" 
              name="password" 
              placeholder="Парола" 
              id="password"
              value={values.password}
              onChange={onChange}
              
              />
              </div>

              <div>
              {hasError && (<p className={styles.error}>{Object.values(serverErrors).map(err => err)}</p>)}
              </div>

              <div>
                 <Link className={styles.forgot} to="/forgotPassword">Забравена парола?</Link>
              </div>

              <input type="submit" name="" defaultValue="Login" href="#" />
              {/* <div className="col-md-12">
                <div className={styles.social_network}>
                <ul className={styles.social_circle}>
                  <li>
                    <a href="#" className={styles.icoFacebook} title="Facebook">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.icoTwitter} title="Twitter">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.icoGoogle} title="Google +">
                      <i className="fab fa-google-plus" />
                    </a>
                  </li>
                </ul>
                </div>
              </div> */}

              <div>
                <p>Нямате регистрация? <Link className={styles.registerNow} to="/register">Регистрация</Link></p>
              </div>
            </form>
          </div>
        
      </div>
    </div>
  );
};
