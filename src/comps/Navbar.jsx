import React from "react";
import Logo from '../assets/logo.png';
import profile from '../assets/profile.png';
import cart from '../assets/cart.png';
import search from '../assets/search.png';
import { useNavigate } from "react-router-dom";
function Navbar()
{
    const navigate = useNavigate();
    return (
        <>
            <div className="w-full h-16 flex justify-between items-center px-5 py-5" id="navbar">
                <div onClick={(e)=>{
                        e.preventDefault();
                        navigate('/');
                    }} className="flex items-center cursor-pointer">
                    <img src={Logo}  className="w-10 h-full" alt="" />
                    <h1 className="text-2xl font-bold w-max mb-5 mt-5 ml-3" style={{ 'color': '#315ED2' }}>Singh Publication</h1>
                </div>
                <div className="flex items-center" >
                    <div className="rounded-3xl flex items-center p-3 mr-6" style={{'border':'1px solid #D1D1D1'}}>
                    <input type="text" className="focus:outline-none text-center" placeholder="Search Here"  />
                    <img className="w-6 cursor-pointer" src={search} alt="" />
                    </div>
                    
                    <div onClick={(e)=>{
                        e.preventDefault();
                        navigate('/profilesetting');
                    }} className="w-12 h-12 flex items-center justify-center rounded-full p-2 cursor-pointer" style={{'border':'1px solid #D1D1D1'}}>
                        <img className="w-5" src={profile} alt="" />
                    </div>
                    <div onClick={(e)=>{
                        e.preventDefault();
                        navigate('/cart');
                    }} className="w-12 h-12 ml-4 flex items-center justify-center rounded-full p-2 cursor-pointer" style={{'border':'1px solid #D1D1D1'}}>
                        <img className="w-5" src={cart} alt="" />
                    </div>
                    <div onClick={(e)=>{
                        e.preventDefault();
                        navigate('/wishlist');
                    }} className="w-12 h-12 ml-4 flex items-center justify-center rounded-full p-2 cursor-pointer" style={{'border':'1px solid #D1D1D1'}}>
                        <img className="w-5" src={cart} alt="" />
                    </div>
                    <div onClick={(e)=>{
                        e.preventDefault();
                        navigate('/accountsetting');
                    }} className="w-12 h-12 ml-4 flex items-center justify-center rounded-full p-2 cursor-pointer" style={{'border':'1px solid #D1D1D1'}}>
                        <img className="w-5" src={cart} alt="" />
                    </div>
                </div>
                </div>
        </>
    );
}

export default Navbar;