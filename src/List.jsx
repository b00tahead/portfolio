import PropTypes from "prop-types";

export default function List({ children }) {
  return <ul className="list-disc list-outside ml-3">{children}</ul>;
}

List.propTypes = {
  children: PropTypes.node.isRequired,
};
