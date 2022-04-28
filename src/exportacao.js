import EstruturaNotica from "./estuturaNoticia";
import img1 from './img/Exportacao.jpg';

function exportacao() {
    return (
        <div>
            <EstruturaNotica
            titulo="Queda de 66% em exportações de Concórdia"
            imagem={img1}
            noticia="Queda significativa nas exportações de Concórdia na comparação 1º trimeste de 2022 com 2021.  A informação foi colhida junto ao Ministério da Indústria, Comércio Exterior e Serviços pela Belos F7 a pedido da reportagem da Rural. A queda é de 66%. A cifra exportada foi de 1,6 milhão de dólares. O maior município do Alto Uruguai Catarinense teve o volume, neste período, de 0,5% das exportações catarinenses e está no ranking estadual na posição 89 e no do país na 1.068."/>
        </div>
    );
}
export default exportacao;
