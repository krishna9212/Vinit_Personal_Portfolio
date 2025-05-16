import React from "react";
import avatarImg from "./../assets/avtar.png"; // Replace with Vinit's avatar if available

const userInfo = {
  name: "Vinit",
  designation: "Flutter Developer",
  contact: {
    email: "vinit.flutter.28@gmail.com",
    phone: "7597844434",
    location: "Gurugram, India",
  },
  platforms: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vinit-kumawat-67a05a1a0/",
      iconClass: "fa-brands fa-linkedin",
    },
  ],
};

const Sidebar = () => {
  return (
    <div className="sidebar h-full w-full bg-[#1E1E1F] rounded-none md:rounded-3xl p-6 outline-1 outline-white outline-dashed flex flex-col gap-3">
      <div className="topsidebar h-[55%] w-full flex flex-col items-center gap-3 pt-3">
        <div className="img h-[70%] w-[90%] bg-[#373738] rounded-xl">
          <img
            src={avatarImg}
            alt="avatar logo"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="name h-[10%] w-full">
          <h1 className="text-3xl text-center tracking-wide font-bold text-white whitespace-nowrap">
            {userInfo.name}
          </h1>
        </div>
        <div className="designation h-[20%] w-full flex justify-center">
          <span className="bg-[#2B2B2C] p-1 px-3 rounded-lg text-center text-white font-bold whitespace-nowrap">
            {userInfo.designation}
          </span>
        </div>
      </div>

      <div className="bottomsidebar h-[45%] w-full flex flex-col items-center gap-4">
        {Object.keys(userInfo.contact).map((key, index) => (
          <div key={index} className="contact-section h-[20%] w-full flex gap-2">
            <div className="leftbox h-[90%] w-[20%] rounded-xl bg-[#282829] flex items-center justify-center">
              <span className="text-3xl">
                {key === "email" && "✉️"}
                {key === "phone" && "📞"}
                {key === "location" && "📍"}
              </span>
            </div>
            <div className="rightbox h-full w-[75%] flex flex-col gap-1">
              <div className="right-top-box h-1/3 w-full">
                <p className="text-neutral-400 text-sm uppercase">{key}</p>
              </div>
              <div className="right-bottom-box h-[66.667%] w-full text-white text-base">
                <h1>{userInfo.contact[key]}</h1>
              </div>
            </div>
          </div>
        ))}

        <div className="platform h-[20%] w-full flex gap-2">
          <div className="leftbox h-[90%] w-[20%] rounded-xl bg-[#282829] flex items-center justify-center">
            <h1 className="text-3xl">📲</h1>
          </div>
          <div className="rightbox h-full w-[75%] flex flex-col gap-1">
            <div className="right-top-box h-1/3 w-full">
              <p className="text-neutral-400 text-sm uppercase">Platforms</p>
            </div>
            <div className="right-bottom-box h-[66.667%] w-full text-white text-xl flex gap-2">
              {userInfo.platforms.map((platform, index) => (
                <span key={index}>
                  <a
                    className="p-1"
                    href={platform.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className={platform.iconClass}></i>
                  </a>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
