export default ({ backgroundColor, label, textColor, action }) => {
  return (
    <button
      className="btn btn-primary"
      style={{ backgroundColor: backgroundColor, color: textColor }}
      onClick={action}
    >
      {label}
    </button>
  );
};
