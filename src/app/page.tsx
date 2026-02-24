import type { PageProps } from 'rari'
import Counter from '@/components/Counter'

// This is a React Server Component - runs on the server!
export default async function HomePage(_: PageProps) {
  // Fetch data on the server
  const response = await fetch('https://api.github.com/repos/facebook/react')
  const repoData = await response.json()

  return (
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold tracking-tight sm:text-4xl'>Welcome to rari</h1>

      {/* Server-rendered content */}
      <div className='rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6'>
        <h2 className='text-lg font-semibold text-slate-900'>React Repository Stats</h2>
        <div className='mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2'>
          <p className='rounded-md bg-slate-50 px-3 py-2'>Stars: {repoData.stargazers_count.toLocaleString()}</p>
          <p className='rounded-md bg-slate-50 px-3 py-2'>Forks: {repoData.forks_count.toLocaleString()}</p>
          <p className='rounded-md bg-slate-50 px-3 py-2'>Watchers: {repoData.watchers_count.toLocaleString()}</p>
          <p className='rounded-md bg-slate-50 px-3 py-2'>
            Last updated: {new Date(repoData.updated_at).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Client Component */}
      <Counter />
    </div>
  )
}

export const metadata = {
  title: 'Home | My rari App',
  description: 'Welcome to my rari application',
}
