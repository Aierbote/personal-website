import "./Contact.css"
import InputOrElse from "../InputOrElse/InputOrElse.jsx"

export default function Contact () {
    return (
        <>
            <section id="contact">
                <h2>Contact Us</h2>

                <div className="underline"></div>

                <form action="" method="post">
                    <div>
                        {/* NOTE : verify if its all rigthr in the console. 8 Warnings... BUT oddly
                        thye disappear outside of Private Mode  */}
                        <InputOrElse children="Email" inType="email" id="email" inName="email" inPlaceH="example@email.com" />
                        <InputOrElse children="Message" inType="textarea" areaRows="8" id="message" inName="message" inPlaceH="Enter Message..." rows/>
                    </div>

                    <div>
                        <div>
                            <InputOrElse children="Phone Number" inType="tel" id="phone" inName="phone" inPlaceH="Enter Phone Number" />
                        </div>
                        <div>
                            <InputOrElse children="Title" inType="text" id="title" inName="title" inPlaceH="Enter Title"/>
                        </div>
                        {/* TODO : maybe better a type submit */}
                        <InputOrElse className="button" inType="submit" id="submit" inValue="Submit"/>
                    </div>
                </form>
            </section>
        </>
    )
};