import React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Card from "../components/Card"

const SingleCharacter = () => {

    const { uid } = useParams();
    console.log("uid:", uid)
    const [character, setCharacter] = useState(null)
    const [loading, setLoading] = useState(true)

    const loadSingleCharacter = async () => {
        setLoading(true)
        try {
            const response = await fetch(`https://www.swapi.tech/api/people/${uid}`, {
                method: 'GET'
            });
            if(!response.ok){
                throw new Error("Failed to get single character :c")
            }
            const result = await response.json();
            console.log(result);
            setCharacter(result.result.properties)

        } catch (error) {
            console.log(error);

        }
        finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        loadSingleCharacter();
    }, [uid])

    if (loading) {
        return <p>Loading character...</p>;
    }

    return (
        <div className="container">
            <div>
                <Card
                    name={character.name}
                    homeworld={character.homeworld}
                    height={character.height}
                    birth_year={character.birth_year}
                    image={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
                    />
            </div>
        </div>
    )
}

export default SingleCharacter;