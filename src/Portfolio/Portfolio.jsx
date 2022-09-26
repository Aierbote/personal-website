import "./Portfolio.css"
import slider01 from "../assets/slider01.png"
import Button from "../Button/Button.jsx"
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg"
import { ReactComponent as ArrowRight } from "../assets/arrow-right.svg"

export default function Portofolio () {
    return (
        <>
            <section id="portfolio">
                <div className="slider">
                    <Button whichType="primary" id="left">
                        <ArrowLeft />
                    </Button>
                    <img src={slider01} alt="Selected image for a carousel" />
                    <Button whichType="primary" id="right">
                        <ArrowRight />
                    </Button>
                </div>

                <div className="text">
                    <h1>Portfolio</h1>

                    <hr />

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi risus duis nibh laoreet. Malesuada luctus tincidunt
                        tortor consectetur netus facilisi dapibus laoreet orci.
                        Viverra amet maecenas consectetur tincidunt felis, pretium
                        posuere ut sapien. Cursus lacus vitae purus est viverra eu
                        ornare tellus augue. Proin risus, sed diam ac. Aliquet.
                    </p>

                    <Button whichType="primary">View All</Button>
                </div>
            </section>
        </>
    )
};