import { useRef, useEffect } from "react";

function About() {

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function showValue() {
    alert(inputRef.current.value);
  }

  return (
    <div className="container">
      <h2>About Page</h2>

      <input ref={inputRef} placeholder="Enter something" />

      <br /><br />

      <button onClick={showValue}>Show Value</button>
    </div>
  );
}

export default About;