import React from "react";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constents";
function Footer() {
  return (
    <footer className="mt-20 bg-[#0B0A0C99] sm:px-16 px-6  flex justify-center items-center">
      <div className="xl:max-w-[1480px] w-full">
        <div className="flex flex-wrap gap-8 justify-between mt-[72px] pb-10 border-[#3F3E45] border-b-[1px]">
          <div>
            <img src={logo} alt="logo" className="min-w-[266px] h-[72px]" />
            <p className="text-dimWhite text-[18px] max-w-[325px] mt-[30px] pl-6">
              A new way to make the payments easy, reliable and secure.
            </p>
          </div>
          {footerLinks.map((link) => (
            <div>
              <h6 className="text-[18px] font-medium capitalize text-white mb-6">
                {link.title}
              </h6>
              <div>
                {link.links.map((sublink) => (
                  <a
                    href={sublink.link}
                    className="text-[18px] text-dimWhite block mb-3"
                  >
                    {sublink.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="my-[30px] flex justify-between px-6 ">
          <p className="text-dimWhite text-[18px]">
            Copyright &copy; 2024 HooBank. All Rights Reserved.
          </p>
          <div className="flex max-w-[176px] justify-between items-center gap-3 flex-wrap">
            {socialMedia.map((media) => (
              <a href={media.link} key={media.id}>
                <img
                  src={media.icon}
                  alt="social media logo"
                  width={21}
                  className="text-white"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
