import "./CartWidget.css";
import { Accordion} from "react-bootstrap"

export const CartWidget = () => {
    return (
        <div>
            <div className="container-fluid d-flex justify-content-end ContainerCardWidget">
                <div className="navbar-brand row ContainerImgP" href="#">
                    <Accordion className="svg"/>
                    <p className="col text-light">99</p>
                </div> 
            </div>
        </div>
    )
}