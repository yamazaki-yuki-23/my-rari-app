import type { LayoutProps } from 'rari'

export default function RootLayout({ children }: LayoutProps) {
  return (
    <div className='min-h-screen bg-slate-50 text-slate-900'>
      <nav className='mx-auto flex w-full max-w-4xl items-center gap-2 px-4 py-5 sm:px-6'>
        <a
          href='/'
          className='rounded-md px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-200 hover:text-slate-950'
        >
          Home
        </a>
        <a
          href='/about'
          className='rounded-md px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-200 hover:text-slate-950'
        >
          About
        </a>
      </nav>
      <main className='mx-auto w-full max-w-4xl px-4 pb-12 sm:px-6'>{children}</main>
    </div>
  )
}

export const metadata = {
  title: 'My rari App',
  description: 'Built with rari',
}
