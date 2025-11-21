import dbConnect from '../lib/mongodb';
import Theater from '../models/Theater';
import Play from '../models/Play';

const theaters = [
  {
    name: 'Atoneli Theater',
    nameKa: 'თეატრი ატონელი',
    slug: 'atoneli',
    description: 'Contemporary theater in the center of Tbilisi',
    descriptionKa: 'თანამედროვე თეატრი თბილისის ცენტრში, რომელიც სპეციალიზდება თანამედროვე და ექსპერიმენტულ დრამატურგიაში.',
    address: '21 Tabidze Street, Tbilisi',
    addressKa: 'ქუჩა ტაბიძის 21, თბილისი',
    website: 'https://atoneli.ge',
    phone: '+995 32 2 99 99 99',
  },
  {
    name: 'Haraki Theater',
    nameKa: 'თეატრი ხარაკი',
    slug: 'haraki',
    description: 'Avant-garde and experimental theater',
    descriptionKa: 'ავანგარდული თეატრი, რომელიც თავისუფალ და ექსპერიმენტულ სპექტაკლებს დგამს.',
    address: '5 Shartava Street, Tbilisi',
    addressKa: 'ქუჩა შარტავას 5, თბილისი',
    website: 'https://haraki.ge',
    phone: '+995 32 2 88 88 88',
  },
  {
    name: 'Factory 42',
    nameKa: 'ქარხანა 42',
    slug: 'factory-42',
    description: 'Cultural space and theater',
    descriptionKa: 'კულტურული სივრცე, თეატრი და გალერეა, რომელიც განთავსებულია ყოფილ ქარხანაში.',
    address: '42 Agmashenebeli Avenue, Tbilisi',
    addressKa: 'ქუჩა აღმაშენებლის 42, თბილისი',
    website: 'https://factory42.ge',
    phone: '+995 32 2 77 77 77',
  },
];

async function seed() {
  try {
    await dbConnect();
    console.log('Connected to MongoDB');

    // Clear existing data
    await Theater.deleteMany({});
    await Play.deleteMany({});
    console.log('Cleared existing data');

    // Insert theaters
    const createdTheaters = await Theater.insertMany(theaters);
    console.log('Theaters created:', createdTheaters.length);

    // Create plays for each theater
    const plays = [
      {
        title: 'Hamlet',
        titleKa: 'ჰამლეტი',
        slug: 'hamlet',
        theater: createdTheaters[0]._id,
        director: 'Giorgi Qevanishvili',
        directorKa: 'გიორგი ქევანიშვილი',
        cast: ['Nikoloz Ramashvili', 'Tamar Bukhnikashvili', 'Giorgi Megrelishvili'],
        castKa: ['ნიკოლოზ რამაშვილი', 'თამარ ბუხნიკაშვილი', 'გიორგი მეგრელიშვილი'],
        description: 'Modern interpretation of Shakespeare\'s classic',
        descriptionKa: 'შექსპირის კლასიკის თანამედროვე ინტერპრეტაცია. სპექტაკლი განიხილავს ძალაუფლების, შურისძიებისა და სიგიჟის თემებს თანამედროვე კონტექსტში.',
        duration: 180,
        genre: ['Drama', 'Classic'],
        genreKa: ['დრამა', 'კლასიკა'],
      },
      {
        title: 'Waiting Scenes',
        titleKa: 'ლოდინის სცენები',
        slug: 'waiting-scenes',
        theater: createdTheaters[1]._id,
        director: 'Nino Chiqovani',
        directorKa: 'ნინო ჩიქოვანი',
        cast: ['Ana Japaridze', 'Davit Dateshidze'],
        castKa: ['ანა ჯაფარიძე', 'დავით დათეშიძე'],
        description: 'Avant-garde performance about modern society',
        descriptionKa: 'ავანგარდული პერფორმანსი თანამედროვე საზოგადოებაზე, რომელიც განიხილავს მარტოობის და კომუნიკაციის თემებს.',
        duration: 90,
        genre: ['Avant-garde', 'Performance'],
        genreKa: ['ავანგარდი', 'პერფორმანსი'],
      },
      {
        title: 'City Boys',
        titleKa: 'ქალაქის ბიჭები',
        slug: 'city-boys',
        theater: createdTheaters[2]._id,
        director: 'Levan Tsutsiridze',
        directorKa: 'ლევან ცუცქირიძე',
        cast: ['Giorgi Kavtaradze', 'Luka Khutsishvili', 'Nika Elizbarashvili'],
        castKa: ['გიორგი ქავთარაძე', 'ლუკა ხუციშვილი', 'ნიკა ელიზბარაშვილი'],
        description: 'Urban drama about Tbilisi',
        descriptionKa: 'ურბანული დრამა თბილისზე, რომელიც მოგვითხრობს ახალგაზრდების ცხოვრებაზე თანამედროვე ქართულ დედაქალაქში.',
        duration: 120,
        genre: ['Drama', 'Contemporary'],
        genreKa: ['დრამა', 'თანამედროვე'],
      },
    ];

    const createdPlays = await Play.insertMany(plays);
    console.log('Plays created:', createdPlays.length);

    console.log('Seed completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Seed error:', error);
    process.exit(1);
  }
}

seed();
