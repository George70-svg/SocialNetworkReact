import classes from "./Films.module.css"
import FilmItem from "./FilmItem/FilmItem";
import FilmAdd from "./FilmAdd/FilmAdd";

const Films = (props) => {
    let filmsArray = props.filmPage.filmsDate
        .map((item, index) => <FilmItem key={index} filmName={item.name} filmPoster={item.poster} filmRating={item.rating}/>);

    return (
        <div>
            <FilmAdd addNewFilm={props.addFilmCreator}/>
            <div className={classes.filmsContainer}>
                {filmsArray}
            </div>
        </div>

    )
}

export default Films;