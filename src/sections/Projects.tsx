import Clustr from "@/assets/images/Clustr.png";
import AlgoJourney from "@/assets/images/algoJourney.png";
import superCarBlog from "@/assets/images/super.png";
import portfolio from "@/assets/images/portfolio.png";
import SolEth from "@/assets/images/soleth.png";
import chat from "@/assets/images/chatapp.png";
import Image from "next/image";
import React from "react";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Reactt from "@/assets/icons/react.svg";
import PostgreSQL from "@/assets/icons/postgresql.svg";
import Prisma from "@/assets/icons/Prisma.svg";
import Next from "@/assets/icons/icons8-nextjs.svg";
import Websocket from "@/assets/icons/websocket.svg";
import tailwind from "@/assets/icons/tailwind.svg";
import typescript from "@/assets/icons/typescript.svg";
import { TechIcon } from "@/components/TechIcon";
import solana from "@/assets/icons/solana.svg"
import ethereum from "@/assets/icons/ethereum.svg"

const portfolioProjects = [
  {
    name: "AlgoJourney",
    year: "2025",
    results: [
      { title: "Learned NEXT.js" },
      { title: "Clean code" },
      { title: "Prisma, Typescript" },
    ],
    description: "A social media app!",
    link: "https://algo-journey-3siz.vercel.app/",
    image: AlgoJourney,
    stack: [
      { name: "NEXT.js", iconType: Next },
    ],
  },
  {
    name: "Clustr",
    year: "2024",
    results: [
      { title: "Learned NEXT.js" },
      { title: "Image uploads, Post making" },
    ],
    description: "A social media app!",
    link: "https://clustr-sable.vercel.app/",
    image: Clustr,
    stack: [
      { name: "PostgreSQL", iconType: PostgreSQL },
      { name: "NEXT.js", iconType: Next },
    ],
  },
  {
    name: "Chatmon",
    year: "2024",
    results: [
      { title: "Learned native Websockets" },
      { title: "Image uploads, Post making, auth" },
      { title: "Github 3D globe using AceternityUI" },
    ],
    description: "A real time chat application",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7279800412541538304/",
    image: chat,
    stack: [
      { name: "Websockets", iconType: Websocket },
      { name: "Typescript", iconType: typescript },
    ],
  },
  {
    name: "SolEth Web3 Wallet",
    year: "2025",
    results: [
      { title: "Learned public/private keys" },
      { title: "Key generation" },
      { title: "Mnemonic generation and Clean UI" },
    ],
    description: "A real time chat application",
    link: "https://web-wallet-three-mu.vercel.app/",
    image: SolEth,
    stack: [
      { name: "Solana", iconType: solana },
      { name: "Ethereum", iconType: ethereum },
    ],
  },
  {
    name: "CarBlog",
    year: "2024",
    results: [
      { title: "Learned React.js" },
      { title: "Image uploads, Post making, auth" },
      { title: "Multiple themes using DaisyUi" },
    ],
    description: "A blog app for super cars!",
    link: "https://blog-website-car.netlify.app/",
    image: superCarBlog,
    stack: [
      { name: "React.js", iconType: Reactt },
      { name: "Tailwind", iconType: tailwind },
    ],
  },
  {
    name: "Portfolio",
    year: "2024",
    results: [
      { title: "Learned tailwind Styling" },
      { title: "Learned writing clean code" },
    ],
    description: "A blog app for super cars!",
    link: "https://next-portfolio-qcgz.vercel.app/",
    image: portfolio,
    stack: [
      { name: "Typescript", iconType: typescript },
      { name: "NEXT.js", iconType: Next },
    ],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="project" className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from bg-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl text-center md:text-5xl mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg max-wd-md lg:text-lg mx-auto text-white/60 mt-4">
          See how I transform concept into engaging digital experiences.
        </p>

        <div className="flex md:mt-20 flex-col gap-16 mt-10">
          {portfolioProjects.map((project, projectIndex) => (
            <div
              key={project.name}
              className="bg-gray-800 border-2 border-white/10 sticky top-16 md:pt-12 lg:pt-16 lg:px-20 md:px-10 rounded-3xl relative after:content-[''] z-0 after:z-10 overflow-hidden after:absolute after:inset-0 after:outline-2 after:outline after:outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 after:pointer-events-none"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 bg-clip-text text-transparent p-8">
                    <span>{project.name}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <div className="md:flex">
                    <h3 className="m-1 font-serif md:text-4xl md:mt-5 text-2xl mt-2">
                      {project.name}
                    </h3>
                    {project.stack.map((item) => (
                      <div key={item.name} className="inline-flex gap-4 m-1 items-center py-2 px-3 border-2 border-white/10 rounded-lg">
                        <TechIcon component={item.iconType} />
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                  <hr className="border-t-2 border-white/5 mt-4" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li className="flex md:text-base gap-2 text-sm text-white/50" key={result.title}>
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white inline-flex items-center gap-2 mt-8 justify-center text-gray-950 h-12 px-6 w-full md:w-auto rounded-xl font-semibold">
                      <span>See this Working</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    className="mt-8 -mb-4 rounded-2xl lg:mt-0 lg:h-full lg:w-auto left-0 lg:max-w-none lg:absolute"
                    src={project.image}
                    alt={project.name}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};