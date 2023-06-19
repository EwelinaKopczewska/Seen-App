import React , { useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';

const Info = () => {
    const country = localStorage.getItem(`country`);
    
    const [selectCountry , setSelectCountry] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCountry = async () => { 
          try {
            const response = await fetch(`https://restcountries.com/v3.1/all`);
            const data = await response.json();  
            const selectCountry = data.filter(c => c.name.common === `${country}`)
            setSelectCountry(selectCountry)
          } catch (e) {
            alert('Coś poszło nie tak')
          }
        };
        
        fetchCountry();
    }, [country]);    
        
    if (!selectCountry) {
    return (
        <div className="containerHome containerBox">
            <div className= "info box">Loading...</div>
        </div>)
    }

    const onBacktoCountries = () => {
        navigate("/login/account/countries");
        localStorage.removeItem(`country`);
    }

    return (
        <div className="containerHome containerBox">
            <div className= "info box">
                <h3 className="info_title">Informacje o kraju: {country}</h3>
                <img className="info_text" style={{width:"200px" , height: "100px"}} src={selectCountry.length > 0  ? selectCountry[0].flags["png"] : "Brak zdjęcia"} alt="Flaga"/>
                <p className="info_text">Stolica: <span className="info_text-value">{selectCountry.length > 0 ? selectCountry[0].capital : ""}</span></p>
                <p className="info_text">Ludnośc: <span className="info_text-value">{selectCountry.length > 0 ? selectCountry[0].population : ""}</span></p>
                <p className="info_text">Strefa czasowa: <span className="info_text-value">{selectCountry.length > 0 ? selectCountry[0].timezones : ""}</span></p>
                <p className="info_text">Mapa: <span className="info_text-value">{selectCountry.length > 0 ? selectCountry[0].maps["googleMaps"] : ""}</span></p>

                <button onClick= {onBacktoCountries} className="btn">Cofnij</button>
            </div>
        </div>
    )
}

export default Info

