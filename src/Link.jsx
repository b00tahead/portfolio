import PropTypes from "prop-types";

export default function Link({ href, children }) {
  return (
    <a className="underline hover:text-emerald-300" href={href}>
      {children}
    </a>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
