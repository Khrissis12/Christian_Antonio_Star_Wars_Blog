import { useState, useEffect } from "react"
import VehicleCard from "../components/VehicleCard"

const Vehicles = ()=> {

    const [vehiclesList, setVehiclesList] = useState([])

    const loadVehicles = async()=> {
        try {
            const response = await fetch('https://www.swapi.tech/api/vehicles',{
                method: 'GET'
            })
            if(!response.ok){
                throw new Error("Something went wrong :c")
            }
            const result = await response.json()
            console.log(result)
            setVehiclesList(result.results)

        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        loadVehicles();
    }, [])

    return(
        <>
            <div className="container">
                <h1 className="vehicle-title mb-5 me-5">Vehicles:</h1>
                <ul className="d-flex flex-wrap ">
                    {vehiclesList.map((vehicle) => {
                        const vehicleId = vehicle.url.split("/").at(-1);
                        return(
                        <li className="col-md-4"
                            key={vehicle.url}>
                            <VehicleCard
                                name={vehicle.name}
                                population={vehicle.population}
                                residents={vehicle.residents}
                                gravity={vehicle.gravity}
                                image={`https://starwars-visualguide.com//assets/img/vehicles/${vehicleId}.jpg`}
                            />    
                        </li>
                    )})}
                </ul>
            </div>
        </>
    )
}

export default Vehicles;