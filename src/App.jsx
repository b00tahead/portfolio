import Link from "./Link";
import List from "./List";
import PastJob from "./PastJob";
import Project from "./Project";
import Section from "./Section";

export default function Home() {
  return (
    <>
      <main className="container antialiased px-8">
        <h1 className="text-4xl font-bold tracking-wide py-10">sm.</h1>

        <Section title="Scott May">
          <p>UX Engineer</p>
        </Section>

        <Section title="About">
          <p>
            I&apos;ve always been drawn to the human side of tech, even before I
            knew I was actually doing UX. I started out in IT support where I
            learned firsthand how frustrated users get when technology
            doesn&apos;t make sense. That experience has stuck with me.
          </p>

          <p>
            My development career kicked off building software for nonprofits,
            which taught me something crucial: good UX isn&apos;t just about
            aesthetics – it&apos;s about empowering people to do meaningful work
            without fighting their tools. I carried this mindset through several
            roles in higher ed, where I split my time between Drupal development
            and crafting interactive experiences. Building touchscreen
            applications really opened my eyes to how design patterns can make
            or break user interaction.
          </p>
          <p>
            The real turning point came in my current role at UK HealthCare. I
            started as a WordPress developer, but when our senior frontend
            developer left, I jumped in to maintain our React workflow. I had
            already started building a component library to make our UI
            development more consistent and efficient. What began as a practical
            solution to speed up development turned into a passion for design
            systems and systematic approaches to UX. I found myself spending
            more and more time thinking about user flows, interaction patterns,
            and how to create interfaces that feel natural in a healthcare
            context.
          </p>
          <p>
            Throughout my career, I&apos;ve realized my true motivation
            isn&apos;t just about designing better websites or apps – it&apos;s
            about making people&apos;s lives better through thoughtful design of
            their everyday interactions, digital or otherwise. Whether I&apos;m
            collaborating with developers on component APIs or sketching out
            user flows, I&apos;m driven by the opportunity to solve human
            problems. My primary career goal is to move into experience design
            and design strategy, where I can help shape not just individual
            touchpoints, but entire ecosystems of human interaction.
          </p>
        </Section>

        <Section title="Work">
          <p>
            I have worked in several different fields of web development and
            design over the last decade. Here is a brief history of work for the
            last few years:
          </p>

          <PastJob
            employer="UK HealthCare"
            position="UX Engineer"
            dates="July 2020 - present"
            experience="Lead design system initiative to improve developer workflow and end-user experience. Drive user research and requirements gathering to identify pain points and develop user-centered solutions."
          />
          <PastJob
            employer="UK College of Engineering"
            position="Drupal Developer"
            dates="September 2019 - July 2020"
            experience="Designed and developed user-centered Drupal theme enabling faculty and students to effectively showcase their research and organizations."
          />
          <PastJob
            employer="UK College of Arts & Sciences"
            position="Web Applications Developer"
            dates="March 2017 - August 2019"
            experience="Created interactive touchscreen applications for wayfinding and recruiting, focusing on intuitive user interaction. Managed multiple Drupal sites while improving content management workflows."
          />
          <PastJob
            employer="Suran Systems"
            position="Frontend Developer"
            dates="August 2015 - March 2017"
            experience="Designed and developed frontend interfaces for member management, giving, and payroll solutions focused on user-friendly nonprofit workflows."
          />
        </Section>

        <Section title="Skills">
          <p>
            I have picked up a few tricks over the years and feel pretty
            confident with the following tools and technologies:
          </p>
          <List>
            <li>
              <span className="font-semibold">Design &amp; UX</span> - Design
              systems, component libraries, accessibility, UI design,
              interaction design, user research &amp; requirements gathering,
              wireframing &amp; prototyping, Figma
            </li>
            <li>
              <span className="font-semibold">Development</span> -
              JavaScript/TypeScript, React, Node.js, PHP
            </li>
            <li>
              <span className="font-semibold">Platforms &amp; Tools</span> -
              Drupal, WordPress, Microsoft Azure, Git/version control
            </li>
          </List>
        </Section>

        <Section title="Projects">
          <p>
            Here is a list of some of my favorite projects I have worked on:
          </p>
          <List>
            <Project
              title="Latest Portfolio"
              link="https://github.com/b00tahead/projects/blob/master/UXPortfolio.pdf"
            />
            <Project
              title="A&S Voices"
              link="https://github.com/b00tahead/projects/tree/master/CoAS/as_voices"
            />
            <Project
              title="Digital Signage Wayfinding"
              link="https://github.com/b00tahead/projects/tree/master/CoAS/digital_signage"
            />
            <Project
              title="Just Food"
              link="https://github.com/b00tahead/projects/tree/master/CoAS/just_food"
            />
            <Project
              title="UK Athletics Schedule Signage"
              link="https://github.com/b00tahead/projects/tree/master/CoAS/uk_athletics"
            />
            <Project
              title="College of Engineering Style Guide"
              link="https://github.com/b00tahead/projects/tree/master/CoE/style_guide"
            />
            <Project
              title="College of Engineering Lab Sites"
              link="https://github.com/b00tahead/projects/tree/master/CoE/lab_sites"
            />
          </List>
        </Section>

        <Section title="Interests">
          <p>
            Outside of work, I enjoy playing guitar, going for runs, and hanging
            out with my beautiful wife and our sweet German Shepherd, Remi.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Feel free to send me an{" "}
            <Link href="mailto:smay44@gmail.com">email</Link> if you would like
            to get in touch!
          </p>
        </Section>
      </main>
    </>
  );
}

// Get the current year
// const year = new Date().getFullYear();
