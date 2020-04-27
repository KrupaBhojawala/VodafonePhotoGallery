import React from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import classes from '../../css/Common.module.css'
import folderClasses from '../../css/Gallery.module.css'
import { history } from '../../Routing/history';


class Album extends React.Component {

    componentDidMount(){
        let user = JSON.parse(localStorage.getItem('user'));
        // console.log(user);
        if(!user){
            history.push('/Login')
        } 
    }

    getUserName= (userId)=>{
        if (this.props.users === undefined || this.props.users === "" || this.props.users === null) {
            return null
        }
        const userData = this.props.users.filter(user => user.id === userId)
        return userData[0].name
    }

    render(){
        const { id = "", title = "", userId = "" } =
        this.props.albums || {};

        return (
            <div className={classes.imgWrapper}>
                <Link to={`/photos/${id}`} >
                    <div className={folderClasses.ffolder + " " + folderClasses.medium + " " + folderClasses.cyan} >
                        <span>{title.length > 25 ? title.substr(0, 25) + "..." : title}</span>

                        <div className={classes.imgDesc}>{"By : " + this.getUserName(userId)}</div>
                    </div>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(Album)
