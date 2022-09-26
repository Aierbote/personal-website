import "./Expertise.css"
import Card from "../Card/Card.jsx"
import mobileDev from "../assets/mobile app development 1.png"
import webDev from "../assets/web-development 1.png"
import webDesign from "../assets/Web-Designing 1.png"

export default function Expertise() {
    return (
        <>
            <section id="expertise">
                {/* first frame */}
                <div className="description">
                    <h2>Special Expertise from Us</h2>
                    <div></div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                        augue et pharetra dolor pharetra, convallis turpis euismod
                        ultrices. Netus nisl pretium sapien egestas vestibulum
                        felis. Nisi orci.
                    </p>
                </div>
                {/* second frame */}
                <div className="cards">
                    <Card imgSrc={mobileDev} h3Text="Mobile Apps"/>
                    <Card imgSrc={webDev} h3Text="Website Apps"/>
                    <Card imgSrc={webDesign} h3Text="UI UX Design"/>
                </div>
            </section>
        </>
    )
};