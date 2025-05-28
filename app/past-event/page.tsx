export default function PastEventPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 text-center mb-12">Past Event</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-gray-200 h-64 rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow"
            >
              <span className="text-gray-500">Event Photo {i}</span>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Previous Event Highlights</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-4">Event Statistics</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 30+ Exhibitors participated</li>
                <li>• 500+ Visitors attended</li>
                <li>• 15+ Plot projects showcased</li>
                <li>• 10+ Farmland opportunities</li>
                <li>• 95% Exhibitor satisfaction rate</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-4">Success Stories</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Multiple plot bookings on-site</li>
                <li>• New partnerships formed</li>
                <li>• Successful investor connections</li>
                <li>• Media coverage and recognition</li>
                <li>• Positive feedback from participants</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-700 text-lg leading-relaxed">
              Our previous event was a tremendous success, bringing together the best in Bengaluru's real estate
              industry. The positive response and successful outcomes have motivated us to make BPE 2025 even bigger and
              better.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
