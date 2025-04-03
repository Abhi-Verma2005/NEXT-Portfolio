import { TechIcon } from "@/components/TechIcon";
import React from "@/assets/icons/react.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import mongo from "@/assets/icons/mongo.svg";
import node from "@/assets/icons/node.svg";
import express from "@/assets/icons/express.svg";

export const ContactSection = () => {
  const languages = [
    { name: "MongoDB", iconType: mongo },
    { name: "Express.js", iconType: express },
    { name: "React.js", iconType: React },
    { name: "Node.js", iconType: node },
  ];

  return (
    <section id="contact" className="p-16 flex flex-col items-center justify-center mb-10">
      <div className="mt-20 max-w-7xl">
        <SectionHeader eyebrow="Collaborate" title="Contact Me" description="Contact me for further collaborations!" />
        <Card className="border-2 md:flex border-white/10 mt-5">
          <div className="mx-10">
            <div className="inline-flex items-center gap-2">
              <StarIcon className="size-8 text-emerald-300" />
              <h2 className="font-serif text-3xl">Contact Me</h2>
            </div>
            <p className="text-sm mt-1 text-white/60">Let&apos;s collaborate and make something out of it!!</p>
            <div className="flex flex-col mt-4 justify-center items-center">
              {languages.map((item) => (
                <div key={item.name} className="inline-flex md:my-4 gap-4 m-1 items-center py-2 px-3 border-2 border-white/10 rounded-lg">
                  <TechIcon component={item.iconType} />
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
                <label htmlFor="name" className="text-sm font-medium mb-2">
                  Name:
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
                <label htmlFor="email" className="text-sm font-medium mb-2">
                  Email:
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
                <label htmlFor="message" className="text-sm font-medium mb-2">
                  Message:
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