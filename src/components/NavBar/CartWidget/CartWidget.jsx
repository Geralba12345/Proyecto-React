import "./CartWidget.css";
import { BsCartCheck} from "react-icons/bs"

export const CartWidget = () => {
    return (
        <div>
            <div className="container-fluid d-flex justify-content-center">
                <div className="navbar-brand row" href="#">
                    <BsCartCheck className="svg"/>
                    <p className="contador">9</p>
                </div>
            </div>
        </div>
    )
}

