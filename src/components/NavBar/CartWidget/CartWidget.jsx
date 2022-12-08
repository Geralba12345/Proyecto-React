import "./CartWidget.css";
import { BsCartCheck} from "react-icons/bs"

export const CartWidget = () => {
    return (
        <div>
            <div className="container-fluid d-flex justify-content-center">
                <div className="navbar-brand row" href="#">
                    <BsCartCheck className="svg"/>
                </div>
                <div className="contenedor">
                    <span>9</span>
                </div>
            </div>
        </div>
    )
}

