const AboutSection = () => {
  return (
    <section
      className="bg-gray-900 text-white py-16 px-8 text-center"
      id="aboutme"
    >
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <p className="text-orange-400 italic text-lg mb-4">
        "Shalat, Eat, Code , Repeat!"
      </p>
      <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Mahasiswa Teknik Informatika semester 6 yang memiliki pengalaman kerja
        di bidang teknologi. Aktif berorganisasi dengan kemampuan kepemimpinan
        yang baik. Percaya diri dalam mengelola projek dengan skala kecil hingga
        sedang, bisa bekerja sama dalam tim, serta memiliki kemampuan komunikasi
        yang baik. Memiliki minat di dunia teknologi khususnya sebagai
        <span className="font-bold"> Web Developer</span> dan mempunyai skill di
        beberapa pemrograman dasar web seperti
        <span className="font-bold"> HTML, CSS, PHP, dan Javascript.</span>
      </p>
    </section>
  );
};

export default AboutSection;
