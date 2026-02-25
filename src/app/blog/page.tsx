import type { Metadata } from 'rari'
import MarkdownPost from '@/components/MarkdownPost'

const blogPost = `
# Welcome to rari!

This markdown is processed **on the server** using the \`marked\` package.

- Fast server-side rendering
- Universal NPM package support
- Zero configuration required
`

export default function BlogPage() {
  return (
    <div className='space-y-6'>
      <header className='space-y-2'>
        <p className='text-sm font-medium uppercase tracking-wide text-slate-500'>Blog</p>
        <p className='text-slate-600'>Markdown をサーバーでレンダリングした記事サンプルです。</p>
      </header>
      <MarkdownPost title='My Blog Post' content={blogPost} />
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Blog | My rari App',
  description: 'Read our latest posts',
}
