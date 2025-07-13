import { useEffect, useState } from "react";
import BG from "./Images/bg.png";

function Content() {
  const [serverUrl] = useState("http://localhost:3000");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(serverUrl);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [serverUrl]);

  return (
    <div
      style={{
        backgroundImage: `url(${BG})`,
      }}
      className="p-4 h-screen mt-2"
    >
      <h1 className="text-xl font-bold mb-2 text-center">🍽️ Food Items</h1>
      <div className="flex items-center justify-between gap-4 ">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-600 opacity-60 rounded-xl shadow-lg hover:scale-102 transition-transform"
          >
            <img
              src={`http://localhost:3000${item.image}`}
              alt={item.name}
              className="w-5xl h-24 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-black text-sm mb-3">{item.text}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">₹{item.price}</span>
                <span className="px-3 py-1 bg-zinc-200 rounded-full text-sm capitalize">
                  {item.type}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
