```jsx
import Link from 'next/link'

const pipelines = ['New', 'Warm', 'Contract Out', 'Closed']

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Dark sidebar */}
      <nav className="w-64 bg-slate-900 text-gray-300">
        <div className="p-4 text-white font-bold">DealCommand</div>
        <Link href="/">
          <a className="block px-4 py-3 hover:bg-slate-700 rounded">Dashboard</a>
        </Link>
        <Link href="/lead/new">
          <a className="block px-4 py-3 hover:bg-slate-700 rounded">+ Add Lead</a>
        </Link>
      </nav>

      {/* Main area */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-4">Lead Pipeline</h1>

        <div className="grid grid-cols-4 gap-4">
          {pipelines.map(col => (
            <div key={col} className="bg-white rounded shadow p-4">
              <h2 className="font-semibold mb-2">{col}</h2>
              <div className="text-sm text-gray-500">Drop leads here soon…</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
```
