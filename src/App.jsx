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
            Over the last decade, I have worked anywhere from a full-stack PHP
            developer to an interactive designer for multi-touch software to a
            frontend developer. Throughout all my jobs the one role that I
            consistently fill is that of a UX designer/engineer. My primary
            focus is always centered around providing the best experiences
            possible for both our customers who use our applications and the
            developers that use our tools to build those applications. I have
            worked for global tech companies, SaaS companies, higher education,
            and currently healthcare.
          </p>

          <p>
            In my current role, I act as the team lead for our frontend
            development team. In addition to working on multiple React
            applications, I also lead the work on redesigning our design system
            and component library. Other responsibilities include product
            management, the occasional WordPress site/plugin, QA/testing, and
            anywhere else my team needs me.
          </p>
        </Section>

        <Section title="Work">
          <p>
            I have worked in several different fields of web development and
            design over the last decade. Here is a brief history of work for the
            last few years:
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
            I have picked up a few tricks over the years and feel pretty
            confident with the following tools and technologies:
          </p>
          <List>
            <li>Design Systems, UI/UX, Interaction Design</li>
            <li>Figma, Adobe XD</li>
            <li>JavaScript, React, Node.js</li>
            <li>PHP, WordPress, Drupal</li>
            <li>Microsoft Azure</li>
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
            Outside of work, I love to work on various projects using Python,
            JS/TS, PHP, and Go. Aside from programming, I enjoy playing guitar,
            going for runs, and hanging out with my beautiful wife and our sweet
            German Shepherd, Remi.
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
