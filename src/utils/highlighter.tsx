import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/github";

interface Props {
  sourceCode: string;
}

const Highlighter = ({ sourceCode }: Props) => {
  return (
    <div className="code-highlight">
      <Highlight
        {...defaultProps}
        code={sourceCode}
        theme={theme}
        language="jsx"
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export { Highlighter };
