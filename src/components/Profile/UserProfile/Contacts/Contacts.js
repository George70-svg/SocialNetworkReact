const Contacts = (props) => {
    let contacts = Object.keys(props.contacts).map(key => {
        if(props.contacts[key]) {
            return <div key={key}>{key}: <a href={props.contacts[key]}>{props.contacts[key]}</a></div>
        }
    })

    return (
        <div>
            {contacts}
        </div>
    )
}

export default Contacts