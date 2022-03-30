function Example(props) {
  return (
    <div className="progress-box">
      <div className="progress">{props.children}</div>
      <span>{props.label}</span>
    </div>
  );
}
export default Example;
