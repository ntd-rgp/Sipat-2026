const fundo = new URL('../assets/REGAP-9942.jpg', import.meta.url).href;

const diasDaSemana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];

type Atividade = {
    titulo: string;
    local: string;
    datas: string[]; // 'DD/MM' (novembro de 2026)
    horario: string;
    descricao?: string;
};

const oficina = (data: string): Atividade => ({ titulo: 'Oficina: Marmita Saudável', local: 'CIC', datas: [data], horario: '15:00', descricao: 'Aihale Thiago' });
const massagem = (data: string): Atividade => ({ titulo: 'Quick Massage', local: "CCL's e CIC", datas: [data], horario: '08:00 às 16:00' });
const teatro = (data: string): Atividade => ({ titulo: 'Teatro', local: 'CIC', datas: [data], horario: '14:00' });
const campeonato = (d1: string, d2: string): Atividade => ({ titulo: 'Sinuca e Xadrez (Campeonato)', local: 'CIC', datas: [d1, d2], horario: '21:00' });
const pizza = (data: string): Atividade => ({ titulo: 'Pizza para o turno', local: "CCL's e CIC", datas: [data], horario: '21:00', descricao: 'Bella Pizza – Betim' });
const palestra = (data: string): Atividade => ({ titulo: 'Palestra Fatores Humanos (Safety Day turno)', local: '#', datas: [data], horario: '21:15', descricao: 'Carolina Cruz da Silveira Moreira' });

const grupos: { nome: string; atividades: Atividade[] }[] = [
    { nome: 'A', atividades: [massagem('11/11'), oficina('11/11'), campeonato('12/11', '13/11'), pizza('12/11'), palestra('23/11')] },
    { nome: 'B', atividades: [teatro('12/11'), massagem('13/11'), oficina('13/11'), campeonato('14/11', '15/11'), pizza('14/11'), palestra('24/11')] },
    { nome: 'C', atividades: [oficina('14/11'), campeonato('16/11', '17/11'), pizza('16/11'), massagem('24/11'), palestra('26/11')] },
    { nome: 'D', atividades: [massagem('06/11'), oficina('06/11'), campeonato('18/11', '19/11'), pizza('18/11'), palestra('28/11')] },
    { nome: 'E', atividades: [massagem('09/11'), oficina('09/11'), campeonato('10/11', '11/11'), pizza('10/11'), palestra('20/11')] },
];

function diaDaSemana(data: string) {
    const [dia, mes] = data.split('/').map(Number);
    return diasDaSemana[new Date(2026, mes - 1, dia).getDay()];
}

function formatarDatas(datas: string[]) {
    return datas.map((data) => `${data} – ${diaDaSemana(data)}`).join(' e ');
}

function Turno() {
    return (
        <main className="flex-col w-full">
            {grupos.map((grupo, i) => {
                const azul = i % 2 === 1;
                return (
                    <div key={grupo.nome} className='md:h-auto md:mt-[30px] mt-[12px] ml-[2%] mr-[2%] flex flex-col justify-between '>
                        <div className='h-fit w-full flex '>
                            <div style={{ backgroundImage: `url(${fundo})` }} className={`w-full h-fit rounded-2xl flex bg-cover ${azul ? 'bg-[0%_20%]' : 'bg-left'} bg-no-repeat mb-[5%] shadow-[2px_5px_12px_rgba(0,0,0,0.55)] `}>
                                {azul ? (
                                    <div className=' bg-[linear-gradient(to_left,#0e2245_40%,transparent_50%)] rounded-2xl md:h-[300px] h-[105px] w-[100%] flex flex-col text-center content-center justify-center text-white'>
                                        <p className=' w-fit self-end break-words text-right mr-[8%] md:text-[56px] text-[16px] leading-none '>Turno</p>
                                        <p className=' w-fit self-end break-words text-right mr-[8%] md:text-[115px] text-[32px] leading-none '>Grupo {grupo.nome}</p>
                                    </div>
                                ) : (
                                    <div className=' bg-[linear-gradient(to_right,#D10C56_45%,transparent_55%)] rounded-2xl md:h-[300px] h-[105px] w-[100%] flex flex-col text-center content-center justify-center'>
                                        <p className=' w-fit break-words text-left ml-[6%] md:text-[56px] text-[16px] leading-none '>Turno</p>
                                        <p className=' w-fit break-words text-left ml-[6%] md:text-[115px] text-[32px] leading-none '>Grupo {grupo.nome}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='flex flex-col w-full'>
                            {grupo.atividades.map((atividade) => (
                                <div key={atividade.titulo} className='mb-[10px] items-center border-b-2 border-gray-300 min-h-[70px] md:min-h-[150px] md:py-[12px] w-full flex justify-between '>
                                    <div className=' w-full flex flex-col justify-center items-start pl-[5px] text-left text-[12px] md:text-[24px] leading-3.5 md:leading-tight '>
                                        <p className='font-bold text-[#D10C56] text-[14px] md:text-[32px] mb-[2px] md:mb-[6px] '>{atividade.titulo}</p>
                                        <p>{atividade.local}</p>
                                        <p>{formatarDatas(atividade.datas)}</p>
                                        <p>{atividade.horario}</p>
                                        {atividade.descricao && <p className='mt-[2px] md:mt-[6px] text-gray-600'>{atividade.descricao}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </main>
    );
}

export default Turno;
