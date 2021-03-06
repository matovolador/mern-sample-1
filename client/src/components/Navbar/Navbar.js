import React, { useEffect, useState } from "react";
import { AppBar, Typography, Button, Toolbar, Avatar } from "@material-ui/core";
import memories from '../../images/memories.png';
import {Link, Navigate} from 'react-router-dom';
import useStyles from './styles';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const classes  = useStyles();
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    
    const dispatch = useDispatch()
    console.log(user);
    
    const navigate = useNavigate()

    const logout = () => {
        dispatch({type:'LOGOUT'});
        navigate.push("/")
        setUser(null)
    }
    useEffect(()=>{
        const token = user?.token;
        // JWT...
        setUser(JSON.parse(localStorage.getItem('profile')))
    },[])

    return (
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <div ckassName={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant='h2' align='center'>Memories</Typography>
                <img className={classes.image} src={memories} alt='memories' height='60' />
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button variant='contained' className={classes.logout} color='secondary' onClick={logout} >Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant='contained' color='primary' >Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    )
    
}

export default Navbar;