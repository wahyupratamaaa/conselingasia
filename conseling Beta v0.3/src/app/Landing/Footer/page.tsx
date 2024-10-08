import React from "react";
import Image from "next/image";
import footerlogo from "@/../public/Bg/footer-bg.png";
import useIsMobile from "@/app/Hooks/resizeHooks";
import asialogo from "@/../../public/logo/iconasia.png";
// import socials from "../../../public/social.png";
export default function Footer() {
  const isMobile = useIsMobile();

  return (
    <div
      className="w-full"
      style={{
        borderWidth: 1,
        marginTop: 60,
        borderTopLeftRadius: isMobile ? 0 : 45,
        borderTopRightRadius: isMobile ? 0 : 45,
        padding: 10
      }}>
      {isMobile ? (
        <div style={{ padding: 5 }} className="flex flex-col justify-center items-center">
          
        </div>
      ) : (
        <div className="grid grid-cols-2">
          <div className="flex flex-row">
            <div><Image style={{width: 150, height: 60}} src={asialogo} alt="logo" unoptimized /></div>
            <div><h2 
            style={{padding: "20 0 0 20"}}>Konseling Institut Asia</h2></div>
          </div>
          <div className="">
          <Image src={footerlogo} alt="logo" unoptimized />
          </div>
        </div>
      )}
    </div>
  );
}
