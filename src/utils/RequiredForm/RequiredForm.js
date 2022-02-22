import classes from "./RequiredForm.module.css"

export const InputFormControl = ({input, meta, ...props}) => {
    console.log(meta)
    return (
        <div className={classes.formControl}>
            <input className={classes.error} {...input} {...props}/>
        </div>
    )
}

export const maxTextLength = (n) => (value) => {
    if(value && value.length > n) return `Max length symbols ${n}`
    return undefined
}

export const RequiredForm = (values) => {
    let errors = {}

    if(!values.email) {
        errors.email = "Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if(!values.password) {
        errors.password = "Required"
    }

    return errors
}


