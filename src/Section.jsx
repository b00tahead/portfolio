import PropTypes from "prop-types";

export default function Section({ spaceY, children }) {
  return (
    <section className="py-16 tracking-wide">
      <div className={`text-sm leading-7 ${spaceY || "space-y-16"}`}>
        {children}
      </div>
    </section>
  );
}

Section.propTypes = {
  spaceY: PropTypes.string,
  children: PropTypes.node.isRequired,
};
