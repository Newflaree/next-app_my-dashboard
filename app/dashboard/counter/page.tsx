"use client";
import { Metadata } from "next";
import { useState } from "react";

/*
export const metadata: Metadata = {
  title: "Counter Page",
  description: "Un simple contador",
};
 * */

export default function CounterPage() {
  const [count, setCount] = useState(5);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <span className="text-9xl"> {count} </span>
      <div className="flex">
        <button
          onClick={() => setCount(count + 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
      </div>
    </div>
  );
}
