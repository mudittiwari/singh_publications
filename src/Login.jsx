import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState("");
    const [mobileNumber, setMobileNumber] = React.useState("");
    const [password, setPassword] = React.useState("");

    return (
        <>
            <div className="w-screen h-screen flex items-center justify-center
            ">
                <div className="w-4/5 py-5 h-max bg-white flex flex-col items-center justify-center rounded-lg
            " style={{ 'border': '1px solid #777777' }}>
                    <h1 className="text-2xl font-medium mb-5" style={{ 'color': '#315ED2' }}>Login</h1>
                    <input value={email} onChange={(e) => {
                        e.preventDefault();
                        setEmail(e.target.value);
                    }} className="p-2 w-72 my-1 rounded-xl focus:outline-none"
                        type="email"
                        placeholder="Email Address"
                        style={{
                            'border': '1px solid #777777',
                            'backgroundColor': '#fff',
                            'textAlign': 'center',
                        }}
                    />
                    <input value={mobileNumber} onChange={(e) => {
                        e.preventDefault();
                        setMobileNumber(e.target.value);
                    }} className="p-2 w-72 my-1 rounded-xl focus:outline-none"
                        type="number"
                        placeholder="Mobile Number"
                        style={{
                            'border': '1px solid #777777',
                            'backgroundColor': '#fff',
                            'textAlign': 'center',
                        }}
                    />
                    <input value={password} onChange={(e) => {
                        e.preventDefault();
                        setPassword(e.target.value);
                    }} className="p-2 w-72 my-1 rounded-xl focus:outline-none"
                        type="password"
                        placeholder="Password"
                        style={{
                            'border': '1px solid #777777',
                            'backgroundColor': '#fff',
                            'textAlign': 'center',
                        }}
                    />
                    <button onClick={(e) => {
                        e.preventDefault();
                        axios.post("http://localhost:5000/api/user/login", {
                            email: email,
                            // mobileNumber: mobileNumber,
                            password: password,
                        }).then((res) => {
                            console.log(res);
                            if (res.status===200) {
                                localStorage.setItem("pubuser", JSON.stringify(res.data));
                                console.log(localStorage.getItem("pubuser"));
                                navigate("/otp", { state: { phone: mobileNumber } });
                            } else {
                                alert("Invalid Credentials");
                            }
                        }).catch((err) => {
                            console.log(err);
                        }
                        )

                    }} className=" text-white px-12 py-2 mt-5 rounded-2xl focus:outline-none" style={{ 'backgroundColor': "#315ED2" }}>
                        Login
                    </button>
                </div>
            </div>
        </>
    );
}
export default Login;