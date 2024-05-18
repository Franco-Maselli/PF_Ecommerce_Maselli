import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="bg-[#F6F5FF] h-screen">
    <h2 className="flex justify-center text-black font-bold text-2xl mb-5 ">404 Not Found</h2>
    <div className="flex flex-col justify-center items-center bg-[#FFFFFF]">
        <img
        className="h-auto max-w-lg rounded-lg mt-10"
        src="https://png.pngtree.com/thumb_back/fh260/background/20220128/pngtree-internet-network-warning-404-error-page-or-file-not-found-for-image_984725.jpg"
        alt="error 404"
        />
        <Link className="btn-f text-black font-bold rounded-lg mx-auto px-3 py-3" to="/">Inicio</Link>
    </div>
    </div>
  );
};

export default PageNotFound;
