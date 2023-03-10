import React from "react";
import { useState } from "react";
import axios from "axios";
function ProfileSetting() {
    const [user, setuser] = useState(JSON.parse(localStorage.getItem('pubuser')));
    const [fname, setfname] = useState(user.firstname);
    const [lname, setlname] = useState(user.lastname);
    const [email, setemail] = useState(user.email);
    return (
        <>
            <div className="w-screen h-screen flex items-center justify-center
            ">
                <div className="w-4/5 h-max py-5 bg-white flex flex-col items-center justify-center rounded-lg
            " style={{ 'border': '1px solid #777777' }}>
                    <h1 className="text-2xl font-medium mb-5" style={{ 'color': '#315ED2' }}>Profile Setting</h1>
                    <input value={fname} onChange={(e)=>{
                        e.preventDefault();
                        setfname(e.target.value);
                    }}  className="p-2 w-72 my-1 rounded-xl focus:outline-none"
                        type="text"
                        placeholder="First Name"
                        style={{
                            'border': '1px solid #777777',
                            'backgroundColor': '#fff',
                            'textAlign': 'center',
                        }}
                    />
                    <input value={lname} onChange={(e)=>{
                        e.preventDefault();
                        setlname(e.target.value);
                    }}  className="p-2 w-72 my-1 rounded-xl focus:outline-none"
                        type="text"
                        placeholder="Last Name"
                        style={{
                            'border': '1px solid #777777',
                            'backgroundColor': '#fff',
                            'textAlign': 'center',
                        }}
                    /><input value={email} onChange={(e)=>{
                        e.preventDefault();
                        setemail(e.target.value);
                    }}  className="p-2 w-72 my-1 rounded-xl focus:outline-none"
                        type="email"
                        placeholder="Email Address"
                        style={{
                            'border': '1px solid #777777',
                            'backgroundColor': '#fff',
                            'textAlign': 'center',
                        }}
                    />
                    <button onClick={(e) => {
                            // console.log(user.accessToken);
                            e.preventDefault();
                            axios.post("https://singh-publication.onrender.com/api/user/updateuser", {

                                'firstname': fname,
                                'lastname': lname,
                                'email': email,
                                
                                

                                

                            }, {
                                headers: {
                                    'Authorization': `Bearer ${user.accessToken}`
                                },
                                params: {
                                    'id': user.id
                                }
                            },).then((res) => {
                                let newuser=res.data;
                                newuser['accessToken']=user.accessToken;
                                localStorage.setItem('pubuser', JSON.stringify(newuser));
                                setuser(newuser);
                                console.log(res.data);
                            }
                            ).catch((err) => {
                                console.log(err);
                            }
                            )

                        }} className=" text-white px-12 py-2 mt-5 rounded-2xl focus:outline-none" style={{ 'backgroundColor': "#315ED2" }}>
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
}
export default ProfileSetting;