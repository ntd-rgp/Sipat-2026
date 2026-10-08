import { Link } from 'react-router-dom';
import logo from '../assets/SIPAT_logo.png';
function Header() {
  const linkClass =
  'whitespace-nowrap px-2 text-[12px] font-bold text-black no-underline sm:px-3 md:text-[20px]';
  return (
    <header className="w-full overflow-x-auto font-[Petrobras Sans Rg]">
      <nav className="grid min-w-[320px] grid-cols-[1fr_auto_1fr] items-center gap-1 px-1 py-2 sm:gap-2 sm:px-3">
        {/* Dois links à esquerda */}
        <div className="flex justify-end gap-1 sm:gap-2 text-[Petrobras Sans Rg]">
          <Link className={linkClass} to="/">
            Home
          </Link>

          <Link className={linkClass} to="/programacao">
            Programação
          </Link>
        </div>

        {/* Logo no centro */}
        <img
          className="h-8 w-[20vw] min-w-10 max-w-16 object-contain sm:h-11 sm:w-auto"
          src={logo}
          alt="Logo SIPAT"
        />

        {/* Dois links à direita */}
        <div className="flex gap-1 sm:gap-2">
          <Link className={linkClass} to="/sorteio">
            Sorteio
          </Link>

          <Link className={linkClass} to="/organizacao">
            Organização
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;