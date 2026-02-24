'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className='rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6'>
      <h2 className='text-lg font-semibold text-slate-900'>Client Interaction</h2>
      <button
        onClick={() => setCount(count + 1)}
        type='button'
        className='mt-3 inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700 active:scale-[0.98]'
      >
        Count: {count}
      </button>
    </div>
  )
}
