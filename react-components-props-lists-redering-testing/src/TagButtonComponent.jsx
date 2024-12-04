import "./TagButtonComponentStyle.css";
function TagButtonComponent({ title, children }) {
  return (
    <button className='tagButton'>
      {title}
      {children}
    </button>
  );
}

export default TagButtonComponent;