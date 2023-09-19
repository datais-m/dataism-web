import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="bg-white p-8 rounded-xl shadow-md space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Dataism</h1>
        <p className="text-gray-700">We serve the SaaS with analysis of rich data.</p>
      </div>
    </div>
  );
}
