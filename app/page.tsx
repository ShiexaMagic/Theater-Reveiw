import Link from 'next/link';

const theaters = [
  {
    id: 1,
    name: 'თეატრი ატონელი',
    slug: 'atoneli',
    description: 'თანამედროვე თეატრი თბილისის ცენტრში',
    image: '/images/atoneli.jpg',
  },
  {
    id: 2,
    name: 'თეატრი ხარაკი',
    slug: 'haraki',
    description: 'ექსპერიმენტული და ავანგარდული სპექტაკლები',
    image: '/images/haraki.jpg',
  },
  {
    id: 3,
    name: 'ქარხანა 42',
    slug: 'factory-42',
    description: 'კულტურული სივრცე და თეატრი',
    image: '/images/factory42.jpg',
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Demo Notice */}
      <div className="bg-gradient-to-r from-[#2d96c1] to-[#43c3f9] text-white rounded-lg p-6 mb-8 text-center shadow-lg">
        <h2 className="text-2xl font-bold mb-2">🎭 დემო რეჟიმი</h2>
        <p className="text-lg mb-3">სწრაფი შესასვლელად გამოიყენეთ:</p>
        <div className="bg-white bg-opacity-20 rounded-lg p-3 inline-block">
          <p className="font-mono"><strong>Email:</strong> jeff@demo.com</p>
          <p className="font-mono"><strong>Password:</strong> demo123</p>
        </div>
        <p className="mt-3 text-sm">👤 მომხმარებელი: Jeff Temo</p>
      </div>

      {/* Hero Section with Theater Image */}
      <section className="relative mb-16 rounded-2xl overflow-hidden shadow-2xl">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/theater/hero-performance.jpg')] bg-cover bg-center" style={{backgroundColor: '#1a1a1a'}}></div>
        
        {/* Content */}
        <div className="relative z-20 text-left py-24 px-12">
          <h1 className="text-6xl font-bold mb-6 text-white drop-shadow-lg">
            მოგესალმებით თეატრის<br />რეცენზიების პლატფორმაზე
          </h1>
          <p className="text-2xl text-gray-100 mb-8 max-w-2xl drop-shadow">
            იხილეთ და გააზიარეთ თქვენი აზრი ქართული თეატრის საუკეთესო სპექტაკლების შესახებ.
            ჩაწერეთ 5 რეცენზია და მიიღეთ 10% ფასდაკლების პრომო კოდი!
          </p>
          <Link
            href="/theaters"
            className="inline-block bg-[#2d96c1] hover:bg-[#237a9e] text-white px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg"
          >
            იხილეთ თეატრები
          </Link>
        </div>
      </section>

      {/* Featured Theaters */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-[#0d3f53]">
          რჩეული თეატრები
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {theaters.map((theater, index) => (
            <Link
              key={theater.id}
              href={`/theaters/${theater.slug}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                {/* Theater Card with Dramatic Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{
                      backgroundImage: `url('/images/theater/${index === 0 ? 'actress-portrait' : index === 1 ? 'solo-performance' : 'ensemble-scene'}.jpg')`,
                      backgroundColor: '#1a1a1a'
                    }}
                  ></div>
                  <div className="absolute bottom-4 right-4 z-20">
                    <span className="text-5xl drop-shadow-lg">🎭</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#2d96c1] transition">
                    {theater.name}
                  </h3>
                  <p className="text-gray-600">{theater.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Promo Section */}
      <section className="mt-16 bg-gradient-to-r from-[#2d96c1] to-[#43c3f9] rounded-lg p-8 text-white text-center shadow-xl">
        <h2 className="text-3xl font-bold mb-4">
          🎁 მიიღეთ ფასდაკლების პრომო კოდი!
        </h2>
        <p className="text-xl mb-6">
          დაწერეთ 5 რეცენზია და მიიღეთ 10% ფასდაკლების კოდი შემდეგ ბილეთზე
        </p>
        <Link
          href="/auth/signup"
          className="inline-block bg-white text-[#2d96c1] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition"
        >
          დარეგისტრირდით ახლავე
        </Link>
      </section>
    </div>
  );
}
