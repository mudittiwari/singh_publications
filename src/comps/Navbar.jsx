import React from "react";
import Logo from '../assets/logo.png';
import profile from '../assets/profile.png';
import cart from '../assets/cart.png';
import { AccountBox } from "@mui/icons-material";
import search from '../assets/search.png';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Logout } from "@mui/icons-material";
import { Favorite } from "@mui/icons-material";
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import app from '../Firebase';
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
// import Drawer from "@mui/material";
import { Menu } from "@mui/icons-material";
import { Box } from "@mui/material";
function Navbar() {
    const navigate = useNavigate();
    const auth = getAuth(app);
    const [state, setState] = useState({
        // top: false,
        left: false,
        // bottom: false,
        // right: false,
    });
    const list = (anchor) => (
        <Box className="p-3 h-full overflow-hidden " style={{ 'backgroundColor': 'white' }}
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
        >



            <div onClick={(e) => {
                e.preventDefault();
                navigate('/');
            }} className="flex items-center cursor-pointer">
                <img src={Logo} className="w-10 h-full" alt="" />
                <h1 className="text-xl font-bold w-max mb-5 mt-5 ml-3" style={{ 'color': '#315ED2' }}>Singh Publication</h1>
            </div>
            <ul className="flex flex-col items-end">


                <li className="w-56 py-2 px-2 rounded" >
                    <Box onClick={toggleDrawer(anchor, false)}>
                        <Link className="no-underline text-black mx-2 font-semibold" to="/cart">Cart</Link>
                    </Box>
                </li>

                <li className="w-56 py-2 px-2 rounded" >
                    <Box onClick={toggleDrawer(anchor, false)}>
                        <Link className="no-underline text-black mx-2 font-semibold" to="/wishlist">Wishlist</Link>
                    </Box>
                </li>
                <li className="w-56 py-2 px-2 rounded" >
                    <Link className="no-underline text-black mx-2 font-semibold" to="/accountsetting">Account Settings</Link>
                </li>
                <li className="w-56 py-2 px-2 rounded" >
                    <Box onClick={toggleDrawer(anchor, false)}>
                        <Link className="no-underline text-black mx-2 font-semibold" to="/profilesetting">Profile Settings</Link>
                    </Box>
                </li>
                <li className="w-56 py-2 px-2 rounded" >
                    <Box onClick={toggleDrawer(anchor, false)}>
                        <h1 className="no-underline text-black mx-2 font-semibold" onClick={(e)=>{
                            e.preventDefault();
                            localStorage.removeItem("pubuser");
                            auth.signOut();
                            navigate('/');
                        }}>Logout</h1>
                    </Box>
                </li>

            </ul>
        </Box>
    );

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    
    return (
        <>
            <div className="md:hidden block navbar">
                {['left'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        {/* <Button className='text-white mx-5 text-left w-20' onClick={toggleDrawer(anchor, true)}>Filters</Button> */}
                        <div className='md:hidden lg:hidden xl:hidden w-full flex items-center justify-between 2xl:hidden' >
                            <div className="flex items-center">
                                <Menu className='text-black mx-5 mt-0' onClick={toggleDrawer(anchor, true)} />

                            </div>
                            <div className="rounded-3xl flex items-center p-3 mr-0 mt-2 mb-2" style={{ 'border': '1px solid #D1D1D1' }}>
                                <input type="text" className="focus:outline-none text-center w-52" placeholder="Search Here" />
                                <img className="w-6 cursor-pointer" src={search} alt="" />
                            </div>

                            <div className="flex items-center">
                                <Link to="/"><img src={Logo} className="w-14 p-3 mt-1"></img></Link>
                            </div>
                        </div>
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
            </div>
            <div className="hidden md:flex w-full h-16 justify-between items-center px-5 py-5 navbar" >
                <div onClick={(e) => {
                    e.preventDefault();
                    navigate('/');
                }} className="flex items-center cursor-pointer">
                    <img src={Logo} className="w-10 h-full" alt="" />
                    <h1 className="text-2xl font-bold w-max mb-5 mt-5 ml-3" style={{ 'color': '#315ED2' }}>Singh Publication</h1>
                </div>
                <div className="flex items-center" >
                    <div className="rounded-3xl flex items-center p-3 mr-6" style={{ 'border': '1px solid #D1D1D1' }}>
                        <input type="text" className="focus:outline-none text-center" placeholder="Search Here" />
                        <img className="w-6 cursor-pointer" src={search} alt="" />
                    </div>

                    <div onClick={(e) => {
                        e.preventDefault();
                        navigate('/profilesetting');
                    }} className="w-12 h-12 flex items-center justify-center rounded-full p-2 cursor-pointer" style={{ 'border': '1px solid #D1D1D1' }}>
                        <img className="w-5" src={profile} alt="" />
                    </div>
                    <div onClick={(e) => {
                        e.preventDefault();
                        navigate('/cart');
                    }} className="w-12 h-12 ml-4 flex items-center justify-center rounded-full p-2 cursor-pointer" style={{ 'border': '1px solid #D1D1D1' }}>
                        <img className="w-5" src={cart} alt="" />
                    </div>
                    <div onClick={(e) => {
                        e.preventDefault();
                        navigate('/wishlist');
                    }} className="w-12 h-12 ml-4 flex items-center justify-center rounded-full p-2 cursor-pointer" style={{ 'border': '1px solid #D1D1D1' }}>
                        <Favorite style={{ 'color': '#315ED2' }} className="w-5" alt="" />
                    </div>
                    <div onClick={(e) => {
                        e.preventDefault();
                        navigate('/accountsetting');
                    }} className="w-12 h-12 ml-4 flex items-center justify-center rounded-full p-2 cursor-pointer" style={{ 'border': '1px solid #D1D1D1' }}>
                        <AccountBox style={{ 'color': '#315ED2' }} className="w-5" alt="" />
                    </div>
                    <div onClick={(e) => {
                        e.preventDefault();
                        localStorage.removeItem("pubuser");
                        auth.signOut();
                        navigate('/');
                    }} className="w-12 h-12 ml-4 flex items-center justify-center rounded-full p-2 cursor-pointer" style={{ 'border': '1px solid #D1D1D1' }}>
                        <Logout style={{ 'color': '#315ED2' }} className="w-5" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;