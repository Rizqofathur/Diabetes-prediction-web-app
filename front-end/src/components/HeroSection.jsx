import { NavLink } from 'react-router';
import image from '../../public/bg-doctor 1.png';

export const Hero = () => {
  return (
    <div className="max-w-screen-xl justify-center mx-auto  p-6 lg:px-8">
      <div>
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8 flex gap-6 justify-center flex-col-reverse md:flex-row">
          <div className="max-w-xl text-left">
            <h2 className="text-balance text-4xl font-bold text-gray-900 sm:text-5xl leading-tight md:leading-tight">Kenali Risiko Diabetes Anda Mulai Hari Ini</h2>
            <p className="mt-6 max-w-xl text-pretty text-lg/8 text-gray-600">Prediksi kemungkinan diabetes dengan mudah dan cepat dengan Diapredict.</p>
            <div className="mt-10 flex items-center justify-start gap-x-6">
              <NavLink
                to="/prediction"
                className="rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
              >
                Tes Sekarang
              </NavLink>
              <NavLink to="/description" className="text-sm/6 font-semibold text-gray-900 ">
                Baca Selengkapnya <span aria-hidden="true">→</span>
              </NavLink>
            </div>
          </div>
          <img src={image} alt="Doctor-1" className="w-96" />
        </div>
      </div>
    </div>
  );
};
