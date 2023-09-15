"use client";

import SectionHeading from "@/components/SectionHeading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("#about");

  return (
    <section
      id="about"
      ref={ref}
      className="mb-28 max-w-[50rem] scroll-mt-28 text-center leading-8 sm:mb-0"
    >
      <article>
        <SectionHeading>About</SectionHeading>
        <div className="mb-10 px-4 text-center sm:px-36">
          <p className="my-4">
            With over three years of experience in{" "}
            <span className="font-semibold">
              Java, Python 3, JavaScript, TypeScript, React, Next.js, PostgreSQL
            </span>
            , and <span className="font-semibold">Git</span>, I've honed my
            skills to create robust and efficient solutions. Additionally, I've
            spent two years working with{" "}
            <span className="font-semibold">C#, NoSQL</span>, and{" "}
            <span className="font-semibold">Node.js</span>, expanding my
            expertise. I've also ventured into mobile development with{" "}
            <span className="font-semibold">React Native</span> and explored
            frontend innovation with{" "}
            <span className="font-semibold">Svelte</span> and{" "}
            <span className="font-semibold">Angular</span>.
          </p>
          <p>
            My passion for data-driven solutions is supported by a solid
            foundation in{" "}
            <span className="font-semibold">SciKit Learn, NumPy</span>, and{" "}
            <span className="font-semibold">Pandas</span>, along with a focus on{" "}
            <span className="underline">CI/CD</span>. While I'm familiar with
            various other technologies like{" "}
            <span className="font-semibold">Apache Spark, Hadoop</span>, and{" "}
            <span className="font-semibold">Tableau</span>, I'm always eager to
            embrace new challenges and leverage my diverse skill set for
            innovative and impactful solutions.
          </p>
        </div>
      </article>
    </section>
  );
}
