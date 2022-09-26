import "./InputOrElse.css";

function InputOrElse (props) {
    let res = "";
    if (props.inType == "textarea") {
        res = <textarea rows={props.areaRows} id={props.id} name={props.inName} placeholder={props.inPlaceH} />
    } else if (props.inType == "submit") {
        res = <input type={props.inType} id={props.id} className="submit" name={props.inName} value={props.inValue} placeholder={props.inPlaceH}/>
    } else {
        res = <input type={props.inType} id={props.id} name={props.inName} value={props.inValue} placeholder={props.inPlaceH}/>
    };

    return (
        <div>
            <label htmlFor={props.id}>{props.children}</label>
            {res}
        </div>
    )
};

export default InputOrElse;