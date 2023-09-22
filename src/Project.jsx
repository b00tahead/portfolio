import PropTypes from "prop-types";

import Link from "./Link";

export default function Project({ title, link }) {
  return (
    <li>
      <Link href={link}>{title}</Link>
    </li>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
