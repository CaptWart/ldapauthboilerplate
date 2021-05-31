import React, { useState, useEffect } from "react";
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import Button from 'react-bootstrap/Button';

function User(){
    const [user, setUser] = useState([]);

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    const handleLogout = (evt) => {
        fetch('http://localhost:3001/logout', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              credentials: 'include'
          })
            .then(response => {
                window.location.href = "/login";
            })
    }

    React.useEffect(function effectFunction() {
        async function fetchUser() {
            const response = await fetch('http://localhost:3001/user', { method: "GET", credentials: 'include' })
            if(!response || response.status === 500 || response.status === 401){
                window.location.href = "/login";
            }
            else{
                const json = await response.json();
                setUser(json)
            }
        }
        fetchUser()

    }, []);

    useEffect(() => {
        
    }, [user.id]); 

    return(
        <div>
            <Header/>
            <p>Hello your email is {user.email}. If you see this message then you have successfully logged in</p>
            <Button onClick={handleLogout}> Logout </Button>
            <Footer/>
        </div>
    )
}

export default User;