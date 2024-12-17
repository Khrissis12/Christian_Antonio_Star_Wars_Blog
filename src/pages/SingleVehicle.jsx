import React from "react"
import { useState, useEffect } from "react"
import VehicleCard from "../components/VehicleCard"
import { useParams } from "react-router-dom"

const SingleVehicle = () => {
    const { id } = useParams();
    const [vehicle, setVehicle] = useState(null);

    const loadSingleVehicle = async() => {
        try {
            const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`,{
                method:'GET'
            })
            const result = await response.json()
            if(!response.ok){
                throw new Error("Something went wrong :c")
            }
            console.log(result);
            setVehicle(result.result.properties)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        loadSingleVehicle()
    }, [id])

    if(!vehicle){
        return <p>Loading vehicle...</p>
    }

    return(
        <div className="container">
            <div>
                <VehicleCard
                    name={vehicle.name}
                    population={vehicle.population}
                    residents={vehicle.residents}
                    gravity={vehicle.gravity}
                    image={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`}
                />
            </div>
        </div>
    )
}

export default SingleVehicle;