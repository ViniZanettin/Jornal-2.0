import { Link } from "react-router-dom";

function estururaManchete(props) {
    return (
        <div className="manchete">
            <img className="imgManchete" src={props.imagem} />
            <div className="texto">
                <Link to={props.link}>
                    <h2 className="titulonot">
                        {props.titulo}
                    </h2>
                </Link>
                <p className="textnot">
                    {props.texto}
                </p>
                <h6>{props.data}</h6>
            </div>
            <hr></hr>
        </div>
    );
}

export default estururaManchete;