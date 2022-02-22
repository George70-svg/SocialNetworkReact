import classes from "./FilmItem.module.css"

const FilmItem = (props) => {
    return(
        <div className={classes.filmItem}>
            <img src={props.filmPoster} alt="poster"/>
            <div className={classes.rating}>My rating: {props.filmRating}/10</div>
        </div>
    )
}

export default FilmItem;