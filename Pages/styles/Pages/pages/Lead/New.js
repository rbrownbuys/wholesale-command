import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

export default function NewLead() {
  const router = useRouter()
  const { register, handleSubmit } = useForm()

  const onSubmit = data => {
    // tomorrow we’ll save to Firebase; today just show the data
    alert(JSON.stringify(data, null, 2))
    router.push('/')
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Add New Lead</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register('address')} placeholder="Property Address" className="w-full border rounded px-3 py-2" />
        <input {...register('city')} placeholder="City" className="w-full border rounded px-3 py-2" />
        <input {...register('state')} placeholder="State" className="w-full border rounded px-3 py-2" />
        <input {...register('zip')} placeholder="Zip" className="w-full border rounded px-3 py-2" />
        <input {...register('arv')} placeholder="ARV" type="number" className="w-full border rounded px-3 py-2" />
        <button className="bg-indigo-600 text-white px-4 py-2 rounded">Save Lead</button>
      </form>
    </div>
  )
}
