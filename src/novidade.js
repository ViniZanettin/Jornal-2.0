import EstruturaNotica from "./estuturaNoticia";
import img1 from './img/vacina.png';
function Novidades() {
    return (
        <div className="novidade">
            <EstruturaNotica
            titulo="Novidades!"
            imagem={img1}
            noticia="A vacinação contra a covid-19 será um pouco diferente nesta semana em relação às semanas anteriores em Concórdia. O foco da aplicação de doses será apenas nas unidades de saúde dos bairros, onde há sala de vacinação. A unidade móvel da covid não estará ativa nos próximos dias.
            De acordo com as informações, nesta semana, os interessados em receber as doses, conforme a necessidade surgir, devem se dirigir até os postos de saúde e solicitar a aplicação dos imunizantes. Estão à disposição terceira e quarta doses."/>
            </div>
    );
}
export default Novidades;