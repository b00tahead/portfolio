import PropTypes from "prop-types";

export default function PastJob({
  employer,
  position,
  dates,
  experience = "",
}) {
  return (
    <div>
      <h6 className="font-semibold text-base">
        {position} - {employer}
      </h6>
      <p className="italic">{dates}</p>
      {experience && <p>{experience}</p>}
    </div>
  );
}

PastJob.propTypes = {
  employer: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  experience: PropTypes.string,
  dates: PropTypes.string.isRequired,
};
