import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/dracula';

const preStyle = {
  overflow: "scroll",
  height: "25rem",
  width: "40rem",
  margin: "0.5rem 0 0.5rem 2rem",
};

const CodeBlock = ({ code }) => (
  <Highlight {...defaultProps} code={code} language="python">
    {
      ({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={preStyle}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )
    }
  </Highlight >
);

export default CodeBlock;
