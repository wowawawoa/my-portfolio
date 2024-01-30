import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BsGithub, BsArrowUpRightSquare, BsYoutube } from "react-icons/bs";

const projects = [
  {
    name: "Coffeetopia",
    description:
      "A coffee community designed for coffee fans and people who like drinking coffee and designed to provide basic functionalities to improve interactivity inside the coffee community and attract more users.",
    image: "/Coffeetopia.png",
    github: "https://github.com/wowawawoa/coffeetopia-cra-new",
    link: "https://coffeetopia-cra-new.vercel.app/",
    video: "https://youtu.be/wt6fYOZuaK0",
  },
  {
    name: "PetNanny",
    description:
      "An online platform that connects pet owners with trusted pet sitters in their local area. It offers a convenient and reliable solution for pet owners who need to find a caring and experienced individual to look after their pets when they are away.",
    image: "/PetNanny.png",
    github: "https://github.com/wowawawoa/pn-app",
    link: "https://pn-app-eight.vercel.app/",
    video: "https://youtu.be/esGcdVS612c",
  },
  {
    name: "ForKitchen",
    description:
      "A business landing page designed for a kitchen design and renovation company to display its information, such as services and project gallery, and let customers can contact the company immediately using a contact form.",
    image: "/ForKitchen.png",
    github: "https://github.com/wowawawoa/forkitchen-nextjs",
    link: "https://www.forkitchenadelaide.com.au/",
    video: "",
  },
  {
    name: "AIBoostedBlog",
    description:
      "A SEO-friendly blog generate web application, which can generate a blog post based on the user's input. The application will generate a blog description and post based on the topic and keywords input by user.",
    image: "/AiBoostedBlog.png",
    github: "https://github.com/wowawawoa/AI-Blog",
    link: "https://aiboostedblog-mw868.ondigitalocean.app/",
    video: "",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <div>
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      {project.video === "" ? null : (
                        <Link href={project.video} target="_blank">
                          <BsYoutube
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
