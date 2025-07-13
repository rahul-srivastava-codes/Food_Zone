import Foodzone from "./Images/logo.svg";
import Content from "./Content";
import { useState } from "react";

const data = ["All", "Breakfast", "Lunch", "Dinner"];

export default function Navigation() {
  const [food, setFood] = useState("All");
  return (
    <div>
      <div className="flex items-center justify-between px-5 py-5">
        <div>
          <img src={Foodzone} alt="Image Loading..." />
        </div>
        <div className="bg-red-400 rounded-lg px-2 py-2 ">
          <form action="">
            <div className="flex flex-col relative">
              <label
                htmlFor=""
                className="absolute left-1.5 -top-2 bg-red-400 text-xs"
              >
                Search Bar
              </label>

              <input type="text" className="border-2" />
            </div>
          </form>
        </div>
      </div>
      {console.log(food)}
      <div>
        <Items Food={setFood}></Items>
      </div>
      {console.log(food)}
      <Content Food={food}></Content>
    </div>
  );
}

function Items({ Food }) {
  return (
    <div className="flex items-center justify-center gap-2.5">
      {data.map((item, index) => (
        <button
          key={index}
          className="px-2 py-2 bg-red-500 text-sm rounded-lg  cursor-grab"
          onClick={() => Food(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
