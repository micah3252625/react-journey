import ListBody from "./ListBody";

const MainBody = () => {
  return (
    <main className="h-[100vh] w-full relative bg-react-logo bg-no-repeat bg-[size:30%] bg-slate-900 bg-right-bottom">
      <div className="absolute inset-0  bg-no-repeat"></div>
      <div className="relative z-10">
        <h1 className="text-5xl text-white font-bold text-center p-12">
          Fun facts about React
        </h1>
        <ListBody />
      </div>
    </main>
  );
};

export default MainBody;
