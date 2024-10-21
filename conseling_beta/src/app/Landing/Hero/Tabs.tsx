import { useState } from "react";
import useIsMobile from "@/app/Hooks/useIsMobile";
import discussImg from "@/../public/tabs/discuss.svg";
import Image from "next/image";
export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const isMobile = useIsMobile();

  const tabs = [
    {
      id: 0,
      label: "Monitoring",
      title: "Monitoring dan motivasi mahasiswa dalam belajar",
      content:
        "- Melakukan proses monitoring kehadiran mahasiswa ketika belajar dikelas \n- Melakukan pendataan mahasiswa yang bermasalah \n- Menghubungi mahasiswa atau melakukan visitasi ke rumah (jika diperlukan)",
    },
    {
      id: 1,
      label: "Research and Strategy Development",
      title: "Konseling dan konsultasi akademik",
      content:
        "Konseling akademik meliputi penanganan mahasiswa yang memiliki motivasi belajar rendah dan berbagai masalah yang menyertai - Konseling karir meliputi penanganan masalah karir (persiapankerja, PHK, dan masalah karir lainnya)mahasiswa baik sebagai mahasiswa atau alumni - Konsultasi meliputi pemberian informasi terkait hal-hal informasi kampus yang kurang dimengerti (akan dikomunikasi juga dengan pihak terkait)",
    },
    {
      id: 2,
      label: "Psikologi",
      title: "Tes psikologi dan tes pra-kualifikasi",
      content:
        "- Tes psikologi meliputi penilaian yang dilakukan oleh profesional yang ahli, biasanya psikolog, untuk mengevaluasi emosi, kecerdasan, dan/atau fungsi perilaku seseorang. Tes psikologi dapat dilakukan baik pada anak-anak maupun pada orang dewasa, dan dilakukan untuk berbagai alasan.\n- Tes pra-kualifikasi meliputi pemberian tes potensi akademik (TPA) dan tes bahasa inggris untuk menyeleksi calon mahasiswa yang akan mejadi mahasiswa Institut Teknologi dan Bisnis Asia Malang - Tes interview (wawancara) melakukan konfirmasi dan menggali data yang lebih dalam terkait proses seleksi",
    },
  ];

  return (
    <div className="w-full">
      <div className="flex border-b border-gray-200 items-center justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            style={{
              width: "100%",
              maxWidth: "500px",
              height: isMobile ? 40 : 50,
              borderRadius: 45,
              padding: 30,
              borderTopWidth: 1,
              borderLeftWidth: 1,
              borderWidth: 1,
              borderBottomWidth: 5,
              borderColor: "#191A23",
              marginTop: 30,
            }}
            className={`flex-1 py-2 px-4 text-center border-b-2 font-bold ${
              activeTab === tab.id
                ? "border-blue-500 text-blue-500"
                : "border-transparent text-customBlueText"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4 justify-start flex">
        <div className="w-1/2">
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <div key={tab.id} className="grid grid-cols-1 gap-4">
                  <div className="font-bold text-lg">{tab.title}</div>
                  <div className="text-gray-700">
                    {tab.content
                      .split("\n")
                      .filter(Boolean)
                      .map((paragraph, index) => (
                        <p key={index}>{paragraph.trim()}</p>
                      ))}
                  </div>
                </div>
              )
          )}
        </div>
        <div className="w-1/2">
          <Image src={discussImg} alt="img" />
        </div>
      </div>
    </div>
  );
}
