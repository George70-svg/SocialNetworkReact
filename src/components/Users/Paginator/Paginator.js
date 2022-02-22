import classes from "./Paginator.module.css";
import React, {useEffect, useState} from "react";

const Paginator = (props) => {

    let pagesCount = Math.ceil(props.numberOfUsers / props.pageSize)

    let usersPageArray = []

    for (let i = 1; i <= pagesCount; i++) {
        usersPageArray.push(i)
    }

    let portionSize = 10
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionBoard = (portionNumber - 1) * portionSize + 1
    let rightPortionBoard = portionNumber * portionSize

    const setUsersPage = (pageNumber) => {
        props.getUsers(pageNumber, props.pageSize)
    }

    useEffect(() => {
        setPortionNumber(Math.ceil(props.currentPage / portionSize))
    }, [props.currentPage])

    usersPageArray = usersPageArray.filter(page => page >= leftPortionBoard && page <= rightPortionBoard)
    .map(page => {
        return <li key={page}
                   className={page === props.currentPage ? classes.active : classes.unactive}
                   onClick={() => {setUsersPage(page)}}
        >{page}</li>
    })

    return (
        <div className={classes.paginatorContainer}>
            <button disabled={leftPortionBoard <= 1}
                    className={leftPortionBoard <= 1 ? classes.disabled : classes.active}
                    onClick={() => {setPortionNumber(portionNumber - 1)}}
            >&#10094; Prev</button>

            <ul>
                {usersPageArray}
            </ul>

            <button disabled={rightPortionBoard >= pagesCount}
                    className={rightPortionBoard >= pagesCount ? classes.disabled : classes.active}
                    onClick={() => {setPortionNumber(portionNumber + 1)}}
            >Next &#10095;</button>
        </div>
    )
}

export default Paginator