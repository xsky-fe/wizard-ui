import React from 'react';
import SyntaxHighlighter, {
  registerLanguage,
} from 'react-syntax-highlighter/prism-light';
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import json from 'react-syntax-highlighter/languages/prism/json';
import js from 'react-syntax-highlighter/languages/prism/javascript';
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia';

const okaidiaTabSpace2 = {
  ...okaidia,
  'code[class*="language-"]': {
    ...okaidia['code[class*="language-"]'],
    tabSize: '2',
  },
};
registerLanguage ('jsx', jsx);
registerLanguage ('json', json);
registerLanguage ('javascript', js);

export default function Hightlight (props) {
  const {code, lang = 'jsx', ...extraProps} = props;
  return (
    <SyntaxHighlighter
      {...extraProps}
      language={lang}
      style={okaidiaTabSpace2}
      customStyle={{
        fontSize: 12,
        height: '100%',
        margin: 0,
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
}
