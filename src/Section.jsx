import PropTypes from "prop-types";

export default function Section({ title, children }) {
  return (
    <section className="py-7 tracking-wide">
      <h2 className="text-lg text-emerald-300 font-semibold mb-1">{title}</h2>
      <div className="text-sm leading-7 space-y-4">{children}</div>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
