import React from 'react'
import classes from '../../css/Common.module.css'

const Footer= () =>  {
        return (
            <React.Fragment>
                <div className={classes.clearfix}></div>
                <div className={classes.footer}> 
                    Copyrights @ 2020 - VF NZ Photogallery
                </div>
            </React.Fragment>
        )
    }

export default Footer