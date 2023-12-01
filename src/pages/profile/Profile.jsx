import React from 'react'
import { Toolbar } from '@mui/material'
import HeaderNav from '../../common/HeaderNav'
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import userImage from '../../assets/R.png'

import './Profile.css'


function Profile() {
    return (
        <div className='profileContainer'>
            <HeaderNav />
            <Toolbar />
            <div className="contentWrapper">
                <h2 style={{ color: 'rgb(48, 155, 155)' }}>User Profile</h2>
                <div className="cardContainer">
                    <div className="usercardItem">
                        <img src={userImage} alt="My Image" className='userImage' />
                    </div>
                    <div className="cardItem">
                        <p className='username'>Test User</p>
                        <div className="userData">
                            <EmailIcon />
                            <p className='userTxt'>test@gmail.com</p>
                        </div>
                        <div className="userData">
                            <PersonIcon />
                            <p className='userTxt'>Male</p>
                        </div>
                        <div className="userData">
                            <LocationOnOutlinedIcon />
                            <p className='userTxt'>test location</p>
                        </div>
                    </div>
                </div>

                <div className="tableContainer">
                    <div className="tableData">
                        <div className='header'>
                            <p>User_ID</p>
                        </div>
                        <div className='headerData'>
                            <p>User ID 015</p>
                        </div>
                    </div>
                    <div className="tableData">
                        <div className='header'>
                            <p>Assignment</p>
                        </div>
                        <div className='headerData'>
                            <p>1</p>
                        </div>
                    </div>
                    <div className="tableData">
                        <div className='header'>
                            <p>Submitted</p>
                        </div>
                        <div className='headerData'>
                            <p>0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
