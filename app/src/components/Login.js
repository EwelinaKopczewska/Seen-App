import { useState} from 'react';
import Account from './Account';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [errors , setErrors] =useState([]);
    const [form, setForm] = useState({
        name: "",
        email:"",
        password: "",
    });
    const [success , setSuccess] = useState(false)

    const navigate = useNavigate();

    const validate = form => {

        if(!form.name){
            return "Imię jest wymagane"
        }else if(form.name.length < 2){
            return "Imię jest za ktrótkie"
        }

        if(!form.email){
            return "Adres mailowy jest wymagany"
        }else if(form.email.length < 3){
            return"Adres mailowy jest za krótki"
        }

        if(!form.password){
            return "Hasło jest wymagane"
        }else if(form.password.length < 4){
            return "Hasło jest za krótkie"
        }
    }

    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      const errorMsg = validate(form)

      console.log( form )
      if(errorMsg) {
        setErrors(errorMsg)
        console.log("Błąd")
        return
      }
      setSuccess(true);
      navigate('/login/account');
    }

    
    localStorage.setItem("name", JSON.stringify(form.name));
    

  return(
    <> {success ? (
      <>
      <Link path="/login/account" element={<Account />}></Link>
      </>
      ) : (

    <div className="containerHome form-container">
      <form className="form" onSubmit={handleSubmit} >
        <div className="form-content">
          <h3 className="form-title">Rejestracja</h3>
          <div>
            <label>Imię</label>
            <input
              type="text"
              className="form_input"
              placeholder="Wpisz imię"
              name="name"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              className="form_input"
              placeholder="Wpisz email" 
              name="email" 
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Hasło</label>
            <input
              type="password"
              className="form_input"
              placeholder="Wpisz hasło" 
              name="password" 
              onChange={handleInputChange}
            />
          </div>
          <div style={{color:"red" , marginBottom: "10px"}}>{errors ? errors : ""}</div>
          <div>
            <button className="btn">
              Załóż konto
            </button>
          </div>
        </div>
      </form>
    </div>
      )}
    </>
  )
}

export default Login