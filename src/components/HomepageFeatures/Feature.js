import React from 'react';
import CodeBlock from './CodeBlock';

const getRowStyle = (feature) => {
  return {
    alignItems: "center",
    backgroundImage: `linear-gradient(to right, ${feature.startColor}, ${feature.endColor})`,
    padding: "0",
    justifyContent: "center"
  };
}

const imgStyle = {
  display: "flex",
  height: "20rem",
  margin: "auto"
};

const headingStyle = {
  fontSize: "4rem",
  margin: "auto"
};

function Feature({ feature }) {
  return (
    <div className="row" style={getRowStyle(feature)}>
      <div className="md-col-6">
        <h3 style={headingStyle}>{feature.title}</h3>
        <img src={feature.url} style={imgStyle} />
      </div>
      <div className="md-col-6">
        <CodeBlock code={feature.code} />
      </div>
    </div>
  );
}

export default Feature;