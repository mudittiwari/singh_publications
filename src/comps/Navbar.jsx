import React from "react";
import Logo from '../assets/logo.png';
import profile from '../assets/profile.png';
import cart from '../assets/cart.png';
import search from '../assets/search.png';
function Navbar()
{
    return (
        <>
            <div className="w-full h-16 flex justify-between items-center px-5 py-5" id="navbar">
                <div className="flex items-center">
                    <img src={Logo} className="w-10 h-full" alt="" />
                    <h1 className="text-2xl font-bold w-max mb-5 mt-5 ml-3" style={{ 'color': '#315ED2' }}>Singh Publication</h1>
                </div>
                <div className="flex items-center" >
                    <div className="rounded-3xl flex items-center p-3 mr-8" style={{'border':'1px solid #D1D1D1'}}>
                    <input type="text" className="focus:outline-none text-center" placeholder="Search Here"  />
                    <img className="w-6 cursor-pointer" src={search} alt="" />
                    </div>
                    
                    <div className="w-max h-max rounded-full p-2" style={{'border':'1px solid #D1D1D1'}}>
                        <img className="w-8" src={profile} alt="" />
                    </div>
                    <div className="w-max h-max rounded-full p-2 ml-3" style={{'border':'1px solid #D1D1D1'}}>
                        <img className="w-8" src={cart} alt="" />
                    </div>
                </div>
                </div>
        </>
    );
}

export default Navbar;