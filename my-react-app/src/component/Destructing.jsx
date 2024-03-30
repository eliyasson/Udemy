import React from "react";
import ReactDOM from "react-dom";
import cars from "../Practice";

const [honda, tesla] = cars;


const { model, colour, speed: {top, zero} } = tesla;


function Destracting() {
    return (
        <div>
            <table>
                <tr>
                    <th>Brand</th>
                    <th>Top Speed</th>
                    <th>Top Colour</th>
                </tr>
                <tr>
                    <td>{model}</td>
                    <td>{top}</td>
                    <td>{colour}</td>
                </tr>
                <tr>
                <td></td>
                <td></td>
                </tr>
            </table>,
        </div>
      
    )
}
export default Destracting;

