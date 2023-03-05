import React from "react";
import sample from './assets/sample.png';
import book from './assets/book.png';
import star from './assets/star.png';
function BookComp() {
    return (
        <div className=' my-4 mx-2 h-36 rounded-xl p-2 relative flex items-center' style={{ 'border': '1px solid #777777', 'width': '400px' }} >
            <img src={book} className="w-20 h-full " alt="" />
            <div className='ml-2 mr-5'>
                <h1 className="text-md font-bold mb-0 mx-0 w-max mt-0" style={{ 'color': '#315ED2' }}>Think Outside The Box</h1>
                <h1 className="text-base font-semibold mb-0 mx-0 w-max mt-0" style={{ 'color': '#777777' }}>Paperback</h1>
                <h1 className="text-sm font-medium mb-0 mx-0 w-max mt-0" style={{ 'color': '#777777' }}>Art | Life | Goals</h1>
                <div className='w-max mt-1 ml-0 flex items-center'>
                    <h1 className="text-base font-medium mb-0 mr-1  w-max mt-0" style={{ 'color': '#777777' }}>4.1</h1>
                    <img className='mx-1 w-4' src={star} alt="" />
                    <img className='mx-1 w-4' src={star} alt="" />
                    <img className='mx-1 w-4' src={star} alt="" />
                    <img className='mx-1 w-4' src={star} alt="" />
                    <img className='mx-1 w-4' src={star} alt="" />
                </div>
                <h1 className="text-sm font-medium mb-0 mx-0 w-max mt-0" style={{ 'color': '#777777' }}>11 Jan 2023</h1>
            </div>
            <div style={{ 'width': "0px", 'height': '80%', 'backgroundColor': '#315ED2','border':'1px solid #315ED2' }}></div>
            <div className='h-full w-full justify-center flex flex-col items-center'>
                <h1 className="text-2xl font-bold mb-0 mx-0 w-max mt-0" style={{ 'color': '#315ED2' }}>599 Rs.</h1>
                <button className=" text-white px-4 py-1 mt-5 rounded-2xl focus:outline-none" style={{ 'backgroundColor': "#315ED2" }}>
                    Invoice
                </button>
            </div>
        </div>
    );
}


function Orderdetails() {
    return (
        <>
            <div className="w-full mt-5 h-max flex items-center justify-center
            ">
                <div className="w-4/5 p-4 h-4/5 bg-white flex flex-col items-center justify-center rounded-lg
            " style={{ 'border': '1px solid #777777' }}>
                    <h1 className="text-2xl font-medium" style={{ 'color': '#315ED2' }}>Order Details</h1>
                    <BookComp/>
                    <div className=' my-4 mx-2 h-14 rounded-3xl p-2 relative flex items-center' style={{ 'border': '1px solid #777777', 'width': '400px' }} >
                    <h1 className="text-lg font-semibold mr-3" style={{ 'color': '#777777' }}>Delivery Status  </h1><span className="text-4xl font-light" style={{ 'color': '#777777' }}>|</span>
                    <h1 className="text-lg font-semibold ml-3" style={{ 'color': '#315ED2' }}>On The Way  </h1>
                    <h1 className="text-lg font-normal ml-4" style={{ 'color': '#777777' }}>13 Jan 2023  </h1>
                    </div>
                    <h1 className="text-lg font-semibold ml-3" style={{ 'color': '#315ED2' }}>Add Review</h1>
                    <textarea className="mt-4 rounded-3xl p-4 focus:outline-none resize-none" style={{'width':'400px','border':'1px solid #777777'}} name="" id="" cols="20" rows="10" placeholder="Review"></textarea>
                    <div className='w-max mt-4 ml-0 flex items-center'>
                    
                    <img className='mx-1 w-8' src={star} alt="" />
                    <img className='mx-1 w-8' src={star} alt="" />
                    <img className='mx-1 w-8' src={star} alt="" />
                    <img className='mx-1 w-8' src={star} alt="" />
                    <img className='mx-1 w-8' src={star} alt="" />
                </div>
                    <button className=" text-white px-12 mt-8 py-2 rounded-2xl focus:outline-none" style={{ 'backgroundColor': "#315ED2" }}>
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
}
export default Orderdetails;