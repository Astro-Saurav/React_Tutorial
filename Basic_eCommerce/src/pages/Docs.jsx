import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router';
import frontMatter from 'front-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { codeToHtml } from 'shiki';

export default function Docs() {
  const location = useLocation();
  const [content, setContent] = useState('');
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Extract path after /docs/
    const docPath = location.pathname.replace('/docs/', '');
    // Default to a specific file if root
    const filePath = location.pathname === '/docs' || location.pathname === '/docs/' 
      ? '/docs/getting-started/installation.md'
      : `/docs/${docPath}.md`;

    setLoading(true);
    fetch(filePath)
      .then(res => {
        if (!res.ok) throw new Error('Not found');
        return res.text();
      })
      .then(text => {
        // Some web servers return HTML (index.html fallback) for 404s
        if (text.trim().startsWith('<')) {
          throw new Error('Not found');
        }
        const { attributes, body } = frontMatter(text);
        setMeta(attributes);
        setContent(body);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setMeta({ title: 'Not Found' });
        setContent('# Document not found\n\nThe requested documentation page could not be found.');
        setLoading(false);
      });
  }, [location.pathname]);

  if (loading) {
    return (
      <div className="animate-pulse p-8">
        <div className="h-8 bg-muted rounded w-1/3 mb-4"></div>
        <div className="h-4 bg-muted rounded w-2/3 mb-2"></div>
        <div className="h-4 bg-muted rounded w-1/2 mb-8"></div>
        <div className="h-32 bg-muted rounded w-full"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-10">
      <div className="flex-1 min-w-0">
        {/* Breadcrumb / Metadata header */}
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">{meta.title}</h1>
          {meta.description && <p className="text-lg text-muted-foreground">{meta.description}</p>}
          
          <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
            {meta.difficulty && (
              <span className="px-2 py-1 bg-muted rounded-md font-medium text-foreground">
                {meta.difficulty}
              </span>
            )}
            {meta.readingTime && <span>⏱ {meta.readingTime} read</span>}
          </div>
        </div>

        {/* Markdown Body */}
        <article className="prose-custom w-full max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]]}
            components={{
              // Add custom component overrides here if needed
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <div className="relative rounded-lg bg-slate-950 overflow-hidden my-4">
                    <div className="flex items-center justify-between px-4 py-2 bg-slate-900 text-xs text-slate-400">
                      <span>{match[1]}</span>
                    </div>
                    <div className="p-4 overflow-x-auto text-sm text-slate-50">
                      <code className={className} {...props}>
                        {children}
                      </code>
                    </div>
                  </div>
                ) : (
                  <code className="bg-muted px-1.5 py-0.5 rounded-md text-sm font-mono" {...props}>
                    {children}
                  </code>
                );
              }
            }}
          >
            {content}
          </ReactMarkdown>
        </article>
      </div>

      {/* Right Sidebar */}
      <div className="hidden xl:block w-[250px] shrink-0">
        <div className="sticky top-20">
          <h4 className="font-semibold mb-4 text-sm">On this page</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {/* We will extract headings later, statically simulating for now */}
            <li><a href="#lesson-objective" className="hover:text-foreground transition-colors">Lesson Objective</a></li>
            <li><a href="#theory" className="hover:text-foreground transition-colors">Theory</a></li>
            <li><a href="#real-world-example" className="hover:text-foreground transition-colors">Real World Example</a></li>
            <li><a href="#code" className="hover:text-foreground transition-colors">Code</a></li>
            <li><a href="#common-errors" className="hover:text-foreground transition-colors">Common Errors</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
