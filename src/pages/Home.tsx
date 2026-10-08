import { useEffect, useState } from 'react';
import imagemLateral from '../assets/imagemlateral.png';
import logoSipat from '../assets/SIPAT_logo.png';

function Home() {
    const [diasRestantes, setdiasRestantes] = useState(0);
    const dataFinal = new Date(2026, 10, 9);
    useEffect(() => {
        function calcularDias() {
            const agora = new Date();
            const hoje = new Date(
                agora.getFullYear(),
                agora.getMonth(),
                agora.getDate()
            );
            const diferencaEmMilissegundos = dataFinal.getTime() - hoje.getTime();

            const dias = Math.ceil(
                diferencaEmMilissegundos / (1000 * 60 * 60 * 24)
            );

            setdiasRestantes(Math.max(0, dias));
        }

        calcularDias();

        const intervalo = setInterval(calcularDias, 1000 * 60 * 60);

        return () => clearInterval(intervalo);
    }, []);
    return (
        <main className="flex-col w-full">
            <div className='flex'>

                <div className="flex-1">
                    <img
                        src={logoSipat}
                        alt="Logo SIPAT"
                        className="h-auto w-[265px] md:w-[900px] ml-[2%]" />
                    <h1 className="font-[700] md:text-[36px] text-[12px] mt-[12px] ml-[4%]">REFINARIA GABRIEL PASSOS</h1>
                    <h1 className="font-[700] md:text-[36px] text-[12px] text-[#d10c56] ml-[4%]">LOREM IPSUM DOLOR SIT AMET</h1>
                    <p className='w-[60%] md:mt-[30px] mt-[12px] md:text-[24px] text-[12px] ml-[4%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className='w-fit bg-[#d10c56] pl-[2%] pr-[2%] text-white md:mt-[30px] mt-[12px] md:text-[24px] text-[12px] ml-[4%]'>Superação, atenção aos riscos e vida equilibrada.</p>
                </div>

                <div className="ml-auto shrink-0">
                    <img
                        src={imagemLateral}
                        alt="Imagem lateral"
                        className="h-auto w-[90px] md:w-[260px]" />
                </div>
            </div>

            <div className='md:h-[200px] md:mt-[30px] h-[110px] mt-[20px] ml-[2%] mr-[2%] bg-[#0e2245] flex justify-center items-center md:gap-[70px] gap-[8px] '>
                <div className='w-fit flex-col'>
                    <p className=' text-center text-[#d10c56] md:text-[98px] text-[42px] m-0 p-0 leading-none '>{diasRestantes}</p>
                    <p style={{ fontFamily: 'Petrobras Sans Rg' }} className=' text-center md:text-left text-white md:text-[30px] text-[14px] m-0 p-0 leading-none md:w-[145px] w-[80px] break-words md:pt-[15px] pt-[5px] '>DIAS FALTANDO</p>
                </div>
                <div className="md:h-[150px] h-[80px] w-[2px] bg-white shrink-0"></div>
                <div className='w-fit flex-col'>
                    <p className=' text-center text-[#d10c56] md:text-[98px] text-[42px] m-0 p-0 leading-none '>{diasRestantes}</p>
                    <p style={{ fontFamily: 'Petrobras Sans Rg' }} className=' text-center md:text-left text-white md:text-[30px] text-[14px] m-0 p-0 leading-none md:w-[145px] w-[80px] break-words md:pt-[15px] pt-[5px] '>DIAS FALTANDO</p>
                </div>
                <div className="md:h-[150px] h-[80px] w-[2px] bg-white shrink-0"></div>
                <div className='w-fit flex-col'>
                    <p className=' text-center text-[#d10c56] md:text-[98px] text-[42px] m-0 p-0 leading-none '>{diasRestantes}</p>
                    <p style={{ fontFamily: 'Petrobras Sans Rg' }} className=' text-center md:text-left text-white md:text-[30px] text-[14px] m-0 p-0 leading-none md:w-[145px] w-[80px] break-words md:pt-[15px] pt-[5px] '>DIAS FALTANDO</p>
                </div>
                <div className="md:h-[150px] h-[80px] w-[2px] bg-white shrink-0"></div>
                <div className='w-fit flex-col'>
                    <p className=' text-center text-[#d10c56] md:text-[98px] text-[42px] m-0 p-0 leading-none '>{diasRestantes}</p>
                    <p style={{ fontFamily: 'Petrobras Sans Rg' }} className=' text-center md:text-left text-white md:text-[30px] text-[14px] m-0 p-0 leading-none md:w-[145px] w-[80px] break-words md:pt-[15px] pt-[5px] '>DIAS FALTANDO</p>
                </div>
            </div>

            {/* <div className='md:h-auto md:mt-[30px] mt-[12px] ml-[2%] mr-[2%] flex justify-between '>
                <div className='bg-gray-200 h-[110px] w-[125px] md:h-[280px] md:w-[380px] '></div>
                <div className='bg-gray-200 h-[110px] w-[125px] md:h-[280px] md:w-[380px] '></div>
                <div className='bg-gray-200 h-[110px] w-[125px] md:h-[280px] md:w-[380px] '></div>
            </div> */}
            <div className='md:h-auto md:mt-[30px] mt-[12px] ml-[2%] mr-[2%] flex flex-col justify-between '>
                <div className='h-fit w-full flex '>
                    <div style={{ backgroundImage: `url(${new URL('../assets/REGAP-9942.jpg', import.meta.url).href})` }} className='w-full h-fit rounded-2xl flex bg-cover bg-left bg-no-repeat mb-[5%] shadow-[2px_5px_12px_rgba(0,0,0,0.55)] '>
                        <div className=' bg-[linear-gradient(to_right,#D10C56_33%,transparent_38%)] rounded-2xl md:h-[300px] h-[105px] w-[100%] flex flex-col text-center content-center justify-center'>
                            <p className=' w-fit break-words text-left ml-[6%] md:text-[56px] text-[16px] leading-none '>Eventos</p>
                            <p className=' w-fit break-words text-left ml-[6%] md:text-[115px] text-[32px] leading-none '>Livres</p>
                        </div>
                    </div>
                </div>
                <div className='h-fit w-full flex-col flex-1 justify-between '>
                    <div className='flex flex-col w-full'>
                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] justify-start text-left '>Abertura SIPAT</p>
                                <p>Quadra do CETRE</p>
                                <p>Segunda-Feira</p>
                                <p>08:15</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] justify-start text-left '>Feira agroecológica</p>
                                <p>Saída do refeitório</p>
                                <p>Segunda-Feira</p>
                                <p>11:30</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] justify-start text-left '>Grupo musical Imusi ou Orquestra Ramacrisna</p>
                                <p>Hall do prédio administrativo</p>
                                <p>Terça-Feira</p>
                                <p>12:00</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 flex justify-between border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>Palestra Fatores Humanos e Teatro</p>
                                <p>Quadra do CETRE</p>
                                <p>Quarta-Feira</p>
                                <p>08:30</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-full'>
                        <div className='mb-[10px] items-center border-b-2 flex justify-between border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>Lançamento Ecoponto na Regap</p>
                                <p>#</p>
                                <p>Quarta-Feira</p>
                                <p>10:30</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 flex justify-between border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>Teatro (Game Show)</p>
                                <p>Saída do refeitório</p>
                                <p>Quarta-Feira</p>
                                <p>11:30</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 flex justify-between border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>Palestra - Josue Eduardo</p>
                                <p>Refeitório</p>
                                <p>Quarta-Feira</p>
                                <p>14:30</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 flex justify-between border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>Teatro ou Game Show C3</p>
                                <p>R-1</p>
                                <p>Quinta-Feira</p>
                                <p>08:00</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] justify-start text-left '>Grupo musical Imusi ou Orquestra Ramacrisna</p>
                                <p>Hall do prédio administrativo</p>
                                <p>Quinta-Feira</p>
                                <p>12:00</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] justify-start text-left '>Teatro ou Game Show </p>
                                <p>Área da GRAMO</p>
                                <p>Quinta-Feira</p>
                                <p>12:45</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] justify-start text-left '>Encerramento da SIPAT</p>
                                <p>Quadra do CETRE</p>
                                <p>Sexta-Feira</p>
                                <p>08:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:h-auto md:mt-[30px] mt-[12px] ml-[2%] mr-[2%] flex flex-col justify-between '>
                <div className='h-fit w-full flex '>
                    <div style={{ backgroundImage: `url(${new URL('../assets/REGAP-9942.jpg', import.meta.url).href})` }} className='w-full h-fit rounded-2xl flex bg-cover bg-[0%_20%] bg-no-repeat mb-[5%] shadow-[2px_5px_12px_rgba(0,0,0,0.55)] '>
                        <div className=' bg-[linear-gradient(to_left,#0e2245_40%,transparent_50%)] rounded-2xl md:h-[300px] h-[105px] w-[100%] flex flex-col text-center content-center justify-center text-white'>
                            <p className=' md:w-[425px] w-[120px] self-end break-words text-left mr-[4.5%] md:text-[56px] text-[16px] leading-none '>Eventos sob</p>
                            <p className=' w-fit self-end break-words text-right mr-[8%] md:text-[115px] text-[32px] leading-none '>Incrição</p>
                        </div>
                    </div>
                </div>
                <div className='h-fit w-full flex-col flex-1 justify-between '>
                    <div className='flex flex-col w-full'>
                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>Campeonato de Peteca</p>
                                <p>Quadra da Academia</p>
                                <p>Segunda, Terça, Quarta e Quinta-Feira</p>
                                <p>11:00</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>Campeonato de Basquete</p>
                                <p>Quadra SMS</p>
                                <p>Segunda, Terça, Quarta e Quinta-Feira</p>
                                <p>11:00</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>Campeonato de Tênis de Mesa</p>
                                <p>Prédio PM</p>
                                <p>Segunda, Terça, Quarta e Quinta-Feira</p>
                                <p>11:00</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>Campeonato de Totó</p>
                                <p>Prédio PM</p>
                                <p>Segunda, Terça, Quarta e Quinta-Feira</p>
                                <p>11:00</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>Campeonato de Xadrez</p>
                                <p>CIC</p>
                                <p>Segunda, Terça, Quarta e Quinta-Feira</p>
                                <p>11:00</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>Corrida</p>
                                <p>Porta do CETRE</p>
                                <p>Terça-Feira</p>
                                <p>08:30</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-full'>
                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>Yoga</p>
                                <p>Quadra do CETRE</p>
                                <p>Terça-Feira</p>
                                <p>10:00 e 11:00</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>Oficina de Marmita</p>
                                <p>Refeitório</p>
                                <p>Terça-Feira</p>
                                <p>14:00 e 15:00</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>Spinning</p>
                                <p>Hall do prédio administrativo</p>
                                <p>Quarta-Feira</p>
                                <p>11:00 e 12:00</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>Enduro</p>
                                <p>Porta do CETRE</p>
                                <p>Quinta-Feira</p>
                                <p>08:00</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>Plantio de Mudas</p>
                                <p>Quiosque do CETRE</p>
                                <p>Quinta-Feira</p>
                                <p>14:00 e 15:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' mr-[2%] ml-[2%] h-fit text-center flex justify-center items-center mt-[20px] '>
                <a href='https://forms.cloud.microsoft/r/w4bYSrte2W' className=' transition-transform duration-80 active:scale-96 text-white bg-[#0e2245] w-[350px] md:w-[600px] m-[5px] rounded-[15px] h-[45px] md:h-[65px] flex justify-center items-center text-[22px] md:text-[36px] shadow-[6px_8px_12px_rgba(0,0,0,0.65)] '>Clique aqui para se inscrever</a>
            </div>

        </main>
    );
}

export default Home;