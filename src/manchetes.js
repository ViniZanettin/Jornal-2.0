import Manchete from './estruturaManchete';
import img1 from './img/Exportacao.jpg';
import img2 from './img/incendio.jpg'

function manchetes() {
    return (
        <div className='flex-container'>
            <Manchete texto="Comparação 1° trimestre 2022/2021." imagem={img1} link="exportacao" titulo="Queda de 66% em exportações de Concórdia" data="25/04/2022" />
            <Manchete texto="As causas do incêndio terão que ser apuradas" imagem={img2} link="incendio" titulo="Veículo é Destruído em Incêndio no Bairro dos Estados" data="25/04/2022" />
        </div>
    );
}
export default manchetes;