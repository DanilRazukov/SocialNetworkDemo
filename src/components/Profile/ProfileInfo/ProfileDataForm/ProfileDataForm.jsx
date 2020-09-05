import React from "react";
import {CreateField, Input, Textarea} from "../../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import s from "../ProfileInfo.module.css";
import style from "../../../common/FormsControls/FormsControls.module.css"

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>Save Profile</button>
            </div>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <b> Full Name </b>
                : {CreateField("Full Name", "fullName", Input, [])}
            </div>
            <div>
                <b> Looking for a job </b> :
                {CreateField("", "lookingForAJob", Input, [], {type: "checkbox"})}
            </div>
            <div>
                <b> My professional skills </b> : {profile.lookingForAJobDescription}
                {CreateField("My professional skills", "lookingForAJobDescription", Textarea, [])}
            </div>
            <div>
                <b> About me </b>
                {CreateField("About me", "aboutMe", Textarea, [])}
            </div>
            <div>
                <b>Contacts: </b> : {Object.keys(profile.contacts).map(key => {
                return <div className={s.contact}>
                    <b>{key}: {CreateField(key, "contacts." + key, Input, [])}</b>
                </div>
            })}
            </div>
        </form>
    )
}
const ReduxProfileDataForm = reduxForm({
    form: `EditProfile`
})(ProfileDataForm)
export default ReduxProfileDataForm