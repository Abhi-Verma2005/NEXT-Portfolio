import mac from "@/assets/images/macbookpro.png"
import WorldMap from "@/components/ui/world-map";
import { WorldMapDemo } from "@/components/world";
import { TechIcon } from "@/components/TechIcon";
import Html from "@/assets/icons/html5.svg"
import CSS from "@/assets/icons/css3.svg"
import Javascript from "@/assets/icons/square-js.svg"
import React from "@/assets/icons/react.svg"
import Github from "@/assets/icons/github.svg"
import Chrome from "@/assets/icons/chrome.svg"
import Next from "@/assets/icons/icons8-nextjs.svg"
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import PostgreSQL from "@/assets/icons/postgresql.svg";
import Prisma from "@/assets/icons/Prisma.svg";
import Image from "next/image";
import pfp from "@/assets/images/book.webp"
import newton from "@/assets/images/newton.webp"
import map from "@/assets/images/map.png"
import solana from "@/assets/icons/solana.svg"
import ethereum from "@/assets/icons/ethereum.svg"
import webrtc from "@/assets/icons/webrtc.svg"
import linkedin from "@/assets/icons/linkedin.svg"
import Websocket from "@/assets/icons/websocket.svg"
import tailwind from "@/assets/icons/tailwind.svg"
import typescript from "@/assets/icons/typescript.svg"
import mongo from "@/assets/icons/mongo.svg"
import node from "@/assets/icons/node.svg"
import express from "@/assets/icons/express.svg"
import { Fragment } from "react";

export const ContactSection = () => {
  const languages = [
    { name: "MongoDB", iconType: mongo  },
    { name: "Express.js", iconType: express  },
    { name: "React.js", iconType: React  },
    { name: "Node.js", iconType: node  },
  ]

  return (
    <section id="contact" className="p-7 flex flex-col items-center justify-center mb-10">
      <div className="mt-20 max-w-7xl">
        
      <SectionHeader eyebrow="Collaborate" title="Contact Me" description="Contact me for further collaborations!"/>
        <Card className="border-2 md:flex border-white/10 mt-5">
        <div className="mx-10">
              <div className="inline-flex items-center gap-2">
                <StarIcon className="size-8 text-emerald-300"/>
                <h2 className="font-serif text-3xl">Contact Me</h2>
              </div>
                <p className="text-sm mt-1 text-white/60">Let's collaborate and make something out of it!!</p>
                <div className="flex flex-col mt-4 justify-center items-center">
                  {languages.map((item) => (
                    <div key={item.name} className="inline-flex md:my-4 gap-4 m-1 items-center py-2 px-3 border-2 border-white/10 rounded-lg"> 
                    <TechIcon component={item.iconType}/>
                    <span>{item.name}</span>
                  </div>
                  ))}
                </div>
                
        </div>
        <div className="m-10">
              <form
                action="https://getform.io/f/bkkkwwpb"
                method="POST"
                className="flex flex-col gap-6 max-w-lg mx-auto p-6"
              >
                {/* Name Field */}
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Bruce Wayne"
                    required
                    className="border border-gray-300 bg-transparent rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  />
                </div>

                {/* Email Field */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="bruce@wayne.com"
                    required
                    className="border border-gray-300 bg-transparent rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  />
                </div>

                {/* Message Field */}
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Hi there"
                    required
                    className="border border-gray-300 bg-transparent rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300 h-32"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg border border-gray-300 font-semibold hover:bg-gray-950 transition"
                >
                  Send
                </button>
              </form>
          </div>
        </Card>
        
      </div>
    </section>
  );
};
