import React from "react";
import {reduxForm} from "redux-form";
import {createFild, Input, Textarea} from "../../common/FormsControl/FormsControl";
import s from './ProfileInfo.module.css';
import style from "../../common/FormsControl/FormsControl.module.css";



const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return ( <form onSubmit={handleSubmit}>
            <div><button>Save</button></div>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <b>Full name</b>: {createFild("Full name", [], "fullName", Input)}
            </div>
            <div>
                <b>Looking for a job</b>: {createFild("", [], "lookingForAJob", Input, {type: "checkbox"})}
            </div>
            <div>
                <b>My profissional skills</b>:
                {createFild("My professional skills", [], "lookingForAJobDescription", Textarea, )}
            </div>

            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return  <div key={key} className={s.contact}>
                    <b>{key}: {createFild(key, [], "contacts." + key, Input)}</b>
                </div>
            })}
            </div>
            <div>
                <b>About Me</b>:
                {createFild("About Me", [], "aboutMe", Textarea, )}
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})( ProfileDataForm)

export default ProfileDataFormReduxForm ;