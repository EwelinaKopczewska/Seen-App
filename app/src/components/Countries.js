import React , { useState , useEffect} from "react";
import { useNavigate } from 'react-router-dom';

const Countries = () => {
    const [countryNames, setCountryNames] = useState([]);

    const continent = localStorage.getItem(`continent`);
    const navigate = useNavigate();

    const onBacktoCountries = () => {
      navigate('/login/account');
      localStorage.removeItem(`continent`);
    }

    useEffect(() => {
      const fetchCountry = async () => {
        try {
          const response = await fetch(`https://restcountries.com/v3.1/all`);
          const data = await response.json();
          const names = data.map(country => country.name.common);
  
          setCountryNames(names);
        } catch (error) {
          console.error('Error fetching country:', error);
        }
      };
  
      fetchCountry();
    }, []);

 
    return (
    <div className="containerHome containerCountries"> 
        <div className= "countries">
            <p className="countries_title">{continent}</p>
            <ul className="countries_box">
            {countryNames.map(country => <li className="countries_list" key={country}><label ><input className="countries_list-text" type="checkbox"/>{country}</label></li>)}
            </ul>
            <button className= "btn">Zapisz</button>
            <div className="countries_btn">
                <button className= "btn" onClick={onBacktoCountries}>Wróć do kontynentów</button>
                <button className= "btn">Pokaż podsumowanie</button>
            </div>
        </div>
    </div>
    )
}


export default Countries