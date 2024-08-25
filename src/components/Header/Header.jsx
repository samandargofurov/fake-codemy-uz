import { CiCircleQuestion } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLockOpen } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { IoLogoInstagram } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import logo from '../../assets/icon/logo.jpg';
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = "Biz haqimizda";

  const options = [
    { label: "Bizning mentorlar", path: "/about" },
    { label: "Bizning kampus", path: "/about" }
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="sticky top-0 left-0 right-0 z-50">
        <div className='bg-[#f8f9fa] border'>
          <div className='container mx-auto max-w-[1040px]'>
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-2 text-[#3AB54A] transition-all duration-300 hover:text-[#287933] cursor-pointer">
                  <div className="text-xl"><CiCircleQuestion /></div>
                  <p className="text-sm">Savolingiz bormi?</p>
                </div>
                <div className="flex items-center gap-2 text-[#3AB54A] transition-all duration-300 hover:text-[#287933] cursor-pointer">
                  <div className="text-sm"><FaPhoneAlt /></div>
                  <p className="text-sm">+998 (90) 165 84 86 </p>
                </div>
                <div className="flex items-center gap-2 text-[#3AB54A] transition-all duration-300 hover:text-[#287933] cursor-pointer">
                  <div className="text-sm"><GoMail /></div>
                  <p className="text-sm"> codemy@umail.uz</p>
                </div>
              </div>
              <div className="flex gap-5 justify-center itemss-center">
                <div>
                  <NavLink to="/login">
                    <div className="flex items-center text-[#3AB54A] transition-all duration-300 hover:text-[#348b40]">
                      <div><IoLockOpen /></div>
                      <p className="text-sm pt-2">Kirish</p>
                    </div>
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/register">
                    <div className="bg-[#3AB54A] transition-all duration-300 hover:bg-[#348b40] text-white flex gap-2 items-center py-2 px-6">
                      <div><FaUsers /></div>
                      <p className="text-sm">Ro'yxatdan o'tish</p>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="container mx-auto max-w-[1140px]">
            <div className="flex items-center justify-between py-8">
              <div className="flex items-center gap-14">
                <div className="flex items-center gap-1">
                  <img src={logo} alt="" width={130} />
                </div>
                <ul className="flex gap-8 font-[500] items-center">
                  <NavLink to="/"><li>Bosh sahifa</li></NavLink>
                  <div className="relative inline-block text-left">
                    <button
                      onClick={toggleDropdown}
                      className="inline-flex justify-between w-full px-4 py-2 rounded-md focus:outline-none"
                    >
                      {selectedOption}
                      <div
                        className="w-0 h-0 ml-2 mt-2 border-l-transparent border-t-[6px] border-t-black border-l-[5px] border-r-[5px] border-r-transparent"
                      ></div>
                    </button>
                    {isOpen && (
                      <ul className="absolute left-0 w-44 mt-3 ml-4 bg-white border border-gray-200 rounded-lg shadow-lg focus:outline-none">
                        {options.map((option) => (
                          <li
                            key={option.label}
                            className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                          >
                            <NavLink
                              to={option.path}
                              onClick={() => setIsOpen(false)}
                              className="w-full h-full block"
                            >
                              {option.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <NavLink to="/admissions"><li>Qabullar</li></NavLink>
                  <NavLink to="/courses"><li>Kurslar</li></NavLink>
                  <NavLink to="/contact"><li>Aloqa</li></NavLink>
                </ul>
              </div>
              <div className="flex items-center gap-3">
                <NavLink to="/"><div className="bg-[#3AB54A] transition-all duration-300 hover:bg-[#287933] hover:text-white text-white text-xl py-3 px-3"><IoLogoInstagram /></div></NavLink>
                <NavLink to="/"><div className="bg-[#3AB54A] transition-all duration-300 hover:bg-[#287933] hover:text-white text-white text-xl py-3 px-3"><FaTelegram /></div></NavLink>
                <NavLink to="/"><div className="bg-[#3AB54A] transition-all duration-300 hover:bg-[#287933] hover:text-white text-white text-xl py-3 px-3"><FaLinkedinIn /></div></NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
