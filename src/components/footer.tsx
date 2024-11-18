import Image from "next/image";
import { BsEnvelope } from "react-icons/bs";
import { FaFacebookF, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { LuPhoneForwarded } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="bg-white w-full h-[300px] relative">
      <div className="flex justify-center pt-5 space-x-52">
        {/* Contact Information Section */}
        <div className="flex flex-col">
          <p className="text-black font-bold text-[20px]">Get in Touch</p>
          <div className="flex mt-8">
            <IoPersonOutline className="text-[#F1C933] text-[23px]" />
            <div className="ml-2">
              <p className="text-blue-500 text-[12px] font-bold">
                63/66 Hatton Garden, Fifth Floor, Suite
              </p>
              <p className="text-blue-500 text-[12px] mt-2 font-bold">
                23, London, England, EC1N 8LE
              </p>
            </div>
          </div>
          <div className="flex mt-5">
            <LuPhoneForwarded className="text-[#F1C933] text-[20px]" />
            <p className="ml-3 text-[12px] text-blue-500">
              Free Phone: 0208 004 3311
            </p>
          </div>
          <div className="flex mt-5">
            <LiaPhoneVolumeSolid className="text-[#F1C933] text-[20px]" />
            <p className="ml-3 text-[12px] text-blue-500">
              Complaint: 0208 004 3311
            </p>
          </div>
          <div className="flex mt-5">
            <BsEnvelope className="text-[#F1C933] text-[20px]" />
            <p className="ml-3 text-[12px] text-blue-500">
              info@brightholiday.co.uk
            </p>
          </div>
        </div>

        {/* Company Section */}
        <div className="flex flex-col">
          <p className="text-black font-bold text-[20px]">Company</p>
          <div className="mt-8 space-y-2">
            <p className="text-[12px] text-blue-500">About us</p>
            <p className="text-[12px] text-blue-500">Contact Us</p>
            <p className="text-[12px] text-blue-500">Bookmark Us</p>
            <p className="text-[12px] text-blue-500">Site Map</p>
            <p className="text-[12px] text-blue-500">Disclaimer Policy</p>
            <p className="text-[12px] text-blue-500">Terms of Use</p>
            <p className="text-[12px] text-blue-500">Business Partners</p>
          </div>
        </div>

        {/* Support Section */}
        <div className="flex flex-col">
          <p className="text-black font-bold text-[20px]">Support</p>
          <div className="mt-8 space-y-2">
            <p className="text-[12px] text-blue-500">Travel Tips</p>
            <p className="text-[12px] text-blue-500">Privacy Policy</p>
            <p className="text-[12px] text-blue-500">Enquiry Form</p>
            <p className="text-[12px] text-blue-500">FAQs</p>
            <p className="text-[12px] text-blue-500">Passports & Visas</p>
            <p className="text-[12px] text-blue-500">Traveler’s Health</p>
            <p className="text-[12px] text-blue-500">Travel Checklist</p>
            <p className="text-[12px] text-blue-500">Make a Payment</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-col">
          <p className="text-black font-bold text-[20px]">Find Us On</p>
          <div className="flex mt-10 space-x-3">
            <FaTwitter className="text-white p-2 w-[30px] h-[30px] rounded-full bg-blue-500 transform transition-all duration-1000 hover:rotate-[400deg]" />
            <FaFacebookF className="text-white p-2 w-[30px] h-[30px] rounded-full bg-blue-600 transform transition-all duration-1000 hover:rotate-[400deg]" />
            <FaInstagramSquare className="text-white p-2 w-[30px] h-[30px] rounded-full bg-red-700 transform transition-all duration-1000 hover:rotate-[400deg]" />
          </div>
        </div>
      </div>

      {/* WhatsApp Logo Fixed Position */}
      <a
        href="https://api.whatsapp.com/send/?phone=%2B447477967412&text=Hi+Dear+Travel+Agent%2C+Please+find+best+Airline+tickets+for+me.&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="fixed bottom-32 right-5">
          <Image
            src="/whatsapplogo.png" // Replace with the actual path to your image
            alt="Company Logo"
            width={70}
            height={70}
          />
        </div>
      </a>
    </div>
  );
};

export default Footer;
