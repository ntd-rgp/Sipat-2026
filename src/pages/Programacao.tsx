import imagemLateral from '../assets/imagemlateral.png';
import logoSipat from '../assets/SIPAT_logo.png';

function Programacao() {
    return (
        <main className="flex w-full">
            <div className="flex-1">
                <img
                    src={logoSipat}
                    alt="Logo SIPAT"
                    className="h-auto w-[265px] md:w-[900px]"/>
                    <h1 className="font-[700] md:text-[36px] text-[12px] mt-[12px] ml-[2%]">REFINARIA GABRIEL PASSOS</h1>
                    <h1 className="font-[700] md:text-[36px] text-[12px] text-[#d10c56] ml-[2%]">LOREM IPSUM DOLOR SIT AMET</h1>
                    </div>

            <div className="ml-auto shrink-0">
                <img
                    src={imagemLateral}
                    alt="Imagem lateral"
                    className="h-auto w-[90px] md:w-[260px]"/></div>
        </main>
    );
}

export default Programacao;