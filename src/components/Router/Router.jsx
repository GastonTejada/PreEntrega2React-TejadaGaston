import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const Router = () => {
    return(
        <BrowserRouter>
        
            <Navbar />
            <Routes>                
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/peliculas/:genero" element={<ItemListContainer />} />
                <Route path="/pelicula/:id" element={<ItemDetailContainer />}/>
            </Routes>
        
        </BrowserRouter>
    )

}

export default Router;