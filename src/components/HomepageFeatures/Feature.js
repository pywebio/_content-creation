import React from 'react';
import CodeBlock from './CodeBlock';

const inlineDiv = {
  display: "Inline"
};

const divHeight = {
  height: "30rem"
};

const headingStyle = {
  fontSize: "5rem"
};

function Feature({ code }) {
  return (
    <div className="row" style={divHeight}>
      <div className="md-col-6">
        <h3 style={headingStyle}>Chatbot</h3>
        <CodeBlock code={code} />
      </div>
      <div className="md-col-6">
        <img src="https://www.pyweb.io/assets/images/pixelbook-go.png" style={divHeight} />
      </div>
    </div>
  );
}

export default Feature;