import EstruturaNotica from "./estuturaNoticia";
import img2 from './img/incendio.jpg';

function incendio() {
    return (
        <div>
            <EstruturaNotica
            titulo="Veículo é destruído em incêndio no Bairro dos Estados"
            imagem={img2}
            noticia="Na noite deste domingo,24, os bombeiros e Polícia Militar foram acionados para atendimento a um incêndio em veículo. O fato aconteceu na rua Mato Grosso, próximo a boate Asa Branca. Segundo o proprietário do automóvel, ele havia deixado o veículo estacionado no local devido a problemas mecânicos e que estava à procura de um guincho quando foi informado por um amigo que passou pelo local que o carro estava em chamas. O GM/Chevette com placas de Capinzal ficou completamente destruído. Segundo os bombeiros, o fogo iniciou na parte traseira do veículo e as causas do início do fogo terão que ser investigado."/>
        </div>
    );
}
export default incendio;