import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white p-4 text-center">
      &copy; {new Date().getFullYear()} Starter Pack. All rights reserved.
    </footer>
  );
};
