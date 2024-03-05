import React, { useEffect, useRef } from "react";
import hljs from "highlight.js";
// Import the default stylesheet or choose one you like
import "highlight.js/styles/default.css";

function CodeSnippet({ code, language }) {
  const codeRef = useRef(null);

  useEffect(() => {
    // Highlight the syntax inside the ref element
    hljs.highlightElement(codeRef.current);
  }, [code, language]);

  return (
    <pre>
      <code ref={codeRef} className={language}>
        {code}
      </code>
    </pre>
  );
}

export default CodeSnippet;
