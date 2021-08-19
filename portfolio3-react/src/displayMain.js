import React, { useState } from 'react';
import './App.css';
import HelloDiv from './components/helloDiv';
import NavbarDiv from './components/navbarDiv';
import MyworkDiv from './components/myworkDiv';
import ContactmeForm from './components/contactmeDiv';
export default function DisplayMain(){
    const  [view, setView] = useState(HelloDiv);

    const handleView=() =>{

    }

    return(
        <div>
        <NavbarDiv />
        <HelloDiv />
        <MyworkDiv/>
        <ContactmeForm />
        </div>
    )
}