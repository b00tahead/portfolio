import Link from "./Link";
import List from "./List";
import PastJob from "./PastJob";
import Project from "./Project";
import Section from "./Section";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <main className="container antialiased px-8">
        <h1 className="text-4xl font-bold tracking-wide py-10">sm.</h1>

        <Section title="Scott May">
          <p>Frontend Developer</p>
        </Section>

        <Section title="About">
          <p>
            As a frontend developer at UK HealthCare, I have several years of
            experience in building and deploying single-page applications and
            websites using React and WordPress, as well as creating standardized
            design library components and architecture for React applications.
          </p>

          <p>
            My core competencies include design systems, web development, UX,
            and Azure. I am passionate about creating user-centric and
            accessible web solutions that enhance the health care experience for
            patients, providers, and staff. I also enjoy leading and
            collaborating with an internal team of developers and designers, and
            I am always eager to learn new technologies and best practices in
            the field of UX engineering.
          </p>
        </Section>

        <Section title="Work">
          <p>
            I have worked in several different fields of web development and
            design over the last decade. Here&rsquo;s a brief history of work
            for the last few years:
          </p>
          <List>
            <PastJob employer="UK HealthCare" position="Frontend Developer" />
            <PastJob
              employer="UK College of Engineering"
              position="Drupal Developer"
            />
            <PastJob
              employer="UK College of Arts & Sciences"
              position="Interaction Designer"
            />
            <PastJob employer="Suran Systems" position="Frontend Developer" />
            <PastJob
              employer="Tempur Sealy International"
              position="Help Desk Technician"
            />
            <PastJob
              employer="Lexmark"
              position="Junior System Administrator"
            />
          </List>
        </Section>

        <Section title="Skills">
          <p>
            I&rsquo;ve picked up a few tricks over the years and feel pretty
            confident with the following tools and technologies:
          </p>
          <List>
            <li>JavaScript, React, Node.js</li>
            <li>Design Systems, UI/UX, Interaction Design</li>
            <li>Figma, Adobe XD</li>
            <li>PHP, WordPress, Drupal</li>
            <li>Microsoft Azure</li>
          </List>
        </Section>

        <Section title="Projects">
          <p>
            Here&rsquo;s a list of some of my favorite projects I&rsquo;ve
            worked on:
          </p>
          <List>
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
            When I&rsquo;m not working you can usually catch me in the gym,
            strumming my guitar, or roaming the park with my {year - 2020} year
            old German Shepherd, Remi.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Feel free to send me an{" "}
            <Link href="mailto:smay44@gmail.com">email</Link> if you&rsquo;d
            like to get in touch!
          </p>
        </Section>
      </main>
    </>
  );
}

// Get the current year
// const year = new Date().getFullYear();
