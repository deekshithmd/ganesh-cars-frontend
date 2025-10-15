import { ImFacebook2 } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";

export const Footer = () => {
    return <div className="w-full px-20 py-3 bg-blue-100 flex items-start justify-between gap-x-2">
        <div className="flex flex-col items-start justify-start gap-y-2">
            <h3 className="font-semibold text-lg">Company</h3>
            <span>About Us</span>
            <span>Why Us</span>
            <span>Customer Reviews</span>
            <span>Privacy Policy</span>

        </div>
        <div className="flex flex-col items-start justify-start gap-y-2">
            <h3 className="font-semibold text-lg">Explore</h3>
            <span>Buy used car</span>
            <span>Sell used car</span>
        </div>
        <div className="flex flex-col items-start justify-start gap-y-2">
            <h3 className="font-semibold text-lg">Help and Support</h3>
            <span>FAQ</span>
            <span>Contact Us</span>
            <span>Terms and Conditions</span>

        </div>
        <div className="flex flex-col items-start justify-start gap-y-2">
            <span className="font-semibold text-lg">Social Links</span>
            <div className="flex items-center justify-start gap-x-2">
                <a href="https://www.facebook.com/" target="_blank" className="p-2 border rounded-lg hover:bg-blue-200"><ImFacebook2 /></a>
                <a href="https://www.instagram.com/" target="_blank" className="p-2 border rounded-lg hover:bg-blue-200"><GrInstagram /></a>
                <a href="https://www.twitter.com/" target="_blank" className="p-2 border rounded-lg hover:bg-blue-200"><BsTwitterX /></a>
            </div>

        </div>
    </div>
}