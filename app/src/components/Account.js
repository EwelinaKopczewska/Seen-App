import React  from "react";
import { useNavigate } from 'react-router-dom';

const Account = () => {
  
    const username =  localStorage.getItem(`name`);
    const navigate = useNavigate();
   
    const onChangeValue = (event) => {
        console.log(event.target.value);
        localStorage.setItem("continent", event.target.value);
    }

    const onShowCountries = () => {
        navigate('/login/countries');
    }

    return (
        <>
        {username.length > 2 ? (
            <div className="containerHome containerAccount">
                <div className= "account" >
                    <h2 className= "account_username">Hej, {username}!</h2>
                    <h3 className= "account_continent-title">Wybierz kontynent:</h3>
                    <div className= "account_continent-box" onChange={onChangeValue}>
                        <label>
                            <input className= "account_input" type="radio" value="Europe" name="continent"/>Europa </label>      
                        <label>
                            <input className= "account_input" type="radio" value="Asia" name="continent"/>Azja </label>           
                        <label>
                            <input className= "account_input" type="radio" value="Africa" name="continent"/>Afryka  
                        </label>                 
                        <label>
                            <input className= "account_input" type="radio" value="North America" name="continent"/>Ameryka Północna  
                        </label> 
                        <label>
                            <input className= "account_input" type="radio" value="South America" name="continent"/>Ameryka Południowa
                        </label>
                        <label>
                            <input className= "account_input" type="radio" value="Oceania" name="continent"/>Australia i Oceania
                        </label>
                        <label>
                            <input className= "account_input" type="radio" value="Antarctica" name="continent"/>Antarktyda
                        </label>
                    </div>
                    <button className="btn btn_account" onClick={onShowCountries} >Pokaż państwa</button>
                </div>
            </div>
        ) : (
            <div className="containerHome containerAccount">
                <div className= "account">
                    <h2 className = "account_register">Zarejestruj się</h2>
                </div>
            </div>
        )}
        </>
        );

}

export default Account