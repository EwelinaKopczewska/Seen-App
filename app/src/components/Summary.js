import React  from "react";
import { useNavigate } from 'react-router-dom';
import Result from "./Result";

const Summary = () => {
    const navigate = useNavigate();

    const arrayEurope = localStorage.getItem(`Country:Europe`)
    const arraylistEurope  = JSON.parse(arrayEurope);

    const arrayAsia = localStorage.getItem(`Country:Asia`)
    const arraylistAsia = JSON.parse(arrayAsia);

    const arrayAfrica = localStorage.getItem(`Country:Africa`)
    const arraylistAfrica = JSON.parse(arrayAfrica);

    const arrayOceania = localStorage.getItem(`Country:Oceania`)
    const arraylistOceania = JSON.parse(arrayOceania);

    const arraySouthAmerica = localStorage.getItem(`Country:South America`)
    const arraylistSouth = JSON.parse(arraySouthAmerica);

    const arrayNorthAmerica = localStorage.getItem(`Country:North America`)
    const arraylistNorth = JSON.parse(arrayNorthAmerica);

    const arrayAntarctica = localStorage.getItem(`Country:Antarctica`)
    const arraylistAntarctica = JSON.parse(arrayAntarctica);

    const onBackContinents = () => {
        navigate('/login/account');
    }

    return (
        <div className="containerHome containerBox containerSummary">
            <div className= "summary box">
                <h1 className= "summarytitle">Lista zwiedzonych krajów:</h1>
                <div className= "list box">
                    <ul className= "summarylist"> Europa:
                        {arraylistEurope && arraylistEurope.length > 0 ? arraylistEurope.map((country , id) => 
                        <li key={id} value= {country} className= "summarylistcountries" >{country}</li>): <li className= "summarylistnone">Brak odwiedzonych państw</li> }
                    </ul>
                    <ul className= "summarylist"> Azja:
                        {arraylistAsia && arraylistAsia.length > 0 ? arraylistAsia.map((country , id) => 
                        <li key={id} className= "summarylistcountries">{country}</li>) : <li className= "summarylistnone">Brak odwiedzonych państw</li>}
                    </ul>
                    <ul className= "summarylist"> Afryka:
                        {arraylistAfrica && arraylistAfrica.length > 0 ? arraylistAfrica.map((country , id) => 
                        <li key={id} className= "summarylistcountries">{country}</li>) : <li className= "summarylistnone">Brak odwiedzonych państw</li>}
                    </ul>
                    <ul className= "summarylist"> Australia i Oceania:
                        {arraylistOceania && arraylistOceania.length > 0  ? arraylistOceania.map((country , id) => 
                        <li key={id} className= "summarylistcountries">{country}</li>) : <li className= "summarylistnone">Brak odwiedzonych państw</li>}
                    </ul>
                    <ul className= "summarylist"> Ameryka Południowa:
                        {arraylistSouth && arraylistSouth.length > 0 ? arraylistSouth.map((country , id) => 
                        <li key={id} className= "summarylistcountries">{country}</li>): <li className= "summarylistnone">Brak odwiedzonych państw</li>}
                    </ul>
                    <ul className= "summarylist"> Ameryka Północna:
                        {arraylistNorth && arraylistNorth.length > 0 ? arraylistNorth.map((country , id) => 
                        <li key={id} className= "summarylistcountries">{country}</li>) : <li className= "summarylistnone">Brak odwiedzonych państw</li>}
                    </ul>
                    <ul className= "summarylist"> Antarktyda:
                        {arraylistAntarctica && arraylistAntarctica.length > 0 ? arraylistAntarctica.map((country , id) => 
                        <li key={id} className= "summarylistcountries">{country}</li>) : <li className= "summarylistnone">Brak odwiedzonych państw</li>}
                    </ul>
                </div>
                <button onClick= {onBackContinents} className="btn">Wróć do kontynentów</button> 
            </div>
            <div className= "summary box">
                <Result arraylistEurope={arraylistEurope}
                    arraylistAsia={arraylistAsia}
                    arraylistAfrica={arraylistAfrica}
                    arraylistOceania={arraylistOceania}
                    arraylistSouth={arraylistSouth}
                    arraylistNorth={arraylistNorth}
                    arraylistAntarctica={arraylistAntarctica}>
                </Result>
            </div>
        </div>
    )
}
export default Summary

