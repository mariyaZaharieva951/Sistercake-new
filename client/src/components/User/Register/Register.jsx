import { useState, useContext} from "react";
import { useForm } from "../../../hooks/useForm";
import { AuthContext } from "../../../contexts/authContex";
import { useNavigate, Link } from "react-router-dom";

import * as authService from '../../../services/authService';
import styles from "../Register/Register.module.css";

export const Register = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({username: "",email: "",password: "", rePass: ""});
  const [errors,setErrors] = useState({});
  const [serverErrors,setServerErrors] = useState({})
  const [hasError,setHasError] = useState(false);

  const resetFormHandler = () => {
    setFormValues({username: "",email: "",password: "", rePass: ""});
    setErrors({})
  };


  const submitHandler = (values) => {

        const { username, email, password, rePass } = values;
        authService.register(username,email,password)
        
        .then(authData => {   
            login(authData);
            navigate('/');
        })
        .catch(error => {
          setServerErrors(error.message);
          setHasError(true)
          navigate('/register')
            
        })

        resetFormHandler();
    }

  const usernameValidator = () => {
      if(values.username.length < 5) {
        setErrors(state => ({
          ...state, username: 'Потребителското име трябва да съдържа минимум 5 символа'
        })) 
      } else {
        if(errors.username) {
          setErrors(state => ({
            ...state, username: ''
          }))
        }
      }
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

  const passwordValidator = () => {
    if(values.password.length < 5) {
      setErrors(state => ({
        ...state, password: 'Паролата трябва да съдържа минимум 5 символа'
      })) 
    } else {
      if(errors.password) {
        setErrors(state => ({
          ...state, password: ''
        }))
      }
    }
  }

  const rePassValidator = () => {
    if(values.rePass !== values.password) {
      setErrors(state => ({
        ...state, rePass: 'Паролите трябва да съвпадат'
      })) 
    } else {
      if(errors.rePass) {
        setErrors(state => ({
          ...state, rePass: ''
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
            <h1>Регистрация</h1>
            <div className={styles.line}>

              <div className={styles.columnn}>
              <input 
              type="text" 
              name="username" 
              placeholder="Потребителско име" 
              id="username"
              value={values.username}
              onChange={onChange}
              required
              onBlur={usernameValidator}
              />
              {errors.username && (<p className={styles.error}>{errors.username}</p>)}
              
              </div>

              <div className={styles.columnn}>
              <input 
              type="email"
              name="email" 
              placeholder="Ел.поща" 
              id="email"
              value={values.email}
              onChange={onChange}
              required
              onBlur={emailValidator}
              />
              {errors.email && (<p className={styles.error}>{errors.email}</p>)}
              
            </div>
            </div>
            
            <div className={styles.line}>

            <div className={styles.columnn}>
              <input 
              type="password" 
              name="password" 
              placeholder="Парола" 
              id="password"
              value={values.password}
              onChange={onChange}
              required
              onBlur={passwordValidator}   
               />
              {errors.password && (<p className={styles.error}>{errors.password}</p>)}
              </div>

              <div className={styles.columnn}>
              <input 
              type="password" 
              name="rePass" 
              placeholder="Повтори парола" 
              id="rePass"
              value={values.rePass}
              onChange={onChange}
              required
              onBlur={rePassValidator}
              />
              {errors.rePass && (<p className={styles.error}>{errors.rePass}</p>)}
              </div>
            </div>

            <div>
            {hasError && (<p className={styles.error}>{Object.values(serverErrors).map(err => err)}</p>)}
            </div>
            <input type="submit" name="" defaultValue="Login" href="#" />
            <div>
                <p>Do you have acount? <Link className={styles.loginNow} to="/login">Login Now</Link></p>
            </div>
            <div className="col-md-12">
              <div className={styles.social_network}>
                <ul className={styles.social_circle}>
                  <li>
                    <Link href="#" className={styles.icoFacebook} title="Facebook">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className={styles.icoTwitter} title="Twitter">
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className={styles.icoGoogle} title="Google +">
                      <i className="fab fa-google-plus" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
