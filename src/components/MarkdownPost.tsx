import { marked } from 'marked'

interface MarkdownPostProps {
  content: string
  title: string
}

export default async function MarkdownPost({ content, title }: MarkdownPostProps) {
  // Process markdown on the server
  marked.setOptions({
    gfm: true,
    breaks: false,
  })
  const htmlContent = await marked.parse(content)

  return (
    <article className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8'>
      <h1 className='text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl'>{title}</h1>
      <div
        className='mt-6 space-y-4 text-base leading-7 text-slate-700 [&_a]:font-medium [&_a]:text-sky-700 hover:[&_a]:text-sky-800 [&_blockquote]:border-l-4 [&_blockquote]:border-slate-300 [&_blockquote]:pl-4 [&_blockquote]:italic [&_code]:rounded [&_code]:bg-slate-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm [&_h1]:mt-10 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:tracking-tight [&_h1]:text-slate-900 [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-slate-900 [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-slate-900 [&_li]:ml-6 [&_li]:list-disc [&_li]:pl-1 [&_p]:text-slate-700 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-slate-900 [&_pre]:p-4 [&_pre]:text-sm [&_pre]:leading-6 [&_pre]:text-slate-100 [&_ul]:space-y-2'
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </article>
  )
}
