import classes from "./FilmAdd.module.css"
import React from "react";

const FilmAdd = (props) => {

    let newFilmName = React.createRef();
    let newFilmPoster = React.createRef();
    let newFilmRating = React.createRef();

    function onAddNewFilm() {
        props.addNewFilm(
            newFilmName.current.value,
            newFilmPoster.current.value,
            newFilmRating.current.value
        );

        newFilmName.current.value = "";
        newFilmPoster.current.value = "";
        newFilmRating.current.value = "";
    }

    return (
        <div className={classes.addContainer}>
            <input className={classes.filmName} ref={newFilmName} placeholder="Film name" type="text"/>
            <input className={classes.filmPoster} ref={newFilmPoster} placeholder="Poster url" type="text"/>
            <input className={classes.filmRating} ref={newFilmRating} placeholder="Film rating" type="text"/>
            <button onClick={onAddNewFilm}>Add film</button>
        </div>
    )
}

export default FilmAdd;