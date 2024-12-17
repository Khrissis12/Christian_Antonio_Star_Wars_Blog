import { useState, useEffect } from "react"
import PlanetCard from "../components/PlanetCard"

const Planets = ()=> {

    const [planetsList, setPlanetsList] = useState([])

    const loadPlanets = async()=> {
        try {
            const response = await fetch('https://www.swapi.tech/api/planets',{
                method: 'GET'
            })
            if(!response.ok){
                throw new Error("Something went wrong :c")
            }
            const result = await response.json()
            console.log(result)
            setPlanetsList(result.results)

        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        loadPlanets();
    }, [])

    return(
        <>
            <div className="container">
                <h1 className="planet-title mb-5 me-5">Planets:</h1>
                <ul className="d-flex flex-wrap ">
                    {planetsList.map((planet) => {
                        const planetId = planet.url.split("/").at(-1);
                        return(
                        <li className="col-md-4"
                            key={planet.url}>
                            <PlanetCard
                                name={planet.name}
                                population={planet.population}
                                residents={planet.residents}
                                gravity={planet.gravity}
                                image={`https://starwars-visualguide.com/assets/img/planets/${planetId}.jpg`}
                            />    
                        </li>
                    )}
                )}
                </ul>
            </div>
        </>
    )
}

export default Planets;