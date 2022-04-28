function estruturaNotica(props) {
    return (
        <div>
            <h1 className="tituloNotica">{props.titulo}</h1>
            <img className="imagemNoticia" src={props.imagem} />
            <p className="textoNoticia">{props.noticia}</p> 
        </div>
    );
}
export default estruturaNotica;