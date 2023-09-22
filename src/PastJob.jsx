import PropTypes from "prop-types";

export default function PastJob({ employer, position }) {
  return (
    <li>
      <span className="font-semibold">{employer}</span> - {position}
    </li>
  );
}

PastJob.propTypes = {
  employer: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};
