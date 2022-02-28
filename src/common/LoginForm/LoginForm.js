import classes from "./LoginForm.module.css"
import {useFormik} from "formik";

export const LoginForm = (props) => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            checkbox: true,
            captcha: "",
        },

        onSubmit: (values, submitProps) => {
            let formData = {
                email: values.email,
                password: values.password,
                rememberMe: values.checkbox,
                captcha: values.captcha,
            }
            props.onSubmit(formData, submitProps.setStatus)
            submitProps.resetForm()
        },

        validate: values => {
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
    })

    let apiErrors
    if(formik.status) {
        apiErrors = formik.status.error.map((item, index) => <p key={index}>{item}</p>)
    }

    return(
        <div className={classes.loginContainer}>
            <form onSubmit={formik.handleSubmit} className={classes.formArea}>

                <div className={classes.inputContainer}>
                    <label htmlFor="email">Login</label>
                    <br/>
                    <input type="email"
                           id="email"
                           name="email"
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           value={formik.values.email}
                           className={formik.errors.email && formik.touched.email ? classes.text + " " + classes.error : classes.text}
                           placeholder={formik.errors.email && formik.touched.email ? formik.errors.email : null}
                    />
                </div>

                <div className={classes.inputContainer}>
                    <label htmlFor="password">Password</label>
                    <br/>
                    <input type="password"
                           id="password"
                           name="password"
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           value={formik.values.password}
                           className={formik.errors.password && formik.touched.password ? classes.text + " " + classes.error : classes.text}
                           placeholder={formik.errors.password && formik.touched.password ? formik.errors.password : null}
                    />
                </div>

                <div className={classes.apiErrors}>
                    {apiErrors ? apiErrors : null}
                </div>

                <div className={classes.inputContainer}>
                    <label htmlFor="checkbox">Remember me</label>
                    <input type="checkbox"
                           id="checkbox"
                           name="checkbox"
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           value={formik.values.checkbox}
                    />
                </div>

                {props.captchaURL &&
                <div className={classes.inputContainer}>
                    <label htmlFor="captcha">Captcha</label>
                    <br/>
                    <input type="text"
                           id="captcha"
                           name="captcha"
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           value={formik.values.captcha}
                           className={classes.text}
                    />
                </div>
                }
                {props.captchaURL && <img src={props.captchaURL} alt="captcha"/>}

                <div className={classes.buttonContainer}>
                    {props.isAuth
                        ? <button type="submit" className={classes.normal}>logout</button>
                        : <button type="submit"
                                  className={classes.normal}
                        >login</button>}
                </div>

            </form>
            <div className={classes.helpInfo}>
                <p>To use the social network in test mode without registration, use:</p>
                <p className={classes.userData}>login: <span>free@samuraijs.com</span></p>
                <p className={classes.userData}>password: <span>free</span></p>
                <p>To register on the social network, you need to register on the <a href="https://social-network.samuraijs.com/signUp">API site</a></p>
            </div>
        </div>
    )
}