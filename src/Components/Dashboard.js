import React, { useEffect, useState, Fragment } from 'react'
import Footer from './Common/Footer'
import { connect } from 'react-redux'
import { usersList } from '../Redux/Actions/usersList'
import classes from '../css/Common.module.css'
import ListAlbum from './Albums/ListAlbum'
import Loader from '../Components/Common/Loader.js';
import { history } from '../Routing/history';

let user = JSON.parse(localStorage.getItem('user'));
// console.log(user);
if(!user){
    history.push('/Login')
} 

const Dashboard = props => {
    
    const [loader,changeloader]=useState(true)

    useEffect(() => {
        props.usersList().then(() => {
           changeloader(false)
        }).catch((err) => {
            console.log(err)
            changeloader(true)
        });
    })

    return (
        <Fragment>
            <div className={classes.listWrapper}>
                {loader ? <Loader /> : <ListAlbum />}
            </div>
            <Footer />
        </Fragment>
    )

}

export default connect(null, { usersList })(Dashboard)