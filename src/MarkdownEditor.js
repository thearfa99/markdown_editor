import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './MarkdownEditor.css'; // Import the updated CSS

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState('');

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="markdown-editor">
      <textarea
        value={markdown}
        onChange={handleChange}
        placeholder="Enter markdown text here..."
      />
      <div className="preview">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default MarkdownEditor;
