
import { Facebook, Twitter, WhatsApp, Instagram, Call } from "@mui/icons-material";
function Footer() {
    return (
        <>
            <div className="w-full h-max py-5 mt-10 footer">
                <div className="w-full flex md:hidden justify-center py-4" style={{ 'borderBottom': '1px solid black', 'borderTop': '1px solid black' }}>
                    <div className="flex md:hidden w-96 justify-center">
                        <div className="flex justify-center"><h1 className="font-bold text-sm mt-1">Privacy Policy</h1> </div>
                        <div className="h-7 mx-2" style={{ 'width': '1px', 'backgroundColor': 'black' }}></div>
                        <div className="flex justify-center"><h1 className="font-bold text-sm mt-1">Mobile App</h1> </div>
                        <div className="h-7 mx-2" style={{ 'width': '1px', 'backgroundColor': 'black' }}></div>
                        <div className="flex justify-center"><h1 className="font-bold text-sm mt-1">Contact Us</h1> </div>
                        <div className="h-7 mx-2" style={{ 'width': '1px', 'backgroundColor': 'black' }}></div>
                        <div className="flex justify-center"><h1 className="font-bold text-sm mt-1">About Us</h1> </div>
                    </div>

                </div>
                <div className="w-full h-full items-center flex md:flex-row flex-col justify-around">
                    <div className="w-max md:my-0 my-2">
                        <a className="mx-2" href="https://www.facebook.com/mahendra.daiman?mibextid=LQQJ4d">
                            <Facebook style={{ 'fontSize': '40px', 'color': '#315ED2' }} />
                        </a>
                        <a className="mx-2" href="https://www.instagram.com/mahendradaiman/">
                            <Instagram style={{ 'fontSize': '40px', 'color': '#315ED2' }} />
                        </a>
                        <a className="mx-2" href="https://twitter.com/mahendradaiman">
                            <Twitter style={{ 'fontSize': '40px', 'color': '#315ED2' }} />
                        </a>
                        <a className="mx-2" href="https://in.linkedin.com/in/mahendra-daiman-896131103?original_referer=https%3A%2F%2Fwww.google.com%2F">
                            <WhatsApp style={{ 'fontSize': '40px', 'color': '#315ED2' }} />
                        </a>


                    </div>
                    <div className="md:flex mt-10 mb-5 hidden w-max justify-center">
                        <div className="flex justify-center"><h1 className="font-bold text-sm mt-1">Privacy Policy</h1> </div>
                        <div className="w-14 mx-0 my-auto" style={{ 'height': '2px', 'backgroundColor': '#FF0101' }}></div>
                        <div className="flex justify-center"><h1 className="font-bold text-sm mt-1">Mobile App</h1> </div>
                        <div className="w-14 mx-0 my-auto" style={{ 'height': '2px', 'backgroundColor': '#FF0101' }}></div>
                        <div className="flex justify-center"><h1 className="font-bold text-sm mt-1">Contact Us</h1> </div>
                        <div className="w-14 mx-0 my-auto" style={{ 'height': '2px', 'backgroundColor': '#FF0101' }}></div>
                        <div className="flex justify-center"><h1 className="font-bold text-sm mt-1">About Us</h1> </div>
                    </div>
                    

                </div>
                <h1 className="font-bold w-max text-center mx-auto  md:my-5 my-2">Copyright © 2022 Zulu IT <br />
                        Designed, Developed & Maintained By ZITS</h1>
            </div>
        </>
    );

}
export default Footer;