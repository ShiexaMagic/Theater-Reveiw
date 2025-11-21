import Link from 'next/link';
import { notFound } from 'next/navigation';

const theaters = {
  'atoneli': {
    name: 'თეატრი ატონელი',
    description: 'თანამედროვე თეატრი თბილისის ცენტრში, რომელიც სპეციალიზდება თანამედროვე და ექსპერიმენტულ დრამატურგიაში.',
    address: 'ქუჩა ტაბიძის 21, თბილისი',
    phone: '+995 32 2 99 99 99',
    website: 'https://atoneli.ge',
    plays: [
      {
        id: 1,
        title: 'ჰამლეტი',
        director: 'გიორგი ქევანიშვილი',
        rating: 4.5,
        description: 'შექსპირის კლასიკის თანამედროვე ინტერპრეტაცია',
      },
    ],
  },
  'haraki': {
    name: 'თეატრი ხარაკი',
    description: 'ავანგარდული თეატრი, რომელიც თავისუფალ და ექსპერიმენტულ სპექტაკლებს დგამს.',
    address: 'ქუჩა შარტავას 5, თბილისი',
    phone: '+995 32 2 88 88 88',
    website: 'https://haraki.ge',
    plays: [
      {
        id: 2,
        title: 'ლოდინის სცენები',
        director: 'ნინო ჩიქოვანი',
        rating: 4.2,
        description: 'ავანგარდული პერფორმანსი თანამედროვე საზოგადოებაზე',
      },
    ],
  },
  'factory-42': {
    name: 'ქარხანა 42',
    description: 'კულტურული სივრცე, თეატრი და გალერეა, რომელიც განთავსებულია ყოფილ ქარხანაში.',
    address: 'ქუჩა აღმაშენებლის 42, თბილისი',
    phone: '+995 32 2 77 77 77',
    website: 'https://factory42.ge',
    plays: [
      {
        id: 3,
        title: 'ქალაქის ბიჭები',
        director: 'ლევან ცუცქირიძე',
        rating: 4.7,
        description: 'ურბანული დრამა თბილისზე',
      },
    ],
  },
};

export default async function TheaterPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const theater = theaters[slug as keyof typeof theaters];

  if (!theater) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Theater Header with Dramatic Image */}
      <div className="relative rounded-2xl shadow-2xl overflow-hidden mb-8">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{
            backgroundImage: `url('/images/theater/${slug === 'atoneli' ? 'actress-portrait' : slug === 'haraki' ? 'solo-performance' : 'ensemble-scene'}.jpg')`,
            backgroundColor: '#1a1a1a'
          }}
        ></div>
        
        {/* Content */}
        <div className="relative z-20 p-12">
          <div className="flex items-start gap-6">
            <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 border-2 border-white/20">
              <span className="text-6xl">🎭</span>
            </div>
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">{theater.name}</h1>
              <p className="text-gray-100 mb-4 text-xl drop-shadow">{theater.description}</p>
              <div className="space-y-2 text-gray-100 drop-shadow">
                <p>📍 {theater.address}</p>
                <p>📞 {theater.phone}</p>
                <a
                  href={theater.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#43c3f9] hover:text-[#8fd3fb] hover:underline inline-block transition"
                >
                  🌐 {theater.website}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Plays */}
      <h2 className="text-3xl font-bold mb-6 text-[#0d3f53]">სპექტაკლები</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {theater.plays.map((play) => (
          <Link
            key={play.id}
            href={`/plays/${play.id}`}
            className="group"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              {/* Dramatic Play Image */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" 
                  style={{
                    backgroundImage: `url('/images/theater/hero-performance.jpg')`,
                    backgroundColor: '#1a1a1a'
                  }}
                ></div>
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="text-5xl drop-shadow-lg">🎬</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#2d96c1] transition">
                  {play.title}
                </h3>
                <p className="text-gray-600 mb-2">რეჟისორი: {play.director}</p>
                <p className="text-gray-500 mb-3 text-sm">{play.description}</p>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(play.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-gray-600 font-semibold">{play.rating}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
