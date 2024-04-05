import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center top-[14rem] inset-x-8">
        <h1 className="text-5xl text-white font-[500] font-['Outfit']">
          BgChanger by Danyal Moazzam
        </h1>
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 font-[500] font-['Helvetica']">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-3 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none text-white px-4 py-1 rounded-full"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none text-white px-4 py-1 rounded-full"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none text-white px-4 py-1 rounded-full"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none text-white px-4 py-1 rounded-full"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none text-black px-4 py-1 rounded-full"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none text-black px-4 py-1 rounded-full"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("olive")}
            className="outline-none text-white px-4 py-1 rounded-full"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
