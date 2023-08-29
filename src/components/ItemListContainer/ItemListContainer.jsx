import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [peliculas,setPeliculas]=useState([]);    
    const genero = useParams().genero;
    
    // Desde una Api externa
    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c0c2a616c2msh324aa2ba125f364p1b12fdjsn2d8c46f948f4',
            'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    };

    useEffect(() => {
        fetch(url,options)        
            .then(res => res.json())
            .then(data =>{
            if (genero){
             setPeliculas(data.filter((el) => el.genre[0] === genero));
            }
             else{
             setPeliculas(data)
            }
        })
    }, [genero])
    //////////////////////////////////////////////////////////////////////////////


    return (
        <div className='ItemListContainer'>
            <ItemList peliculas={peliculas}/>
        </div>
    );
}

export default ItemListContainer;