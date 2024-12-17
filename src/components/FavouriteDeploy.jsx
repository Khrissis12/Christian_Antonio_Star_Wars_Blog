

const FavouriteDeploy = () => {
    const [favouriteCharacters, setFavouriteCharacters] = useState([])

    const addToFavorites = (character) => {
        if (!favouriteCharacters.includes(character.name)) {
            setFavouriteCharacters([...favouriteCharacters, character.name])
        }
    }

    const removeFromFavorites = (name) => {
        setFavouriteCharacters(favouriteCharacters.filter(favName => favName !== name));
    }

    return(
        <div className="container mt-5">
        <h2>Favorites:</h2>
            <div className="row">
                <ul>
                    {favouriteCharacters.map((name, index) => (
                        <li key={index}>
                            {name}
                            <button onClick={() => removeFromFavorites(name)} style={{ marginLeft: '10px' }}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default FavouriteDeploy