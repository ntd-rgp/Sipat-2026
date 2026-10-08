function Footer() {
    return (
        <footer className=" *:text-white md:mt-[50px] mt-[20px] ">
            <div className="flex  justify-center m-[2%]">

                <div className="md:w-[800px] w-[265px] bg-[#d10c56] md:h-[180px] h-auto flex">
                    <p className="w-[155px] md:w-[400px] ml-[2%] text-[20.3px] md:text-5xl">Lorem Ipsun Dolor Sit Amet Vacum Metsaniba</p>

                    {/* <p className="text-[30px] md:text-[65px] self-end ml-auto mr-[5px] text-right font-[Petrobras Sans Rg] font-[700] text-black">NTD.</p> */}
                </div>

                <div className="min-h-[30px] md:w-[180px] w-[65px] ml-[2%] flex flex-col gap-2 text-center">
                    <p className="text-center text-[#d10c56] text-[8px] md:text-[22px] break-words font-[Petrobras Sans Rg] font-[700]">ORGANIZADORES </p>
                    <a href="#" className="text-black text-[7px] md:text-[18px] break-words font-[Petrobras Sans Rg] font-[700]">Dados dos inscritos</a>
                    <a href="#" className="text-black text-[7px] md:text-[18px] break-words font-[Petrobras Sans Rg] font-[700]">Dados dos inscritos</a>
                    <a href="#" className="text-black text-[7px] md:text-[18px] break-words font-[Petrobras Sans Rg] font-[700]">Dados dos inscritos</a>
                    <a href="#" className="text-black text-[7px] md:text-[18px] break-words font-[Petrobras Sans Rg] font-[700]">Dados dos inscritos</a>
                </div>

                <div className="min-h-[30px] md:w-[180px] w-[65px] ml-[2%] flex flex-col gap-2 text-center">
                    <p className="text-center text-[#d10c56] text-[8px] md:text-[22px] break-words font-[Petrobras Sans Rg] font-[700]">PARTICIPANTES</p>
                    <a href="#" className="text-black text-[7px] md:text-[18px] break-words font-[Petrobras Sans Rg] font-[700]">Dados dos inscritos</a>
                    <a href="#" className="text-black text-[7px] md:text-[18px] break-words font-[Petrobras Sans Rg] font-[700]">Dados dos inscritos</a>
                </div>

            </div>
        </footer>
    );
}

export default Footer;