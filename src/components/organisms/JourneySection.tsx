import JourneyCard from "../molecules/JourneyCard";

const educationData = [
  {
    year: "2019 - 2022",
    title: "IPS - SMAN 25 Jakarta",
    description: "",
  },
  {
    year: "2022 - Sekarang",
    title: "Teknik Informatika - Universitas Esa Unggul",
    description:
      "Mendalami Pemrograman, Pengembangan Perangkat Lunak, Basis Data, AI, Kriptografi, dan Jaringan Komputer (IPK 3,55), serta aktif di Himpunan Mahasiswa Teknik Informatika untuk mengembangkan kepemimpinan dan kerja tim.",
  },
];

const experienceData = [
  {
    year: "2023 - Sekarang",
    title: "Web Developer - Freelance",
    description:
      "Mengembangkan website responsif untuk bisnis kecil dengan optimasi performa, SEO, serta desain UI intuitif menggunakan HTML, CSS, JavaScript, dan framework seperti Bootstrap/Tailwind.",
  },
  {
    year: "2024 - Sekarang",
    title: "IT Support - SDS Merpati",
    description:
      "Mengelola data administrasi sekolah dengan Dapodik, mendukung penggunaan software pendidikan, dan mengarsipkan dokumen secara sistematis.s",
  },
  {
    year: "2025 - Sekarang",
    title: "Guru Mata Pelajaran Informatika - SMK Al-Irsyad",
    description:
      "Mengajar Informatika di 2 jurusan dan 3 kelas (±30 siswa/kelas), serta menyampaikan materi seperti algoritma, analisis data, dan sistem komputer.",
  },
];

const organizationData = [
  {
    year: "2023 - 2024",
    title: "Intern Staff Divisi Riset dan Teknologi - HIMASTIKA UEU",
    description:
      "Berkontribusi dalam perencanaan seminar dan workshop teknologi, serta menjadi pemateri dalam program pengabdian masyarakat di SMK Jakarta dengan 30 peserta.",
  },
  {
    year: "2024 - 2025",
    title: "President - HIMASTIKA UEU",
    description:
      "Memimpin 33 pengurus dalam menjalankan 8 program kerja pengembangan akademik, riset, dan teknologi, serta mengelola anggaran dengan transparansi. Juga berkontribusi dalam pengabdian masyarakat di SMK Jakarta dengan 30 peserta.",
  },
];

const JourneySection = () => {
  return (
    <section className="bg-white text-black py-16 px-6 md:px-12">
      <h2 className="text-4xl font-bold text-center text-black mb-12">
        My Journey
      </h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl w-full">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
              Education
            </h3>
            <div className="relative border-l-4 border-black pl-6 space-y-6">
              {educationData.map((edu, index) => (
                <JourneyCard key={index} {...edu} />
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
              Experience
            </h3>
            <div className="relative border-l-4 border-black pl-6 space-y-6">
              {experienceData.map((exp, index) => (
                <JourneyCard key={index} {...exp} />
              ))}
            </div>
          </div>

          {/* Organization Section */}
          <div className="md:col-span-2 flex flex-col items-center mt-2">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Organization
            </h3>
            <div className="relative border-l-4 border-black pl-6 space-y-6 w-full max-w-2xl">
              {organizationData.map((org, index) => (
                <JourneyCard key={index} {...org} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
