import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import app from './Firebase';
function Otp() {
    const navigate = useNavigate();
    const location = useLocation();
    const [one, setcode1] = useState(1);
    const [two, setcode2] = useState(1);
    const [three, setcode3] = useState(1);
    const [four, setcode4] = useState(1);
    const [five, setcode5] = useState(1);
    const [six, setcode6] = useState(1);
    const auth = getAuth(app);
    const [result, setresult] = useState();
    const generaterecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                // onSignInSubmit();
                console.log(response);
            }
        }, auth);
    }
    const verifyuser = async () => {
        generaterecaptcha();
        let appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, `+91${location.state.phone}`, appVerifier)
            .then((confirmationResult) => {
                // auth.setPersistence(auth.Persistence.LOCAL)
                console.log(confirmationResult);
                setresult(confirmationResult);
            }).catch((error) => {
                console.log(error);
                // Error; SMS not sent
                // ...
            });
    }
    const matchcode = async () => {
        let code = one + two + three + four + five + six;
        result.confirm(code).then((result) => {
            navigate('/')
        }).catch((error) => {
            console.log(error);
        });
    }
    useEffect(() => {
        verifyuser();
        console.log(location.state.phone)
    }, []);

    return (
        <>
        <div id="sign-in-button"></div>
            <div className="w-screen h-screen flex items-center justify-center
            ">
                <div className="w-4/5 py-5 h-max bg-white flex flex-col items-center justify-center rounded-lg
            " style={{ 'border': '1px solid #777777' }}>
                    <h1 className="text-2xl font-medium mb-5" style={{ 'color': '#315ED2' }}>OTP is sent to {location.state.phone}</h1>
                   <div className='mt-10 flex'>
                        <div className='h-6 w-6 md:w-14 md:h-14 mx-4 related flex items-center'>
                            <input onChange={(e) => {
                                e.preventDefault();
                                setcode1(e.target.value);
                            }} type="text" className='outline-none w-full text-center h-full ' />
                        </div>
                        <div className='h-6 w-6 md:w-14 md:h-14 mx-4 related flex items-center'>
                            <input onChange={(e) => {
                                e.preventDefault();
                                setcode2(e.target.value);
                            }} type="text" className='outline-none w-full text-center h-full ' />
                        </div>
                        <div className='h-6 w-6 md:w-14 md:h-14 mx-4 related flex items-center'>
                            <input onChange={(e) => {
                                e.preventDefault();
                                setcode3(e.target.value);
                            }} type="text" className='outline-none w-full text-center h-full ' />
                        </div>
                        <div className='h-6 w-6 md:w-14 md:h-14 mx-4 related flex items-center'>
                            <input onChange={(e) => {
                                e.preventDefault();
                                setcode4(e.target.value);
                            }} type="text" className='outline-none w-full text-center h-full ' />
                        </div>
                        <div className='h-6 w-6 md:w-14 md:h-14 mx-4 related flex items-center'>
                            <input onChange={(e) => {
                                e.preventDefault();
                                setcode5(e.target.value);
                            }} type="text" className='outline-none w-full text-center h-full ' />
                        </div>
                        <div className='h-6 w-6 md:w-14 md:h-14 mx-4 related flex items-center'>
                            <input onChange={(e) => {
                                e.preventDefault();
                                setcode6(e.target.value);
                            }} type="text" className='outline-none w-full text-center h-full ' />
                        </div>
                    </div>
                    <button onClick={(e)=>{
                        e.preventDefault();
                        // navigate('/');
                        matchcode()
                    }} className=" text-white mt-10 px-12 py-2 rounded-2xl focus:outline-none" style={{'backgroundColor':"#315ED2"}}>
      Submit
    </button>
                </div>
            </div>
        </>
    );
}
export default Otp;