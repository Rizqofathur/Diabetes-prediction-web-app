import { Footer } from './Footer';

export const DescComponent = () => {
  const cards = [
    {
      name: 'Pregnancies (jumlah kehamilan)',
      description: 'Inputkan angka (0 atau lebih). Jika Anda belum pernah hamil atau anda laki-laki, masukkan 0',
      example: 'Contoh : 2',
    },
    {
      name: 'Glucose',
      description: 'Kadar glukosa plasma saat ini dalam satuan mg/dL, Inputkan nilai numerik positif. Biasanya hasil ini diperoleh dari tes darah',
      example: 'Contoh : 120',
    },
    {
      name: 'Blood Pressure (Tekanan Darah)',
      description: 'Tekanan darah diastolik dalam satuan mmHg, Masukkan angka yang mewakili hasil pemeriksaan tekanan darah Anda.',
      example: 'Contoh : 80',
    },
    {
      name: 'Skin Thickness (Ketebalan Lipatan Kulit)',
      description: 'Ketebalan lipatan kulit triceps dalam satuan mm, digunakan untuk mengukur lemak tubuh.,Masukkan angka hasil pengukuran, atau 0 jika tidak ada data',
      example: 'Contoh : 23',
    },
    {
      name: 'Insulin',
      description: ' Hasil dari tes darah. Masukkan angka atau 0 jika tidak ada pengukuran.',
      example: 'Contoh : 85',
    },
    {
      name: 'BMI (Body Mass Index)',
      description: ' Indeks massa tubuh yang dihitung dari berat badan (kg) dibagi dengan kuadrat tinggi badan (m), masukkan angka desimal',
      example: 'Contoh : 24.6',
    },
    {
      name: 'Diabetes Pedigree Function (Faktor Genetik Diabetes)',
      description: 'Indeks yang menggambarkan riwayat keluarga dan pengaruh genetika terhadap risiko diabetes, Inputkan angka desimal (biasanya antara 0 hingga 2.5)',
      example: 'Contoh : 0.8',
    },
    {
      name: 'Age (usia)',
      description: 'Usia dalam tahun, masukkan usia anda',
      example: 'Contoh : 35',
    },
  ];

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
              <div key={card.name} className="flex gap-x-4 rounded-xl  p-6 ring-inset ring-2 ring-stone-900">
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
