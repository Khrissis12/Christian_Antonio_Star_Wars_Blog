import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleCharacter from "./pages/SingleCharacter";
import CharactersPage from "./pages/CharactersPage";
import Planets from "./pages/Planets";
import SinglePlanet from "./pages/SinglePlanet";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Vehicles from "./pages/Vehicles";
import SingleVehicle from "./pages/SingleVehicle";

const AppRouter = () => {
    return( 
        <BrowserRouter baseName='' >
            <NavBar />
            <Routes>
                <Route path="/" element= { <Home /> } />
                <Route path="/characters" element= { <CharactersPage /> } />
                <Route path="/characters/:uid" element= { <SingleCharacter /> } />
                <Route path="/planets" element= { <Planets /> } />
                <Route path="/planets/:id" element= { <SinglePlanet /> } />
                <Route path="/vehicles" element= { <Vehicles /> } />
                <Route path="/vehicles/:id" element= { <SingleVehicle /> } />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRouter;