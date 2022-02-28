import classes from "./Setting.module.css"
import {useFormik} from "formik";

const SettingForm = (props) => {

    const formikProfile = useFormik({
        initialValues: {
            aboutMe: props.profile.aboutMe,
            facebook: props.profile.contacts.facebook,
            website: props.profile.contacts.website,
            vk: props.profile.contacts.vk,
            twitter: props.profile.contacts.twitter,
            instagram: props.profile.contacts.instagram,
            youtube: props.profile.contacts.youtube,
            github: props.profile.contacts.github,
            mainLink: props.profile.contacts.mainLink,
            lookingForAJob: props.profile.lookingForAJob,
            lookingForAJobDescription: props.profile.lookingForAJobDescription,
            fullName: props.profile.fullName,
        },

        onSubmit: (values, submitProps) => {
            let formData = {
                aboutMe: values.aboutMe,
                contacts: {
                    facebook: values.facebook,
                    website: values.website,
                    vk: values.vk,
                    twitter: values.twitter,
                    instagram: values.instagram,
                    youtube: values.youtube,
                    github: values.github,
                    mainLink: values.mainLink
                },
                lookingForAJob: values.lookingForAJob,
                lookingForAJobDescription: values.lookingForAJobDescription,
                fullName: values.fullName,
                userId: values.userId,
            }
            props.setProfileInfo(formData, submitProps.setStatus)
            console.log(formData)
        },

        validate: values => {
            let errors = {}

            if (!values.aboutMe) {
                errors.aboutMe = "Required"
            }

            if (!values.fullName) {
                errors.fullName = "Required"
            }

            return errors
        }
    })

    let apiErrors
    if (formikProfile.status) {
        apiErrors = formikProfile.status.error.map((item, index) => <p key={index}>{item}</p>)
    }

    return (
        <div className={classes.profileSetting}>
            <form onSubmit={formikProfile.handleSubmit} className={classes.formArea}>
                <div className={classes.inputContainer}>
                    <label htmlFor="fullName">Full name</label>
                    <input type="text"
                           id="fullName"
                           name="fullName"
                           onChange={formikProfile.handleChange}
                           onBlur={formikProfile.handleBlur}
                           value={formikProfile.values.fullName}
                           className={formikProfile.errors.fullName && formikProfile.touched.fullName ? classes.text + " " + classes.error : classes.text}
                           placeholder={formikProfile.errors.fullName && formikProfile.touched.fullName ? formikProfile.errors.fullName : null}
                    />
                </div>

                <div className={classes.inputContainer}>
                    <label htmlFor="aboutMe">AboutMe</label>
                    <input type="text"
                           id="aboutMe"
                           name="aboutMe"
                           onChange={formikProfile.handleChange}
                           onBlur={formikProfile.handleBlur}
                           value={formikProfile.values.aboutMe}
                           className={formikProfile.errors.aboutMe && formikProfile.touched.aboutMe ? classes.text + " " + classes.error : classes.text}
                           placeholder={formikProfile.errors.aboutMe && formikProfile.touched.aboutMe ? formikProfile.errors.aboutMe : null}
                    />
                </div>

                <div className={classes.inputContainer}>
                    <label htmlFor="facebook">Facebook</label>
                    <input type="text"
                           id="facebook"
                           name="facebook"
                           onChange={formikProfile.handleChange}
                           onBlur={formikProfile.handleBlur}
                           value={formikProfile.values.facebook}
                           className={classes.text}
                    />
                </div>

                <div className={classes.inputContainer}>
                    <label htmlFor="website">Website</label>
                    <input type="text"
                           id="website"
                           name="website"
                           onChange={formikProfile.handleChange}
                           onBlur={formikProfile.handleBlur}
                           value={formikProfile.values.website}
                           className={classes.text}
                    />
                </div>

                <div className={classes.inputContainer}>
                    <label htmlFor="vk">Vkontakte</label>
                    <input type="text"
                           id="vk"
                           name="vk"
                           onChange={formikProfile.handleChange}
                           onBlur={formikProfile.handleBlur}
                           value={formikProfile.values.vk}
                           className={classes.text}
                    />
                </div>

                <div className={classes.inputContainer}>
                    <label htmlFor="twitter">Twitter</label>
                    <input type="text"
                           id="twitter"
                           name="twitter"
                           onChange={formikProfile.handleChange}
                           onBlur={formikProfile.handleBlur}
                           value={formikProfile.values.twitter}
                           className={classes.text}
                    />
                </div>

                <div className={classes.inputContainer}>
                    <label htmlFor="instagram">Instagram</label>
                    <input type="text"
                           id="instagram"
                           name="instagram"
                           onChange={formikProfile.handleChange}
                           onBlur={formikProfile.handleBlur}
                           value={formikProfile.values.instagram}
                           className={classes.text}
                    />
                </div>

                <div className={classes.inputContainer}>
                    <label htmlFor="youtube">Youtube</label>
                    <input type="text"
                           id="youtube"
                           name="youtube"
                           onChange={formikProfile.handleChange}
                           onBlur={formikProfile.handleBlur}
                           value={formikProfile.values.youtube}
                           className={classes.text}
                    />
                </div>

                <div className={classes.inputContainer}>
                    <label htmlFor="github">Github</label>
                    <input type="text"
                           id="github"
                           name="github"
                           onChange={formikProfile.handleChange}
                           onBlur={formikProfile.handleBlur}
                           value={formikProfile.values.github}
                           className={classes.text}
                    />
                </div>

                <div className={classes.inputContainer}>
                    <label htmlFor="mainLink">MainLink</label>
                    <input type="text"
                           id="mainLink"
                           name="mainLink"
                           onChange={formikProfile.handleChange}
                           onBlur={formikProfile.handleBlur}
                           value={formikProfile.values.mainLink}
                           className={classes.text}
                    />
                </div>

                <div className={classes.inputContainer}>
                    <label htmlFor="lookingForAJob">Looking for a job</label>
                    <input type="checkbox"
                           id="lookingForAJob"
                           name="lookingForAJob"
                           onChange={formikProfile.handleChange}
                           onBlur={formikProfile.handleBlur}
                           value={formikProfile.values.lookingForAJob}
                    />
                </div>

                <div className={classes.textareaContainer}>
                    <label htmlFor="lookingForAJobDescription">My skills</label>
                    <br/>
                    <textarea id="lookingForAJobDescription"
                              className={classes.textarea}
                              name="lookingForAJobDescription"
                              onChange={formikProfile.handleChange}
                              onBlur={formikProfile.handleBlur}
                              value={formikProfile.values.lookingForAJobDescription}
                    />
                </div>

                <div className={classes.buttonContainer}>
                    <button type="submit" className={classes.normal}>save</button>
                </div>
            </form>
        </div>
    )
}

export default SettingForm;