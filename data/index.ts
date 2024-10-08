export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experiences" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm flexible with working in different routines.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },

  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "HBTU Kanpur Student",
    description: "BTech in Information Technology",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/hbtu.jpeg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    name: "Instalight",
    title: "Instalight - Social Media Website",
    des: "A website meant for socializing and connecting the world like Instagram using Firebase, React, Zustand, Chakra UI etc.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/firebase.svg", "vite.svg"],
    link: "https://github.com/AdnanOff029/Instalight_instagram_clone",
  },
  {
    id: 2,
    name: "Popcorn Time",
    title: "Popcorn Time",
    des: "Search your favourite movies, rate them, add them to your list and get a summary of your avg ratings, runtime and total watchtime using react, tailwind CSS and API(s).",
    img: "/p2.svg",
    iconLists: ["/tail.svg", "/re.svg"],
    link: "https://github.com/Adnanoff029/popcorn_time",
  },
  {
    id: 3,
    name: "Video Streaming Platform",
    title: "VideoTube",
    des: "Create videos, upload them or find your favourite creator, subscribe and support them for more content. Created using js, Express, MonogoBD, Cloudinary, JWT for authentication.",
    img: "/p2.svg",
    iconLists: ["/express.svg", "/node.svg", "/js.svg", "mongo.svg"],
    link: "https://github.com/AdnanOff029/backend_practice",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Salesine SDE Intern",
    desc: "Assisted in the development of a bot that would automatically join zoom meetings and analyze them to deliver a summary and key points of that meeting. ",
    className: "md:col-span-2",
    thumbnail: "/salesine.png",
  },
  {
    id: 2,
    title: "Web Developer Intern Codeclause",
    desc: "Designed and developed websites using reactjs, tailwindCSS.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/Adnanoff029",
  },
  {
    id: 2,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/adnan-khan-688820254/",
  },
];
