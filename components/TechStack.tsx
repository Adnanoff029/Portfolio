import { StickyScroll } from "./ui/StickyScrollReveal";
import { TracingBeam } from "./ui/TracingBeam";

const content = [
  {
    title: "React",
    description:
      "React is a powerful JavaScript library for building dynamic user interfaces. I leverage React to create responsive, component-based web applications with efficient state management and seamless user experiences. Its virtual DOM and extensive ecosystem enable me to develop scalable and maintainable front-end solutions.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="/re.svg"
          width={200}
          height={200}
          className="h-full w-full"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Next.js",
    description:
      "Next.js is a powerful React framework for building server-rendered applications and static websites. I use Next.js to create fast, SEO-friendly web applications with features like automatic code splitting, optimized performance, and seamless routing.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="/next.svg"
          width={300}
          height={300}
          className="h-full w-full"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "CSS Frameworks",
    description:
      "I utilize Tailwind CSS, Chakra UI, Bootstrap and Aceternity to streamline the development of responsive, aesthetically pleasing web interfaces.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white font-bold">
        <div className="grid col-span-2 row-span-2 items-center">
          <p className="">Tailwind CSS</p>
          <p>Bootstrap</p>
          <p>Chakra UI</p>
          <p>Aceternity</p>
        </div>
      </div>
    ),
  },
  {
    title: "Node.js",
    description:
      "Node.js is a powerful runtime environment for executing JavaScript on the server side. I use Node.js to build scalable, high-performance applications with asynchronous, event-driven architecture. Its extensive package ecosystem (npm) and non-blocking I/O model have enabled me to develop efficient server-side solutions, from RESTful APIs to real-time applications.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="/ndoe.jpg"
          width={5000}
          height={5000}
          className="h-full w-full object-cover object-center"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Express",
    description:
      "Express is a minimal and flexible Node.js web application framework. I use Express to build robust server-side applications and RESTful APIs with ease. Its simplicity and powerful middleware support allow me to develop scalable, high-performance backend solutions efficiently.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="/express.png"
          width={300}
          height={300}
          className="h-full w-full"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "MongoDB",
    description:
      "MongoDB is a NoSQL database known for its flexibility and scalability. I use MongoDB to store and manage large volumes of structured and unstructured data. Its document-oriented model and powerful querying capabilities allow me to build efficient, data-driven applications that can handle diverse data types and complex queries.",
    content: (
      <div className="h-full w-full  flex items-center justify-center bg-blue-300 text-white">
        <img
          src="/mongo.gif"
          width={300}
          height={300}
          className="h-full w-full"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Firebase",
    description:
      "Firebase is a comprehensive platform for building web and mobile applications. I use Firebase for its real-time database, authentication, hosting, and cloud functions. Its suite of tools allows me to quickly develop, deploy, and scale applications with robust backend services, ensuring seamless user experiences and efficient development workflows.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="/firesbase.jpg"
          width={300}
          height={300}
          className="h-full w-full"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Version control is vital for managing code changes and collaboration in software development. I use Git extensively for branching, merging, and conflict resolution. It has streamlined teamwork in collaborative projects and ensured a stable, organized codebase in both professional and personal projects.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="/git-blog-header.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

export default function TechStack() {
  return (
    <div className="pt-10 mt-10">
      <div className="items-center flex justify-center flex-col gap-5">
        <h1 className="heading">
          My Technology <span className="text-purple"> Stack</span>
        </h1>
        <p className="text-xl">
          <span className="text-purple font-bold">Scroll</span> on the section
          to see more.
        </p>
      </div>
      <div className="p-10">
        <StickyScroll content={content} />
      </div>
    </div>
  );
}
