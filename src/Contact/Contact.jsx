import React, { useState } from "react";
import "./Contact.css"
import InputOrElse from "../InputOrElse/InputOrElse.jsx"

export default function  Contact () {
    // const [name, setName] = useState("");

    // catch event (listener) with arrow-function for the submit
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitting \nEmail ${email}\nMessage ${message}\nPhone ${phone}\nTitle ${title}`)
    };

    // creating a state to verify certain condition (here, form not yet applied/submitted)
    // ONE useState FOR EACH  handler
    const [message, setMessage] = useState("");
    const handleMessage = (e) => {
        // // DEBUG :
        // console.log(e.target.value);
        setMessage(e.target.value);
    };

    const [phone, setPhone] = useState("");
    const handlePhone = (e) => {
        // // DEBUG :
        // console.log(e.target.value);
        setPhone(e.target.value);
    };

    const [title, setTitle] = useState("");
    const handleTitle = (e) => {
        // // DEBUG :
        // console.log(e.target.value);
        setTitle(e.target.value);
        if (title == "enter") {

        }
    };



    // TODO : finish the  validate to give color feedback around the input box
    const [email, setEmail] = useState("");
    // // catch the even onchange (HTML) / onChange (JSX)
    const handleEmailChange = (e) => {
        // // DEBUG : to see what's inside event object, which has an <input ...> as target and what
        // // what is typed inside as value
        // console.log(e.target.value);
        setEmail(e.target.value);
    };

    // let's validate the email
    function validateEmail(email) {
        const AT = "@";
        const DOT = ".";

        console.log(email);
        let indexOfAt = email.indexOf(AT);

        if (indexOfAt == 0 || indexOfAt == -1) {
            return false
        } else {
            let splittedEmail = email.split(AT)
            if (splittedEmail[1].includes(DOT)) {
                if (splittedEmail[1].includes(AT)) {
                    return false
                }
                return true
            };
        return false
        };
    };

    return (
        <>
            <section id="contact">
                <h2>Contact Us</h2>

                <div className="underline"></div>

                {/* Adding the handleSubmit event listener */}
                <form className="form" onSubmit={ handleSubmit } action="" method="post">
                    {/* NOTE : verify if its all rigthr in the console. 8 Warnings... BUT oddly
                    they disappear outside of Private Mode  */}
                    <div>
                        {/* Adding the handleEmailChange event listener  HERE & INSIDE THE COMPONENT.jsx */}
                        <InputOrElse children="Email" onChange={ handleEmailChange } inType="email" id="email" inName="email" inPlaceH="example@email.com" />
                        <InputOrElse children="Message" onChange={ handleMessage } inType="textarea" areaRows="8" id="message" inName="message" inPlaceH="Enter Message..." />
                    </div>

                    <div>
                        <div>
                            <InputOrElse children="Phone Number" onChange={handlePhone} inType="tel" id="phone" inName="phone" inPlaceH="Enter Phone Number" />
                        </div>
                        <div>
                            <InputOrElse children="Title" onChange={handleTitle} inType="text" id="title" inName="title" inPlaceH="Enter Title"/>
                        </div>
                        <InputOrElse className="button" inType="submit" id="submit" inValue="Submit"/>
                    </div>
                </form>
            </section>
        </>
    )
};