import PropTypes from "prop-types";
import Section from "./Section";

export default function About() {
  return (
    <Section spaceY="space-y-12">
      <Text>
        I&apos;ve always been drawn to the human side of tech, even before I
        knew I was actually doing UX. I started out in IT support where I
        learned firsthand how frustrated users get when technology doesn&apos;t
        make sense. That experience has stuck with me.
      </Text>
      <Text>
        My development career kicked off building software for nonprofits, which
        taught me something crucial: good UX isn&apos;t just about aesthetics
        &mdash; it&apos;s about empowering people to do meaningful work without
        fighting their tools. I carried this mindset through several roles in
        higher ed, where I split my time between Drupal development and crafting
        interactive experiences. Building touchscreen applications really opened
        my eyes to how design patterns can make or break user interaction.
      </Text>
      <Text>
        The real turning point came in my current role at UK HealthCare. I
        started as a WordPress developer, but when our senior frontend developer
        left, I jumped in to maintain our React workflow. I had already started
        building a component library to make our UI development more consistent
        and efficient. What began as a practical solution to speed up
        development turned into a passion for design systems and systematic
        approaches to UX. I found myself spending more and more time thinking
        about user flows, interaction patterns, and how to create interfaces
        that feel natural in a healthcare context.
      </Text>
      <Text>
        Throughout my career, I&apos;ve realized my true motivation isn&apos;t
        just about designing better websites or apps &mdash; it&apos;s about
        making people&apos;s lives better through thoughtful design of their
        everyday interactions, digital or otherwise. Whether I&apos;m
        collaborating with developers on component APIs or sketching out user
        flows, I&apos;m driven by the opportunity to solve human problems. My
        primary career goal is to move into experience design and design
        strategy, where I can help shape not just individual touchpoints, but
        entire ecosystems of human interaction.
      </Text>
    </Section>
  );
}

function Text({ children }) {
  return (
    <p className="text-xl leading-8 tracking-wide text-justify">{children}</p>
  );
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
};
