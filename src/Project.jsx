import PropTypes from "prop-types";

export default function Project({ projectName, projectLink, skill, where }) {
  return (
    <div>
      <h3 className="text-white text-2xl">
        <a href={projectLink}>{projectName}</a>
      </h3>
      <h4 className="text-base text-slate-400">
        {skill} · {where}
      </h4>
    </div>
  );
}

Project.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
  where: PropTypes.string.isRequired,
};
