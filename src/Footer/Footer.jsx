import "./Footer.css"

export default function Footer () {
    return (
        <>
            <footer>
                <div>
                    <h3>Navigate</h3>
                    <ul className="withArrows">
                        <li>Home</li>
                        <li>Portfolio</li>
                        <li>Careers</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media</h3>
                    <ul className="noArrows">
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Linkedin</li>
                    </ul>
                </div>
                <div>
                    <h3>About Us</h3>
                    <ul className="noArrows">
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>

                <div id="footerText">
                    <div>
                        <h2>TECH-WORLD</h2>
                        <span>Copyright 2022</span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Libero, orci tempor eget interdum. Egestas fermentum tellus
                        gravida ut mauris, pulvinar libero suspendisse ornare.
                        Viverra nulla aliquam nullam interdum pretium gravida mi.
                        Porttitor duis sagittis vel et.
                    </p>
                </div>
            </footer>
        </>
    )
};
