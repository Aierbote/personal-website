import "./Layout.css"
import Fatima from "../Fatima/Fatima.jsx"
import Waves from "../Waves/Waves.jsx"
import Expertise from "../Expertise/Expertise.jsx"
import Strategic from "../Strategic/Strategic.jsx"
import Team from "../Team/Team.jsx"
import Portfolio from "../Portfolio/Portfolio.jsx"
import Contact from "../Contact/Contact.jsx"

export default function Layout() {
    return (
        <>
            <nav><h1>TECH-WORLD</h1></nav>
            <Fatima />
            <Waves />
            <Expertise />
            <Strategic />
            <Team />
            {/* FIXME : pseudo-class :hover from Portfolio.css for buttons) */}
            <Portfolio />
            <Contact />
        </>
    )
};