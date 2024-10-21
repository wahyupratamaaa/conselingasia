import useIsMobile from "@/app/Hooks/useIsMobile";
import React from "react";
import Tabs from "./Tabs";

export default function OpenQuestion() {
  const isMobile = useIsMobile();

  return (
    <>
      <div id="program" className="w-full text-center " data-aos="fade-right" data-aos-duration="1000">
        <div className="justify-center text-center" style={{ marginTop: isMobile ? 50 : 75 }}>
          <div style={{ height: "auto" }} className="text-center">
            <div className="flex flex-col items-center lg:hidden">
              <div
                className="flex items-center justify-center"
                style={{
                  backgroundColor: "#B9FF66",
                  height: 46,
                  width: 100 +"%"
                }}
              >
                <h1 style={{ fontSize: isMobile ? 20 : 36 }}>Our Working</h1>
              </div>
              <div
                className="flex items-center"
                style={{
                  backgroundColor: "#B9FF66",
                  height: 46,
                  width: 100 +"%"
                }}
              >
                <h1 style={{ fontSize: isMobile ? 20 : 36 }}>Process</h1>
              </div>
            </div>
            <div className="lg:flex flex-col hidden">
              <div
                className="text-customBlueText text-center"
                style={{
                  padding: 8,
                  width: 100 +"%",
                }}
              >
                <h1 style={{ fontSize: 40, textAlign: "center" }}>
                  Program di Bimbingan dan Konseling
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full" data-aos="fade-left" data-aos-duration="1000">
        <Tabs />
      </div>
    </>
  );
}
