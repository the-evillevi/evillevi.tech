"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin, BsGithub } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

import Anchor from "@/components/Anchor";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("#experience");

  return (
    <section
      id="experience"
      ref={ref}
      className="mb-28 max-w-[50rem] scroll-mt-28 text-center sm:mb-0"
    >
      <article>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        >
          Experience
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-2xl"
        >
          I'm a <span className="font-bold">Software Developer</span> with{" "}
          <span className="font-bold">Machine Learning Engineering</span>{" "}
          experience.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-2xl"
        >
          My focus is <span className="font-bold">Fullstack Development</span>{" "}
          of websites and applications with{" "}
          <span className="underline">React (Next.js)</span> and{" "}
          <span className="underline">serverless (AWS)</span>, with a{" "}
          <span className="font-bold">ML Engineering</span> research internship
          to bring to the table.
        </motion.p>
      </article>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
      >
        <Link
          href="#"
          className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
        >
          Contact me here
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-2" />
        </Link>
        <Anchor download href="/CV.pdf">
          Download CV
          <HiDownload className="opacity-70 transition group-hover:translate-y-1" />
        </Anchor>
        <div className="flex flex-row items-center justify-center gap-2 text-lg font-medium">
          <Anchor href="">
            <BsLinkedin className="opacity-70" />
          </Anchor>
          <Anchor href="">
            <BsGithub />
          </Anchor>
        </div>
      </motion.div>
    </section>
  );
}
