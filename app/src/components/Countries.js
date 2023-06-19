import React , { useState , useEffect} from "react";
import { useNavigate } from 'react-router-dom';

const Countries = () => {
    const [countryNames, setCountryNames] = useState([]);
    const [disabled , setDisabled] = useState(true)

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
          const names = data.filter(c => c.continents[0] === `${continent}`).map(country => country.name.common)
          setCountryNames(names);

        } catch (e) {
          alert('Coś poszło nie tak')
        }
      };
  
      fetchCountry();
    }, [continent]);

    const onChangeValue = (event) => {
      console.log(event.target.value);
      localStorage.setItem("country", event.target.value);
      setDisabled(false)
    }

    const onShowInfo = () => {
      localStorage.getItem(`country`);
      navigate('/login/account/countries/info');
    }
 
    return (
    <div className="containerHome containerBox"> 
        <div className= "countries box">
            <p className="countries_title">{continent}</p>
            <ul className="countries_box">
            {countryNames.map(country => <li className="countries_list" key={country}><label className="countries_list-text"><input onChange= {onChangeValue} className="countries_list-input" type="checkbox" value={country}/>{country}<button  disabled={disabled} onClick={onShowInfo} className ="btn btn-info">Informacja</button></label></li>)}
            </ul>
            <button className= "btn">Zapisz</button>
            <div className="countries_btn">
              <button className= "btn" onClick={onBacktoCountries}>Wróć do kontynentów</button>
              <button className= "btn">Podsumowanie</button>
            </div>       
        </div>
    </div>
    )
}


export default Countries