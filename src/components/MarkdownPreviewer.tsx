import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.\n

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... **_both!_**

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.
`;


const MarkdownPreviewer = () => {
    const [markdown, setMarkdown] = useState<string>(defaultMarkdown);

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <div className="flex">
                <div className="w-1/2 p-4">
                    <h2 className="text-2xl font-semibold text-gray-300">Editor</h2>
                    <textarea
                        id="editor"
                        className="w-full h-48 p-2 border rounded bg-gray-800 text-gray-100"
                        value={markdown}
                        onChange={(event) => { setMarkdown(event.target.value); }}
                    />
                </div>
                <div className="w-1/2 p-4">
                    <h2 className="text-2xl font-semibold text-gray-300">Preview</h2>
                    <div id="preview" className="border p-2 bg-gray-800">
                        <ReactMarkdown>{markdown}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarkdownPreviewer;
