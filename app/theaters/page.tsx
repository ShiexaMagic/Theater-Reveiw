import Link from 'next/link';

const theaters = [
  {
    id: 1,
    name: 'თეატრი ატონელი',
    slug: 'atoneli',
    description: 'თანამედროვე თეატრი თბილისის ცენტრში, რომელიც სპეციალიზდება თანამედროვე და ექსპერიმენტულ დრამატურგიაში.',
    address: 'ქუჩა ტაბიძის 21, თბილისი',
    phone: '+995 32 2 99 99 99',
    website: 'https://atoneli.ge',
  },
  {
    id: 2,
    name: 'თეატრი ხარაკი',
    slug: 'haraki',
    description: 'ავანგარდული თეატრი, რომელიც თავისუფალ და ექსპერიმენტულ სპექტაკლებს დგამს.',
    address: 'ქუჩა შარტავას 5, თბილისი',
    phone: '+995 32 2 88 88 88',
    website: 'https://haraki.ge',
  },
  {
    id: 3,
    name: 'ქარხანა 42',
    slug: 'factory-42',
    description: 'კულტურული სივრცე, თეატრი და გალერეა, რომელიც განთავსებულია ყოფილ ქარხანაში.',
    address: 'ქუჩა აღმაშენებლის 42, თბილისი',
    phone: '+995 32 2 77 77 77',
    website: 'https://factory42.ge',
  },
];

export default function TheatersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">თეატრები</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {theaters.map((theater) => (
          <Link
            key={theater.id}
            href={`/theaters/${theater.slug}`}
            className="group"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition h-full">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                <span className="text-6xl">🎭</span>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition">
                  {theater.name}
                </h2>
                <p className="text-gray-600 mb-4">{theater.description}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>📍 {theater.address}</p>
                  <p>📞 {theater.phone}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
