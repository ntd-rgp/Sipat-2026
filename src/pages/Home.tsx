import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import imagemLateral from '../assets/imagemlateral.png';
import logoSipat from '../assets/SIPAT.svg';
import mapaCorrida from '../assets/mapa-corrida.svg';
import percursoCorrida from '../assets/percurso-corrida.mp4';
import chamadaDenison from '../assets/chamada-denison.mp4';
import chamadaPeralta from '../assets/chamada-peralta.mp4';
import chamadaTeams from '../assets/chamada-teams.mp4';
import videoImg7111 from '../assets/IMG_7111.mp4';
import VideoCarousel from '../components/VideoCarousel';

const dataInicio = new Date(2026, 10, 9);

function calcularDias() {
    const agora = new Date();
    const hoje = new Date(
        agora.getFullYear(),
        agora.getMonth(),
        agora.getDate()
    );
    const diferencaEmMilissegundos = dataInicio.getTime() - hoje.getTime();

    const dias = Math.ceil(
        diferencaEmMilissegundos / (1000 * 60 * 60 * 24)
    );

    return Math.max(0, dias);
}

function Home() {
    // Calcula já na primeira renderização para não piscar "Já começou"
    const [diasRestantes, setdiasRestantes] = useState(calcularDias);
    const jaComecou = diasRestantes === 0;
    const location = useLocation();
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        const intervalo = setInterval(() => setdiasRestantes(calcularDias()), 1000 * 60 * 60);

        return () => clearInterval(intervalo);
    }, []);

    // Toca o vídeo do percurso quando ele aparece na tela e pausa quando sai
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        const observer = new IntersectionObserver(([entrada]) => {
            if (entrada.isIntersecting) {
                video.play().catch(() => {});
            } else {
                video.pause();
            }
        }, { threshold: 0.5 });
        observer.observe(video);
        return () => observer.disconnect();
    }, []);

    // Rola até a seção indicada no link (ex.: "Programação" no header)
    useEffect(() => {
        if (location.hash) {
            document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location.key, location.hash]);
    return (
        <main className="flex-col w-full">
            <div className='flex'>

                <div className="flex-1">
                    <img
                        src={logoSipat}
                        alt="Logo SIPAT"
                        className="h-auto w-[265px] md:w-[900px] ml-[2%]" />
                    <h1 className="font-[700] md:text-[36px] text-[12px] mt-[12px] ml-[4%]">REFINARIA GABRIEL PASSOS</h1>
                    <h1 className="font-[700] md:text-[36px] text-[12px] text-[#d10c56] ml-[4%]">SEGURANÇA COMEÇA EM VOCÊ</h1>
                    <p className='w-[60%] md:mt-[30px] mt-[12px] md:text-[24px] text-[12px] ml-[4%]'>Uma semana para superar limites, enxergar os riscos do dia a dia e cuidar do equilíbrio entre trabalho, saúde e bem-estar.</p>
                    <p className='w-fit bg-[#d10c56] pl-[2%] pr-[2%] text-white md:mt-[30px] mt-[12px] md:text-[24px] text-[12px] ml-[4%]'>Superação, atenção aos riscos e vida equilibrada.</p>
                </div>

                <div className="ml-auto shrink-0">
                    <img
                        src={imagemLateral}
                        alt="Imagem lateral"
                        className="h-auto w-[90px] md:w-[260px]" />
                </div>
            </div>
            <div className='md:mt-[30px] mt-[20px] ml-[2%] mr-[2%]'>
                <VideoCarousel videos={[
                    { src: chamadaDenison, label: 'Chamada Denison Mattos' },
                    { src: chamadaPeralta, label: 'Chamada Flávio Peralta' },
                    { src: chamadaTeams, label: 'Vídeo Teams' },
                    { src: videoImg7111, label: 'Vídeo SIPAT' },
                ]} />
            </div>

            <div className='md:min-h-[200px] md:mt-[30px] h-[100px] md:h-auto mt-[20px] ml-[2%] mr-[2%] bg-[#0e2245] flex justify-evenly items-center md:gap-[24px] lg:gap-[40px] gap-0 rounded-[16px] px-[4px] md:px-[40px] lg:px-[60px] md:py-[28px]'>
                <div className='flex-1 flex flex-col items-center'>
                    {jaComecou ? (
                        <p className='text-center text-[#d10c56] md:text-[40px] lg:text-[48px] xl:text-[56px] text-[18px] m-0 p-0 leading-none'>JÁ<br />COMEÇOU</p>
                    ) : (
                        <>
                            <p className='text-center text-[#d10c56] md:text-[60px] lg:text-[76px] xl:text-[90px] text-[28px] m-0 p-0 leading-none'>{diasRestantes}</p>
                            <p style={{ fontFamily: 'Petrobras Sans Rg' }} className='text-center text-white md:text-[20px] lg:text-[24px] xl:text-[28px] text-[9px] m-0 p-0 leading-tight md:pt-[12px] pt-[4px]'>{diasRestantes === 1 ? 'DIA FALTANDO' : 'DIAS FALTANDO'}</p>
                        </>
                    )}
                </div>
                <div className="md:h-[120px] lg:h-[140px] h-[60px] w-[1px] md:w-[2px] bg-white/70 shrink-0"></div>
                <div className='flex-1 flex flex-col items-center'>
                    <p className='text-center text-[#d10c56] md:text-[60px] lg:text-[76px] xl:text-[90px] text-[28px] m-0 p-0 leading-none'>+20</p>
                    <p style={{ fontFamily: 'Petrobras Sans Rg' }} className='text-center text-white md:text-[20px] lg:text-[24px] xl:text-[28px] text-[9px] m-0 p-0 leading-tight md:pt-[12px] pt-[4px]'>ATIVIDADES</p>
                </div>
                <div className="md:h-[120px] lg:h-[140px] h-[60px] w-[1px] md:w-[2px] bg-white/70 shrink-0"></div>
                <div className='flex-1 flex flex-col items-center'>
                    <p className='text-center text-[#d10c56] md:text-[60px] lg:text-[76px] xl:text-[90px] text-[28px] m-0 p-0 leading-none'>6</p>
                    <p style={{ fontFamily: 'Petrobras Sans Rg' }} className='text-center text-white md:text-[20px] lg:text-[24px] xl:text-[28px] text-[9px] m-0 p-0 leading-tight md:pt-[12px] pt-[4px]'>PALESTRANTES</p>
                </div>
                <div className="md:h-[120px] lg:h-[140px] h-[60px] w-[1px] md:w-[2px] bg-white/70 shrink-0"></div>
                <div className='flex-1 flex flex-col items-center'>
                    <p className='text-center text-[#d10c56] md:text-[60px] lg:text-[76px] xl:text-[90px] text-[28px] m-0 p-0 leading-none'>+4000</p>
                    <p style={{ fontFamily: 'Petrobras Sans Rg' }} className='text-center text-white md:text-[20px] lg:text-[24px] xl:text-[28px] text-[9px] m-0 p-0 leading-tight md:pt-[12px] pt-[4px]'>PARTICIPANTES</p>
                </div>
            </div>

            {/* <div className='md:h-auto md:mt-[30px] mt-[12px] ml-[2%] mr-[2%] flex justify-between '>
                <div className='bg-gray-200 h-[110px] w-[125px] md:h-[280px] md:w-[380px] '></div>
                <div className='bg-gray-200 h-[110px] w-[125px] md:h-[280px] md:w-[380px] '></div>
                <div className='bg-gray-200 h-[110px] w-[125px] md:h-[280px] md:w-[380px] '></div>
            </div> */}
            <div id='programacao' className='scroll-mt-[10px] md:h-auto md:mt-[30px] mt-[12px] ml-[2%] mr-[2%] flex flex-col justify-between '>
                <div className='h-fit w-full flex '>
                    <div style={{ backgroundImage: `url(${new URL('../assets/REGAP-9942.jpg', import.meta.url).href})` }} className='w-full h-fit rounded-2xl flex bg-cover bg-left bg-no-repeat mb-[5%] shadow-[2px_5px_12px_rgba(0,0,0,0.55)] '>
                        <div className=' bg-[linear-gradient(to_right,#D10C56_33%,transparent_38%)] rounded-2xl md:h-[300px] h-[105px] w-[100%] flex flex-col text-center content-center justify-center'>
                            <p className=' w-fit break-words text-left ml-[6%] md:text-[56px] text-[16px] leading-none text-white '>Eventos</p>
                            <p className=' w-fit break-words text-left ml-[6%] md:text-[115px] text-[32px] leading-none text-white '>Livres</p>
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
                                <p>7h45</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>Palestra - Denison Mattos</p>
                                <p>Quadra do CETRE</p>
                                <p>Segunda-Feira</p>
                                <p>8h45</p>
                                <p className='mt-[2px] md:mt-[6px] text-gray-600'>Administrador e professor, fala voltada para o equilíbrio na vida e atenção</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>Palestra - Fabi do Vôlei</p>
                                <p>Quadra do CETRE</p>
                                <p>Segunda-Feira</p>
                                <p>9h40</p>
                                <p className='mt-[2px] md:mt-[6px] text-gray-600'>Ex-atleta, bicampeã olímpica, comentarista e apresentadora no SporTV.</p>
                            </div>
                        </div>

                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] justify-start text-left '>Feira agroecológica</p>
                                <p>Saída do refeitório</p>
                                <p>Segunda-Feira</p>
                                <p>11h30</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] justify-start text-left '>Grupo musical Imusi ou Orquestra Ramacrisna</p>
                                <p>Hall do prédio administrativo</p>
                                <p>Terça-Feira</p>
                                <p>12h</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 flex justify-between border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>Palestra - Josue Maia França</p>
                                <p>Quadra do CETRE</p>
                                <p>Quarta-Feira</p>
                                <p>8h30</p>
                                <p className='mt-[2px] md:mt-[6px] text-gray-600'>Colega da Petrobras, fala sobre fatores humanos</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>Teatro Educa Vida</p>
                                <p>Quadra do CETRE</p>
                                <p>Quarta-Feira</p>
                                <p>9h30</p>
                                <p className='mt-[2px] md:mt-[6px] text-gray-600'>Encenações e interações com a força de trabalho, com temas voltados à segurança e integridade</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-full'>
                        <div className='mb-[10px] items-center border-b-2 flex justify-between border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>Lançamento Ecoponto na Regap</p>
                                <p>#</p>
                                <p>Quarta-Feira</p>
                                <p>10h30</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 flex justify-between border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>Game Show</p>
                                <p>Saída do refeitório</p>
                                <p>Quarta-Feira</p>
                                <p>11h30</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 flex justify-between border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>Palestra - Josue Maia França</p>
                                <p>Refeitório</p>
                                <p>Quarta-Feira</p>
                                <p>14h30</p>
                                <p className='mt-[2px] md:mt-[6px] text-gray-600'>Colega da Petrobras, fala sobre fatores humanos</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 flex justify-between border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>Game Show C3</p>
                                <p>R-1</p>
                                <p>Quinta-Feira</p>
                                <p>8h</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>Dinâmica da movimentação de carga</p>
                                <p>Saída do refeitório</p>
                                <p>Quinta-Feira</p>
                                <p>11h30</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] justify-start text-left '>Grupo musical Imusi ou Orquestra Ramacrisna</p>
                                <p>Hall do prédio administrativo</p>
                                <p>Quinta-Feira</p>
                                <p>12h</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] justify-start text-left '>Game Show – Gramo</p>
                                <p>Área da GRAMO</p>
                                <p>Quinta-Feira</p>
                                <p>12h45</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] justify-start text-left '>Encerramento da SIPAT</p>
                                <p>Quadra do CETRE</p>
                                <p>Sexta-Feira</p>
                                <p>7h45</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>Palestra - Rodrigo Antunes</p>
                                <p>Quadra do CETRE</p>
                                <p>Sexta-Feira</p>
                                <p>8h45</p>
                                <p className='mt-[2px] md:mt-[6px] text-gray-600'>Tec Segurança Regap - abordará o tema de movimentação de cargas</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>Palestra - Flávio Peralta</p>
                                <p>Quadra do CETRE</p>
                                <p>Sexta-Feira</p>
                                <p>9h30</p>
                                <p className='mt-[2px] md:mt-[6px] text-gray-600'>Sobrevivente de uma descarga de 13,8kV; fala sobre impactos na vida, riscos, superação</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:h-auto md:mt-[30px] mt-[12px] ml-[2%] mr-[2%] flex flex-col justify-between '>
                <div className='h-fit w-full flex '>
                    <div style={{ backgroundImage: `url(${new URL('../assets/REGAP-9942.jpg', import.meta.url).href})` }} className='w-full h-fit rounded-2xl flex bg-cover bg-[0%_20%] bg-no-repeat mb-[5%] shadow-[2px_5px_12px_rgba(0,0,0,0.55)] '>
                        <div className=' bg-[linear-gradient(to_left,#0e2245_40%,transparent_50%)] rounded-2xl md:h-[300px] h-[105px] w-[100%] flex flex-col text-center content-center justify-center text-white'>
                            <div className='self-end mr-[2%] text-left'>
                                <p className='md:text-[56px] text-[16px] leading-none'>Eventos sob</p>
                                <p className='md:text-[115px] text-[32px] leading-none'>Inscrição</p>
                            </div>
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
                                <p>11h</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>Campeonato de Basquete</p>
                                <p>Quadra SMS</p>
                                <p>Segunda, Terça, Quarta e Quinta-Feira</p>
                                <p>11h</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>Campeonato de Tênis de Mesa</p>
                                <p>Prédio PM</p>
                                <p>Segunda, Terça, Quarta e Quinta-Feira</p>
                                <p>11h</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>Campeonato de Totó</p>
                                <p>Prédio PM</p>
                                <p>Segunda, Terça, Quarta e Quinta-Feira</p>
                                <p>11h</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>Campeonato de Xadrez</p>
                                <p>CIC</p>
                                <p>Segunda, Terça, Quarta e Quinta-Feira</p>
                                <p>11h</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>Corrida</p>
                                <p>Porta do CETRE</p>
                                <p>Terça-Feira</p>
                                <p>8h</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-full'>
                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>Yoga</p>
                                <p>Quadra do CETRE</p>
                                <p>Terça-Feira</p>
                                <p>10h e 11h</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>Oficina de Marmita</p>
                                <p>Refeitório</p>
                                <p>Terça-Feira</p>
                                <p>14h e 15h</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>Spinning</p>
                                <p>Hall do prédio administrativo</p>
                                <p>Quarta-Feira</p>
                                <p>11h e 12h</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>Enduro</p>
                                <p>Porta do CETRE</p>
                                <p>Quinta-Feira</p>
                                <p>8h</p>
                            </div>
                        </div>
                        <div className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                            <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>Plantio de Mudas</p>
                                <p>Quiosque do CETRE</p>
                                <p>Quinta-Feira</p>
                                <p>14h e 15h</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' mr-[2%] ml-[2%] h-fit text-center flex justify-center items-center mt-[20px] '>
                <a href='https://forms.cloud.microsoft/r/w4bYSrte2W' className=' transition-transform duration-80 active:scale-96 text-white bg-[#0e2245] w-[350px] md:w-[600px] m-[5px] rounded-[15px] h-[45px] md:h-[65px] flex justify-center items-center text-[22px] md:text-[36px] shadow-[6px_8px_12px_rgba(0,0,0,0.65)] '>Clique aqui para se inscrever</a>
            </div>
            <h2 className='mr-[2%] ml-[2%] mt-[20px] md:mt-[40px] text-center font-bold text-[#D10C56] text-[22px] md:text-[48px] leading-tight'>Mapa da Corrida Sipat 2026</h2>
            <div className=' mr-[2%] ml-[2%] mt-[10px] md:mt-[20px] flex flex-col md:flex-row justify-center items-center gap-[8px] '>
                {/* Celular: mapa na horizontal, mesma largura do vídeo, ambos com a margem de 2% do container. Telas maiores: mapa e vídeo com a mesma altura; a largura de cada um vem da própria proporção (mapa girado 510 x 1374, vídeo 720 x 1024) e a imagem gira -90° dentro da caixa */}
                <div className="relative w-full md:aspect-[510/1374] md:h-[600px] lg:h-[720px] md:w-auto shrink-0">
                    <img
                        src={mapaCorrida}
                        alt="Mapa da corrida SIPAT 2026"
                        loading="lazy"
                        className="block h-auto w-full md:absolute md:left-1/2 md:top-1/2 md:w-[269.4%] md:max-w-none md:-translate-x-1/2 md:-translate-y-1/2 md:-rotate-90 rounded-2xl shadow-[2px_5px_12px_rgba(0,0,0,0.55)]" />
                </div>
                <video
                    ref={videoRef}
                    src={percursoCorrida}
                    controls
                    muted
                    playsInline
                    preload="metadata"
                    className="h-auto w-full md:aspect-[720/1024] md:h-[600px] lg:h-[720px] md:w-auto min-w-0 object-contain rounded-2xl shadow-[2px_5px_12px_rgba(0,0,0,0.55)]" />
            </div>

        </main>
    );
}

export default Home;