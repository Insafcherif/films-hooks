import React from 'react';
import CardsCompnent from './CardsCompnent';


function List({ films , caracterupdate, rate, setFilms}) {
    return (
        <div className="container"
            style={{
                display: "flex ",
                width: "1050px",
                flexWrap: "wrap",
                justifyContent: "space-around",
                marginTop:"75px"
            }}>{
                films.filter((elt)=> 
                elt.title.toLowerCase().includes(caracterupdate.toLowerCase()) && 
                elt.rate>= rate).map((elt) => 
                (<CardsCompnent key={elt.id} movie={elt} setFilms={setFilms}  films={films}/>))}</div>
    )
}

export default List