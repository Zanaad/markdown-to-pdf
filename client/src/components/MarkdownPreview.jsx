import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function MarkdownPreview({ markdown }) {
  return (
    <div id="preview" className="markdown-preview">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
}
