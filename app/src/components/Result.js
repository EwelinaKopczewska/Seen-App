import React , {useState , useEffect } from "react";
import { Chart, registerables } from 'chart.js'
import { Doughnut } from 'react-chartjs-2';

Chart.register(...registerables);

const Result = (props) => {

  const continents = [
    {
      World : 0 ,
      Europe: 0,
      Asia: 0,
      Africa: 0,
      Oceania:0,
      NorthAmerica : 0, 
      SouthAmerica: 0, 
      Antarctica:0,
    }
  ]

  const [countrylength, setCountryLength] = useState(continents);


  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/all`);
        const data = await response.json();
        const Europelength = data.filter(c => c.continents[0] === `Europe`);
        const Asialength = data.filter(c => c.continents[0] === `Asia`);
        const Afrykalength = data.filter(c => c.continents[0] === `Africa`)
        const Northlength = data.filter(c => c.continents[0] === `North America`)
        const Southlength = data.filter(c => c.continents[0] === `South America`)
        const Oceanialength = data.filter(c => c.continents[0] === `Oceania`)
        const Antarcticalength = data.filter(c => c.continents[0] === `Antarctica`)

        const result = [
          {
            World : Number(data.length) ,
            Europe: Number(Europelength.length),
            Asia: Number(Asialength.length),
            Africa:Number(Afrykalength.length),
            Oceania:Number(Oceanialength.length),
            NorthAmerica : Number(Northlength.length), 
            SouthAmerica: Number(Southlength.length), 
            Antarctica:Number(Antarcticalength.length),
          },
        ];
        
        setCountryLength(result);
      } catch (e) {
        alert('Coś poszło nie tak')
      }
    };
  
    fetchCountry();
  }, []);

  const {
    arraylistEurope,
    arraylistAsia,
    arraylistAfrica,
    arraylistOceania,
    arraylistSouth,
    arraylistNorth,
    arraylistAntarctica,
  } = props;

  const sum = [
    ...(arraylistEurope || []),
    ...(arraylistAsia || []),
    ...(arraylistAfrica || []),
    ...(arraylistOceania || []),
    ...(arraylistSouth || []),
    ...(arraylistNorth || []),
    ...(arraylistAntarctica || []),
  ];
  const data = {
    labels: [ 'Europe', 'Asia', 'Africa', 'Oceania', 'North America', 'South America', 'Antarctica'],
    datasets: [{
      data: [
        arraylistEurope && arraylistEurope.length > 0 ? ((arraylistEurope.length * 100) / countrylength[0]['Europe']).toFixed(0) : 0 ,
        arraylistAsia && arraylistAsia.length > 0 ? ((arraylistAsia.length * 100) / countrylength[0]['Asia']).toFixed(0) : 0  ,
        arraylistAfrica && arraylistAfrica.length > 0 ? ((arraylistAfrica.length * 100) / countrylength[0]['Africa']).toFixed(0) : 0  ,
        arraylistOceania && arraylistOceania.length > 0 ? ((arraylistOceania.length * 100) / countrylength[0]['Oceania']).toFixed(0) : 0 ,
        arraylistNorth && arraylistNorth.length > 0 ? ((arraylistNorth.length * 100) / countrylength[0]['NorthAmerica']).toFixed(0) : 0 ,
        arraylistSouth && arraylistSouth.length > 0 ? ((arraylistSouth.length * 100) / countrylength[0]['SouthAmerica']).toFixed(0) : 0 ,
        arraylistAntarctica && arraylistAntarctica.length > 0 ? ((arraylistAntarctica.length * 100) / countrylength[0]['Antarctica']).toFixed(0) : 0 ,
      ],
      backgroundColor: [
        '#4682B4',      
        '#000080',       
        '#1E90FF',       
        '#ADD8E6',      
        '#586c91',      
        '#4D87A3',    
        '#6495ED'
        ]
      }
    ]
  };

  const options = {
    plugins :{
      legend: {
        labels: {
          color: 'black',
        },
      },
      maintainAspectRatio : true,
    },
  };

  return (
    <div className="resultcontainer">
      <h1 className= "summarytitle">Podsumowanie</h1>
      <div className="result-box">
        <ul className="resultcountry">
            <li className="resultcountrylist">Cały świat : {(sum.length * 100) / countrylength[0]['World'].toFixed(0) } %</li>
            <li className="resultcountrylist">Europa : {data.datasets[0].data[0]}%</li>
            <li className="resultcountrylist">Azja : {data.datasets[0].data[1]}%</li>
            <li className="resultcountrylist">Afryka : {data.datasets[0].data[2]}%</li>
            <li className="resultcountrylist">Australia : {data.datasets[0].data[3]}%</li>
            <li className="resultcountrylist">Ameyka Północna : {data.datasets[0].data[4]}%</li>
            <li className="resultcountrylist">Ameryka Południowa : {data.datasets[0].data[5]}%</li>
            <li className="resultcountrylist">Antarktyda : {data.datasets[0].data[6]}%</li>
        </ul>
        <div className="resultcountry" style={{ maxWidthwidth: '300px', maxHeight: '300px' }}>
          <Doughnut data={data} options={options}></Doughnut>
        </div>
      </div>
    </div>
  )
}

export default Result