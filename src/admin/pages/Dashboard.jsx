import { useNavigate } from 'react-router-dom';

const colleges = [
  'MIET',
  'NIET',
  'KIET',
  'ABES',
  'AKG',
  'IIMT',
  'GLA',
  'JSS',
  'IMS',
  'BBD',
  'Galgotias',
  'Sharda',
];

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Super Admin Dashboard 🚀</h1>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-5 mb-8">
        <h2 className="text-xl font-semibold mb-4">
          Global Confession Composer ✍️
        </h2>

        <textarea
          placeholder="Write confession for selected colleges..."
          rows={4}
          className="w-full border border-white/10 bg-black rounded-2xl p-3 text-white placeholder:text-gray-400 mb-4 outline-none resize-none"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          {colleges.map((college) => (
            <label
              key={college}
              className="flex items-center gap-2 border border-white/10 rounded-xl p-2"
            >
              <input type="checkbox" />
              <span>{college}</span>
            </label>
          ))}
        </div>

        <div className="flex gap-3">
          <button className="px-5 py-3 rounded-2xl bg-white text-black font-semibold">
            Send Selected
          </button>

          <button className="px-5 py-3 rounded-2xl border border-white/20">
            Send All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {colleges.map((college) => (
          <div
            key={college}
            onClick={() => navigate(`/admin/college/${college.toLowerCase()}`)}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-all cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2">{college}</h2>

            <p className="text-sm text-gray-400">Pending: 0</p>

            <p className="text-sm text-gray-400">Posted Today: 0</p>
          </div>
        ))}
      </div>
    </div>
  );
}
