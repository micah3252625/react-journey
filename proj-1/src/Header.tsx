import logo from "./assets/react.svg";

const Header = () => {
  return (
    <header className="flex items-center h-30 bg-slate-950 py-8 px-6">
        <nav className="flex items-center gap-3">
            <img src={logo} alt="react-logo" width={50} className="h-full"/>
            <h1 className="text-cyan-200 font-bold text-4xl">React Facts</h1>
        </nav>
    </header>
  )
}

export default Header;