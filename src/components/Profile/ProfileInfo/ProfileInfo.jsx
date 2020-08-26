import React from 'react';
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import Avatar from "../../common/Ava/Avatar2.jpg"

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    if (!profile.photos.large) {
        profile.photos.large = Avatar
    }
    return<div>
    <div className={s.descriptionBlock}>
        <img src={profile.photos.large}/>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
    </div>
    </div>
}

export default ProfileInfo;