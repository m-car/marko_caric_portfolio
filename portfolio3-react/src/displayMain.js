import React from 'react';
import './App.css';
import HelloDiv from './components/helloDiv';
import NavbarDiv from './components/navbarDiv';
import MyworkDiv from './components/myworkDiv';
import ContactmeDiv from './components/contactmeDiv';

export default function DisplayMain(){
    return(
        <div>
        <NavbarDiv />
        <HelloDiv />
        <MyworkDiv/>
        <ContactmeDiv />
        </div>
    )
}