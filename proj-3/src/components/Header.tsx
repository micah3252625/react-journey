import logo from "/chef-hat.svg";

const Header = () => {
    return (
        <header className="border h-[100px] flex items-center justify-center">
            <nav className="flex items-center gap-3 ">
                <img src={logo} alt="" className="h-10 w-10" />
                <h1 className="font-bold tracking-wider text-4xl">Chef Claude</h1>
            </nav>
        </header>
    )
}

export default Header