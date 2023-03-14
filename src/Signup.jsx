import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Signup() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [birthDate, setBirthDate] = React.useState("");
    const [mobileNumber, setMobileNumber] = React.useState("");
    const [password, setPassword] = React.useState("");

    return (
        <>
            <div className="w-screen h-max my-5 py-5 flex items-center justify-center
            ">
                <div className="w-4/5 h-max py-5 bg-white flex flex-col items-center justify-center rounded-lg
            " style={{ 'border': '1px solid #777777' }}>
                    <h1 className="text-2xl font-medium mb-5" style={{ 'color': '#315ED2' }}>Signup</h1>
                    <input value={firstName} onChange={(e) => {
                        e.preventDefault();
                        setFirstName(e.target.value);
                    }} className="p-2 w-72 my-1 rounded-xl focus:outline-none"
                        type="text"
                        placeholder="First Name"
                        style={{
                            'border': '1px solid #777777',
                            'backgroundColor': '#fff',
                            'textAlign': 'center',
                        }}
                    />
                    <input value={lastName} onChange={(e) => {
                        e.preventDefault();
                        setLastName(e.target.value);
                    }} className="p-2 w-72 my-1 rounded-xl focus:outline-none"
                        type="text"
                        placeholder="Last Name"
                        style={{
                            'border': '1px solid #777777',
                            'backgroundColor': '#fff',
                            'textAlign': 'center',
                        }}
                    /><input value={email} onChange={(e) => {
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
                    /><input value={gender} onChange={(e) => {
                        e.preventDefault();
                        setGender(e.target.value);
                    }} className="p-2 w-72 my-1 rounded-xl focus:outline-none"
                        type="text"
                        placeholder="Gender"
                        style={{
                            'border': '1px solid #777777',
                            'backgroundColor': '#fff',
                            'textAlign': 'center',
                        }}
                    /><input value={birthDate} onChange={(e) => {
                        e.preventDefault();
                        setBirthDate(e.target.value);
                    }} className="p-2 w-72 my-1 rounded-xl focus:outline-none"
                        type="date"
                        placeholder="Birth Date"
                        style={{
                            'border': '1px solid #777777',
                            'backgroundColor': '#fff',
                            'textAlign': 'center',
                        }}
                    /><input value={mobileNumber} onChange={(e) => {
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
                        axios.post('https://singh-publication.onrender.com/api/user/register', {
                            firstname: firstName,
                            lastname: lastName,
                            email: email,
                            gender: gender,
                            dob: birthDate,
                            mobile: mobileNumber,
                            password: password,
                        }).then((res) => {
                            console.log(res);
                            if (res.data === 'success') {
                                navigate('/login');
                            }
                        }
                        ).catch((err) => {
                            console.log(err);
                        }
                        );



                    }} className=" text-white px-12 py-2 mt-5 rounded-2xl focus:outline-none" style={{ 'backgroundColor': "#315ED2" }}>
                        Signup
                    </button>
                </div>
            </div>
        </>
    );
}
export default Signup;