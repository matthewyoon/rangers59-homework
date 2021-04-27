import React from 'react';

// New Styles Import for Material-UI
import { makeStyles, Button } from '@material-ui/core'
// import Button from '@material-ui/core/Button';   --> This is using the default export. See above for the one line
import car_image from '../../assets/images/cars.jpg' // Won't know how to source the image so need to type in file name

import { Link } from 'react-router-dom'

interface Props {
    title: string;
}

// New Make Styles CSS Object
const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0'
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    logo: {
        margin: '0 0 0 0.45em'
    },
    logo_a: {
        color: 'white'
    },
    logo_navigation: {
        listStyle: 'none',
        textTransform: 'capitalize',
        textDecoration: 'none',
        fontFamily: 'sans-serif'
    },
    navigation: {
        display: 'flex',
    },
    nav_a: {
        display: 'flex',
        padding: '1em',
        color: 'white',
        fontFamily: 'sans-serif',
        textDecoration: 'none'
    },
    main: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${car_image})`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
        fontFamily: 'sans-serif',
        textShadow: '1px 2px 3px black',
        color: 'white'
    },
    credit:{
        fontSize: '8px'
    },
    main_text: {
        textAlign: 'justify',
        position: 'relative',
        top: '10%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        paddingLeft: '20px'
    }, 
    
    button: {
        textDecoration: 'none',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-550%, 50%)'
    }
})

export const Home = ( props:Props) => {
    
    // New Classes variable
    const classes = useStyles();
    return (
        <div className = {classes.root}>
            { /* Nav Bar Code Here */ }
            <nav>
                <div className={classes.navbar_container}>
                    <h1 className={classes.logo}>
                        <Link to="/" className={ `${classes.logo_a} ${classes.logo_navigation}`}>{props.title}</Link>
                    </h1>
                    <ul className={ `${classes.navigation} ${classes.logo_navigation}`}>
                        <li>
                            <Link to="/" className={classes.nav_a}>Home</Link>
                        </li>
                        <li>
                            <Link to="/dashboard" className={classes.nav_a}>Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/signin" className={classes.nav_a}>Sign In</Link>
                        </li>
                        <li>
                            <Link to="/signup" className={classes.nav_a}>Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div>
                
            </div>

            <main className={classes.main}>
                <p className={classes.credit}>Photo By: Florian Schneider</p>
                <div className={classes.main_text}>
                    <h1> { props.title }</h1>
                    
                    <Link to = '/signup'>
                        <Button color = 'primary' variant = 'contained' className={classes.button}>Sign Up Today</Button>
                    </Link>
                </div>
            </main>
        </div>
    )
}