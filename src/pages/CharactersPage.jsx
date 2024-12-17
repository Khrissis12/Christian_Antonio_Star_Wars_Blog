import { useState, useEffect } from "react";
import Card from "../components/Card";
import { useParams } from "react-router-dom";


const CharactersPage = () => {

    const { uid } = useParams()
    const [charactersList, setCharactersList] = useState([]);

    const loadCharacters = async () => {
        // setLoading(true);

        try {
            const response = await fetch('https://www.swapi.tech/api/people', {
                method: 'GET'
            })
            if (!response.ok) {
                throw new Error("Failed to get characters :c")
            }
            const result = await response.json();
            console.log(result);
            setCharactersList(result.results)

        }
        catch (error) {
            console.log(error);

        }
    }


    useEffect(() => {
        loadCharacters();
    }, [])

    
    return (
        <>
            <div>
                <h1 className="char-title mb-5 me-5">Characters:</h1>
                <div className="row">
                    {charactersList.map((character) => {
                        return (
                            <div className="col-md-4" key={character.url}>
                                <Card
                                    name={character.name}
                                    homeworld={`https://swapi.py4e.com/api/planets/1/${character.uid}`}
                                    height={character.height}
                                    birth_year={character.birth_year}
                                    image={`https://starwars-visualguide.com/assets/img/characters/${character.url.split("/").at(-1)}.jpg`}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
            )
}

export default CharactersPage;