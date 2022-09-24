import "./Card.css"

export default function Card ( props ) {
    return (
        <>
            <div className="card">
                <img src={props.imgSrc} alt="" />
                <h3>{props.h3Text}</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    In dictum mauris non pellentesque accumsan. Nec
                    pellentesque eget.
                </p>
            </div>
        </>
    )
};