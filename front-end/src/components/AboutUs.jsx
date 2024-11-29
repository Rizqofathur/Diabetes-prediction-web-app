import Image_1 from '../../public/PersonImage/Image-1.png';
import Image_2 from '../../public/PersonImage/Image-2.png';
import Image_3 from '../../public/PersonImage/Image-3.png';
import { Footer } from './Footer';

export const AboutUs = () => {
  const people = [
    {
      imageUrl: Image_1,
      name: 'Fathurrizqo',
      role: 'Backend Dev',
      location: 'Semarang, Indonesia',
    },
    {
      imageUrl: Image_2,
      name: 'Ihza Ferdina',
      role: 'ML Engineer',
      location: 'Semarang, Indonesia',
    },
    {
      imageUrl: Image_3,
      name: 'Prayoga Adi Brata',
      role: 'Frontend Dev',
      location: 'Semarang, Indonesia',
    },
  ];

  return (
    <>
      <div className=" py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">Our team</h2>
            <p className="mt-6 text-lg/8 text-gray-600">We&apos;re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results.</p>
          </div>
          <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
            {people.map((person) => (
              <li key={person.name}>
                <img alt="" src={person.imageUrl} className="aspect-[14/13] w-full rounded-2xl object-cover" />
                <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-stone-900">{person.name}</h3>
                <p className="text-base/7 text-gray-700">{person.role}</p>
                <p className="text-sm/6 text-gray-500">{person.location}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};
