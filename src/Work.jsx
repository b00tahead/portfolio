import Section from "./Section";
import Link from "./Link";
import Project from "./Project";

export default function Work() {
  return (
    <>
      <Section>
        <h1 className="text-6xl">
          Scott May, UX Engineer at{" "}
          <Link href="https://ukhealthcare.uky.edu/">UK HealthCare</Link>
        </h1>
      </Section>
      <Section>
        <h2 className="text-6xl">
          Previously at{" "}
          <Link href="https://www.uky.edu/">University of Kentucky</Link>,{" "}
          <Link href="https://www.suran.com/">Suran Systems</Link>,{" "}
          <Link href="https://www.tempurpedic.com/">Tempur-Pedic</Link> and{" "}
          <Link href="https://www.lexmark.com/en_us.html">Lexmark</Link>
        </h2>
      </Section>
      <Section>
        <Project
          projectName="UKHC DevOps Design System"
          projectLink="https://www.figma.com/design/jZfNBrlwGlnvbFVsfObvvz/DevOps-Design-System?m=auto&t=QiHDjUXkPTEx1V4c-6"
          skill="ux design"
          where="uk healthcare"
        />
        <Project
          projectName="Code Compliance"
          projectLink="https://www.figma.com/design/zC9KjYqg9bhwIwx4ZG8vjf/Cart-Compliance?m=auto&t=QiHDjUXkPTEx1V4c-6"
          skill="ux design"
          where="uk healthcare"
        />
        <Project
          projectName="A&S Voices"
          projectLink="https://github.com/b00tahead/projects/tree/master/CoAS/as_voices"
          skill="ux design"
          where="university of kentucky"
        />
        <Project
          projectName="Digital Wayfinding"
          projectLink="https://github.com/b00tahead/projects/tree/master/CoAS/digital_signage"
          skill="ux design"
          where="university of kentucky"
        />
        <Project
          projectName="Digital Bookshelf"
          projectLink="https://dev-fio-bookshelf.pantheonsite.io/"
          skill="website"
          where="personal"
        />
      </Section>
    </>
  );
}
