import PropTypes from "prop-types";

export default function List({ children }) {
  return <ul className="list-disc list-inside">{children}</ul>;
}

List.propTypes = {
  children: PropTypes.node.isRequired,
};
