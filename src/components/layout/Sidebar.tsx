import React from "react";

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-neutral/10 p-4 shadow-md hidden md:block">
      <ul className="flex flex-col gap-4 text-neutral">
        <li>Dashboard</li>
        <li>Courses</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
};
