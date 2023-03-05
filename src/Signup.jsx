import React from "react";

function Signup() {
    return (
        <>
            <div className="w-screen h-screen flex items-center justify-center
            ">
                <div className="w-4/5 h-4/5 bg-white flex flex-col items-center justify-center rounded-lg
            " style={{ 'border': '1px solid #777777' }}>
                    <h1 className="text-2xl font-medium mb-5" style={{ 'color': '#315ED2' }}>Signup</h1>
                    <input className="p-2 w-80 my-1 rounded-xl focus:outline-none"
                        type="text"
                        placeholder="First Name"
                        style={{
                            'border': '1px solid #777777',
                            'backgroundColor': '#fff',
                            'textAlign': 'center',
                        }}
                    />
                    <input className="p-2 w-80 my-1 rounded-xl focus:outline-none"
                        type="text"
                        placeholder="Last Name"
                        style={{
                            'border': '1px solid #777777',
                            'backgroundColor': '#fff',
                            'textAlign': 'center',
                        }}
                    /><input className="p-2 w-80 my-1 rounded-xl focus:outline-none"
                        type="email"
                        placeholder="Email Address"
                        style={{
                            'border': '1px solid #777777',
                            'backgroundColor': '#fff',
                            'textAlign': 'center',
                        }}
                    /><input className="p-2 w-80 my-1 rounded-xl focus:outline-none"
                        type="text"
                        placeholder="Gender"
                        style={{
                            'border': '1px solid #777777',
                            'backgroundColor': '#fff',
                            'textAlign': 'center',
                        }}
                    /><input className="p-2 w-80 my-1 rounded-xl focus:outline-none"
                        type="date"
                        placeholder="Birth Date"
                        style={{
                            'border': '1px solid #777777',
                            'backgroundColor': '#fff',
                            'textAlign': 'center',
                        }}
                    /><input className="p-2 w-80 my-1 rounded-xl focus:outline-none"
                        type="text"
                        placeholder="Mobile Number"
                        style={{
                            'border': '1px solid #777777',
                            'backgroundColor': '#fff',
                            'textAlign': 'center',
                        }}
                    />
                    <button className=" text-white px-12 py-2 mt-5 rounded-2xl focus:outline-none" style={{ 'backgroundColor': "#315ED2" }}>
                        Signup
                    </button>
                </div>
            </div>
        </>
    );
}
export default Signup;