import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div>
        {/* <div>
          <img
              src='https://media.istockphoto.com/vectors/bookshelf-shelf-with-books-and-a-vase-isolated-on-white-background-vector-id1210030667?k=6&m=1210030667&s=170667a&w=0&h=TvktMahUSmdTOCjV8EZT94u8FS5tTDEDCI2hTl3W1lE='/>
        </div>*/}
        <div className={classes.descriptionBlock}>
            <img src={props.profile.photos.large}/>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    </div>
}

export default ProfileInfo;