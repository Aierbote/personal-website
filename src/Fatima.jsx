import "./Fatima.css"
import Button from "./Button"
import phone from "./assets/phone.png"
//  TODO : move the assets folder inside public, IF POSSIBLE

export default function Fatima() {
    return (
        <>
            <header>
                <div>
                    <h1>We Create Powerful Digital <span>Products.</span></h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adiscing edit. Dolor
                        morbi vedit turpis et dolor sit morbi odio id. Aliquam ultricies
                        tortor ac.
                    </p>
                    <Button whichType="primary">Get Stared</Button>
                    {/* <Button whichType="secondary">WHATWHAT</Button> */}
                </div>

                <img src={phone} alt="cellulare" />
            </header>
        </>
    )
};