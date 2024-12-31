import { Footer } from './Footer';
import { cards } from '../data/DescCards.js';

export const DescComponent = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden  py-16 sm:py-20">
        <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">Tentang Diapredict</h2>
            <p className="mt-8 text-pretty text-lg  text-gray-600 sm:text-lg/8">
              Sebelum menggunakan, pastikan Anda memahami setiap parameter yang diperlukan untuk pengisian. Berikut adalah deskripsi setiap fitur input yang perlu Anda isi:
            </p>
          </div>
          <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-6 sm:mt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {cards.map((card) => (
              <div key={card.name} className="flex gap-x-4 rounded-xl  p-6 ring-inset ring-2 ring-gray-300 shadow-sm">
                <div className="text-base/7">
                  <h3 className="font-semibold text-emerald-600">{card.name}</h3>
                  <p className="mt-2 text-gray-600">{card.description}</p>
                  <p className="mt-1 font-medium">{card.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
