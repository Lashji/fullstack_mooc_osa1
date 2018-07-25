import React from 'react'
import ReactDOM from 'react-dom'


const Otsikko = (props) => {
    return (
        <div>
        <h1>{props.otsikko}</h1>
        </div>   
    )
}


const Osa = (props) => {
    return (
        <div>
            <p>{props.data.nimi + " " + props.data.tehtavia}</p>
        </div>
    ) 
}




const Sisalto = (props) => {

    return (
        <div>
            <Osa data={props.data[0]} />
            <Osa data={props.data[1]} />
            <Osa data={props.data[2]} />
        </div>
        
    )
}

const Yhteensa = (props) => {
        return (
            <div>
                <p>
                    yhteensä {props.summa} tehtävää
                </p>
            </div>
        )
}


const App = () => {
  const kurssi = {

    nimi : 'Half Stack -sovelluskehitys', 
    osat : [
        {
        nimi: 'Reactin perusteet',
        tehtavia: 10
        },
        {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
        },
        {
        nimi: 'Komponenttien tila',
        tehtavia: 14
        }
    ]
  }
  return (
    <div>
      <Otsikko otsikko={kurssi.nimi} />
      <Sisalto data={kurssi.osat} />
      <Yhteensa summa={kurssi.osat[0].tehtavia + kurssi.osat[1].tehtavia + kurssi.osat[2].tehtavia} />
    </div>
  )
}




ReactDOM.render(
  <App />,
  document.getElementById('root')
)