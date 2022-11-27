import "./Example.css"
import { Parent , Parent1 , Parent2 } from "./Parent.jsx"

export default function Example() {
    return (
        <div id="example">
            <Parent />
            <hr />
            <Parent1 />
            <hr />
            <Parent2 />
        </div>
    )
}