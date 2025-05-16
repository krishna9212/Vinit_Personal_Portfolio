import React from "react";
import "./../App.css";

function About() {
  return (
    <div className="bg-background text-foreground p-8 text-white h-full w-full">
      <div className="spacer h-[10%] md:h-[5%] w-full text-transparent">.</div>
      <div className="main-content h-[90%] md:h-[95%] w-full overflow-y-auto">
        <h1 className="text-4xl font-extrabold mb-6">About Me</h1>
        <p className="mb-6 text-lg leading-relaxed max-w-3xl mx-auto">
          I am <strong>Vinit</strong>, a dedicated and results-driven Flutter Developer with over 5 years of experience in building high-performance, cross-platform mobile applications. Based in Gurugram, I specialize in <strong>Dart, Flutter SDK</strong>, and have strong knowledge of native iOS (Swift) and Android (Java/Kotlin).
        </p>
        <p className="mb-6 text-lg leading-relaxed max-w-3xl mx-auto">
          I have worked on projects across health tech, enterprise apps, and admin panels. My work focuses on delivering seamless user experiences, integrating secure APIs and payment systems, and building scalable apps with Clean Architecture using Bloc and dependency injection. I also lead teams, conduct code reviews, and implement CI/CD pipelines to ensure high-quality code and deployments.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-8">What I'm Doing</h2>
        <div className="flex flex-col md:flex-row items-stretch overflow-hidden justify-around gap-6 w-full">
          <div className="bg-card bg-[#212123] p-6 rounded-lg shadow-lg w-full md:min-w-[300px] md:max-w-[45%] duration-700 transition-all hover:scale-105">
            <h1 className="text-2xl mb-4 text-center">📱</h1>
            <h3 className="text-2xl font-bold text-center mb-2">
              Mobile App Development
            </h3>
            <p className="text-center whitespace-normal">
              Building cross-platform mobile apps using Flutter, ensuring performance, responsiveness, and scalability across iOS and Android.
            </p>
          </div>
          <div className="bg-card bg-[#212123] p-6 rounded-lg shadow-lg w-full md:min-w-[300px] md:max-w-[47%] duration-700 transition-all hover:scale-105">
            <h1 className="text-2xl mb-4 text-center">🔐</h1>
            <h3 className="text-2xl font-bold text-center mb-2">Secure Integration</h3>
            <p className="text-center whitespace-normal">
              Expertise in integrating APIs, payment gateways, encryption/decryption, and third-party SDKs like WebEngage, Agora, and Firebase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
