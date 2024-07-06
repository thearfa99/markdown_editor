import React, { useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import './MarkdownEditor.css';

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState('');
  const textareaRef = useRef(null);
  const previewRef = useRef(null);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const handleTextareaScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
    previewRef.current.scrollTop = scrollPercentage * 0.95 * (previewRef.current.scrollHeight - previewRef.current.clientHeight);
  };

  return (
    <div className="markdown-editor">
      <textarea
        ref={textareaRef}
        value={markdown}
        onChange={handleChange}
        onScroll={handleTextareaScroll}
        placeholder="Enter markdown text here..."
        style={{ fontSize: '16px', lineHeight: '1.5' }}
      />
      <div
        className="preview"
        ref={previewRef}
        style={{
          fontSize: '16px',
          lineHeight: '1.5',
          overflowY: 'scroll', // Always show scrollbar
        }}
      >
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default MarkdownEditor;

