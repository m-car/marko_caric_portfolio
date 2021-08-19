import React from 'react';
const myEmail = 'pbmc117@gmail.com';
const myGithub='https://github.com/m-car';
const myLinkedIn='https://www.linkedin.com/in/markocaric/'

function ContactmeDiv() {
    return(
        <div>
            <ul>
                
                <li><a href={myEmail}>Email Me</a></li>
                <li><a href={myGithub}>My GitHub</a> </li>
                <li><a href={myLinkedIn}>LinkedIn</a></li>
                <li>back to top </li>
            </ul>
        </div>
    )
}
export default ContactmeDiv;