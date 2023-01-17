import "./CartWidget.css";
import { BsCartCheck} from "react-icons/bs"
import {Link} from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";



export const CartWidget = () => {
    

    const {getTotalItem} = useContext( CartContext)

    


    return (
        <Link to="/cart">
            <div>
                <div className="container-fluid d-flex justify-content-center">
                    <div className="navbar-brand row" href="#">
                        <BsCartCheck className="svg"/>
                    </div>
                    <div className="contenedor">
                       <span>{getTotalItem() > 0 ?getTotalItem () : 0}</span>
                    </div>
                </div>
            </div>
        </Link>
        
    )
}

