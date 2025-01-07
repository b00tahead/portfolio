import Section from "./Section";
import Link from "./Link";

export default function Work() {
  return (
    <>
      <Section>
        <h1 className="text-6xl">
          Check out my <Link href="/documents/CV.pdf">resume</Link> and{" "}
          <Link href="https://github.com/b00tahead">GitHub</Link>
        </h1>
      </Section>
      <Section>
        <h2 className="text-6xl">
          Feel free to reach out on{" "}
          <Link href="https://www.linkedin.com/in/mayscott/">LinkedIn</Link> or{" "}
          <Link href="mailto:smay44@gmail.com">email</Link>
        </h2>
      </Section>
    </>
  );
}
