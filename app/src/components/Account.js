import React from "react";


const Account = () => {
    
    const username =  localStorage.getItem(`name`);
    

    const onChangeValue = (event) => {
        console.log(event.target.value);
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
                            <input type="radio" value="Europa" name="continent"/> Europa </label>      
                        <label>
                            <input type="radio" value="Azja" name="continent"/>Azja </label>           
                        <label>
                            <input type="radio" value="Afryka" name="continent"/>Afryka  
                        </label>                 
                        <label>
                            <input type="radio" value="Ameryka Północna" name="continent"/>Ameryka Północna  
                        </label> 
                        <label>
                            <input type="radio" value="Ameryka Południowa" name="continent"/>Ameryka Południowa
                        </label>
                        <label>
                            <input type="radio" value="Australia i Oceania" name="continent"/>Australia i Oceania
                        </label>
                        <label>
                            <input type="radio" value="Antarktyda" name="continent"/>Antarktyda
                        </label>
                    </div>
                    <button className="btn btn_account" >Pokaż państwa</button>
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