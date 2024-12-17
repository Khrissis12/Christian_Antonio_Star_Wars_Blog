import React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import PlanetCard from "../components/PlanetCard"

const SinglePlanet = () => {

    const { id } = useParams();
    const [planet, setPlanet] = useState(null)
    // const [loading, setLoading] = useState(true)

    const loadSinglePlanet = async () => {
        // setLoading(true)
        try {
            const response = await fetch(`https://www.swapi.tech/api/planets/${id}`, {
                method: 'GET'
            });
            if(!response.ok){
                throw new Error("Failed to get single character :c")
            }
            const result = await response.json();
            console.log(result);
            setPlanet(result.result.properties)

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        loadSinglePlanet();
    }, [])

    if (!character) {
        return <p>Loading character...</p>;
    }

    return (
        <div className="container">
            <div>
                <PlanetCard
                    name={planet.name}
                    population={planet.population}
                    residents={planet.residents}
                    gravity={planet.gravity}
                    image={`https://via.placeholder.com/150`} // No hay imagen en la API, puedes usar una por defecto
                />
            </div>
        </div>
    )
}

export default SinglePlanet;