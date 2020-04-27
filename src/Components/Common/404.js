import React from 'react'
import { Link } from 'react-router-dom';
import notFound from '../../Images/notFound.jpg'

const NotFound = () =>{
        return(
            <div>
                <React.Fragment>
                    <Link to="/">
                        <img className="notFound" src={notFound} alt="NotFound" />
                    </Link>
                </React.Fragment>
            </div>
        )
   
    }

export default NotFound