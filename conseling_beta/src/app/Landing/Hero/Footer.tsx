import React from "react";
import Image from "next/image";
import footerlogo from "../../../public/footerlogo.png";
import useIsMobile from "../../Hooks/useIsMobile";
import socials from "../../../public/social.png";
export default function Footer() {
  const isMobile = useIsMobile();

  return (
    <div
      className="w-full"
      style={{
        backgroundColor: "#191A23",
        borderWidth: 1,
        marginTop: 60,
        borderTopLeftRadius: isMobile ? 0 : 45,
        borderTopRightRadius: isMobile ? 0 : 45,
        paddingTop: isMobile ? 0 : 60,
        paddingRight: isMobile ? 0 : 100,
        paddingLeft: isMobile ? 0 : 100,
      }}
    >
      {isMobile ? (
        <div
          style={{ padding: 20 }}
          className="flex flex-col justify-center items-center"
        >
          <Image
            style={{ width: 144, height: 23.16 }}
            src={footerlogo}
            alt="logo"
            unoptimized
          />
          <div className="flex flex-col justify-center items-center mt-4 text-white">
            <a className="mt-2">About Us</a>
            <a className="mt-2">Services</a>
            <a className="mt-2">Use Cases</a>
            <a className="mt-2">Pricing</a>
          </div>
          <div className="w-full flex justify-center items-center flex-col mt-4">
            <div
              className="flex justify-center items-center"
              style={{
                backgroundColor: "#B9FF66",
                width: 112,
                borderRadius: 7,
              }}
            >
              <h3>Contact Us</h3>
            </div>
            <div className="text-white w-full mt-4 flex flex-col justify-center items-center">
              <h3 className="mt-2 text-center">Email: info@positivus.com</h3>
              <h3 className="mt-2 text-center">Phone: 555-567-8901</h3>
              <h3 className="mt-2 text-center">Address: 1234 Main St</h3>
              <h3 className="mt-2 text-center">
                Moonstone City, Stardust State 12345
              </h3>
            </div>
          </div>

          <div className="my-6">
            <Image
              style={{ width: 130, height: 30 }}
              src={socials}
              alt="logo"
              unoptimized
            />
          </div>
          <div className="border w-full"></div>
          <div className="my-4 flex flex-col justify-center items-center">
            <h4 className="text-white">
              © 2023 Positivus. All Rights Reserved.
            </h4>
            <h4 className="mt-4 text-white">Privacy Policy</h4>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex w-full flex-row justify-between items-center">
            <Image
              style={{ width: 144, height: 23.16 }}
              src={footerlogo}
              alt="logo"
              unoptimized
            />
            <div className="">
              <Image
                style={{ width: 130, height: 30 }}
                src={socials}
                alt="logo"
                unoptimized
              />
            </div>
          </div>
          <div className="w-full mt-4 flex flex-row">
            <div className="flex justify-start items-start flex-col w-1/2">
              <div
                className="flex justify-center items-center"
                style={{
                  backgroundColor: "#B9FF66",
                  width: 112,
                  borderRadius: 7,
                }}
              >
                <h3>Contact Us</h3>
              </div>
              <div className="text-white mt-4 flex flex-col justify-start items-start">
                <h3 className="mt-2 text-center">
                  Email: wahyufiver.id@gmail.com
                </h3>
                <h3 className="mt-2 text-center">Phone: 555-567-8901</h3>
                <h3 className="mt-2 text-center">Address: 1234</h3>
                <h3 className="mt-2 text-center">
                  Malang, Jawa Timur,Indonesia
                </h3>
              </div>
            </div>
          </div>
          <div
            style={{
              borderColor: "#fff",
              borderWidth: 1,
              marginTop: 10,
              marginBottom: 10,
            }}
            className="w-full"
          />
          <div className="my-4 flex flex-row justify-start items-center">
            <h4 className="text-white">
              © 2023 Codingin. All Rights Reserved.
            </h4>
          </div>
        </div>
      )}
    </div>
  );
}
