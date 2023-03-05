import React from "react";
import { useNavigate } from "react-router-dom";
function Otp() {
    const navigate = useNavigate();
    return (
        <>
            <div className="w-screen h-screen flex items-center justify-center
            ">
                <div className="w-4/5 h-4/5 bg-white flex flex-col items-center justify-center rounded-lg
            " style={{ 'border': '1px solid #777777' }}>
                   
                    <input className="p-2 w-72 my-5 rounded-xl focus:outline-none"
                        type="text"
                        placeholder="Enter OTP"
                        style={{
                            'border': '1px solid #777777',
                            'backgroundColor': '#fff',
                            'textAlign': 'center',
                        }}
                    />
                    <button onClick={(e)=>{
                        e.preventDefault();
                        navigate('/');
                    }} className=" text-white px-12 py-2 rounded-2xl focus:outline-none" style={{'backgroundColor':"#315ED2"}}>
      Submit
    </button>
                </div>
            </div>
        </>
    );
}
export default Otp;