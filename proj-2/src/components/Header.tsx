import { Globe2 } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-red-500 border flex items-center justify-center gap-2 rounded-tr-lg rounded-tl-lg p-7">
      <Globe2 className="text-white" />
      <h1 className="font-semibold text-white">My Travel Journal</h1>
    </header>
  );
};

export default Header;
