import React from 'react';
import './skeleton.css'




export const MainSkeleton = (props) => {

    let {type} = props;

    const classes = `skeleton ${type}`

    return(
        <>
            <div className={classes}></div>        
        </>
    )
}