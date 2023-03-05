import React from "react";
import { useNavigate } from "react-router-dom";
function AccountSetting() {
    const navigate = useNavigate();
    return (
        <>
            <div className="w-screen h-screen flex items-center justify-center
            ">
                <div className="w-4/5 h-4/5 bg-white flex flex-col items-center justify-center rounded-lg
            " style={{ 'border': '1px solid #777777' }}>
                    <h1 className="text-2xl font-medium mb-5" style={{ 'color': '#315ED2' }}>Account Setting</h1>
                    
                    <button onClick={(e)=>{
                        e.preventDefault();
                        navigate('/billingaddress');
                    }} className="  px-12 py-2 mb-1 rounded-2xl focus:outline-none" style={{
                            'border': '1px solid #777777',
                            'backgroundColor': '#fff',
                            'textAlign': 'center',
                            'color': '#999999'
                        }}>
                        Billing Address
                    </button>
                    <button onClick={(e)=>{
                        e.preventDefault();
                        navigate('/shippingaddress');
                    }} className="  px-12 py-2 mt-3 rounded-2xl focus:outline-none" style={{
                            'border': '1px solid #777777',
                            'backgroundColor': '#fff',
                            'textAlign': 'center',
                            'color': '#999999'
                        }}>
                        Shipping Address
                    </button>
                </div>
            </div>
        </>
    );
}
export default AccountSetting;