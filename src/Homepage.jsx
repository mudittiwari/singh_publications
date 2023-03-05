import sample from './assets/sample.png';
import book from './assets/book.png';
import star from './assets/star.png';

function BookComp() {
    return (
        <div className=' my-4 rounded-xl p-2 relative' style={{ 'border': '1px solid #777777','width':'45%' }} >
            <img src={book} className="w-full mx-auto " alt="" />
            <h1 className="text-md font-bold mb-0 mx-0 w-max mt-0" style={{ 'color': '#315ED2','maxWidth':'100%' }}>Think Outside The Box</h1>
            <h1 className="text-base font-semibold mb-0 mx-0 w-max mt-0" style={{ 'color': '#777777' }}>Paperback</h1>
            <h1 className="text-sm font-medium mb-0 mx-0 w-max mt-0" style={{ 'color': '#777777' }}>Art | Life | Goals</h1>
            <div className='w-full mt-1 mx-0 flex items-center'>
                <h1 className="text-base font-medium mb-0 mr-2  w-max mt-0" style={{ 'color': '#777777' }}>4.1</h1>
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
    return (
        <>
            <div className="w-screen flex justify-center py-5">
                <div className="md:w-1/2 w-11/12">
                    <img src={sample} className="mx-auto" alt="" />
                    <h1 className="text-2xl font-medium mb-5 mx-auto w-max mt-2" style={{ 'color': '#315ED2' }}>Best Sellers</h1>
                    <div className='w-full flex  flex-wrap justify-between'>
                        <BookComp />
                        <BookComp />
                        <BookComp />
                        <BookComp />
                        <BookComp />
                        <BookComp />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;