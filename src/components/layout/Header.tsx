import React from "react";

export const Header = () => {
  return (
    <header className="bg-primary text-white p-4 shadow-md flex justify-between items-center">
      <h1 className="font-bold text-xl">Starter Pack</h1>
      <nav>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};
