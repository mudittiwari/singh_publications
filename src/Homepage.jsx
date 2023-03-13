import sample from './assets/sample.png';
import book from './assets/book.png';
import star from './assets/star.png';
import app from './Firebase';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { useEffect } from 'react';
function BookComp(props) {
    const navigate = useNavigate();
    return (
        <div className=' my-4 rounded-xl p-2 relative cursor-pointer' onClick={(e)=>{
            e.preventDefault();
            navigate('/product', { state: props.prod })
        }} style={{ 'border': '1px solid #777777', 'width': '45%' }} >
            <img src={book} className="w-full mx-auto " alt="" />
            <h1 className="text-md font-bold mb-0 mx-0 w-max mt-0" style={{ 'color': '#315ED2', 'maxWidth': '100%' }}>{props.prod.title}</h1>
            <h1 className="text-base font-semibold mb-0 mx-0 w-max mt-0" style={{ 'color': '#777777' }}>{props.prod.category}</h1>
            <h1 className="text-sm font-medium mb-0 mx-0 w-max mt-0" style={{ 'color': '#777777' }}>{props.prod.subtitle}</h1>
            <div className='w-full mt-1 mx-0 flex items-center'>
                <h1 className="text-base font-medium mb-0 mr-2  w-max mt-0" style={{ 'color': '#777777' }}>{props.prod.rating}</h1>
                <img className='mx-1 w-4' src={star} alt="" />
                <img className='mx-1 w-4' src={star} alt="" />
                <img className='mx-1 w-4' src={star} alt="" />
                <img className='mx-1 w-4' src={star} alt="" />
                <img className='mx-1 w-4' src={star} alt="" />
            </div>
            <div className='w-max py-1 rounded-full absolute bottom-12  right-5' style={{ 'border': '1px solid #777777' }} >
                <img className='mx-1 ' src={star} alt="" />
            </div>
        </div>
    );
}


function Home() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    async function getallprods()
    {
        axios.get('http://localhost:5000/api/product/getproducts').then((res) => {
        // console.log(res);
        setProducts(res.data);
    }).catch((err) => {
        console.log(err);
    });
    }
    async function checkuser() {
        const auth = getAuth(app);
        auth.onAuthStateChanged(async (user) => {
            if (!user) {
                navigate('/login');
            }

        });
    }
    useEffect(() => {
        // localStorage.removeItem('pubuser')
        // const auth = getAuth(app);
        // auth.signOut();
        // console.log(localStorage.getItem('pubuser'));
        // if (checkuser() === "push") {
        //     navigate('/login');
        // }
        checkuser();
        getallprods();
    }, []);
    return (
        <>
            <div className="w-screen flex justify-center py-5">
                <div className="md:w-1/2 w-11/12">
                    <img src={sample} className="mx-auto" alt="" />
                    <h1 className="text-2xl font-medium mb-5 mx-auto w-max mt-2" style={{ 'color': '#315ED2' }}>Best Sellers</h1>
                    <div className='w-full flex  flex-wrap justify-between'>
                        {/* <BookComp />
                        <BookComp />
                        <BookComp />
                        <BookComp />
                        <BookComp />
                        <BookComp /> */}
                        {products.map((prod,index) => {
                            return <BookComp key={index} prod={prod}  />
                            })}

                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;