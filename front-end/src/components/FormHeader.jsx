export const FormHeader = () => {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-stone-900">Deteksi Diabetes dengan Random Forest Classifier</h2>
      <p className="font-medium my-4 text-stone-700">silahkan masukkan input form berikut berdasarkan data kesehatan yang anda miliki.</p>
      <div className="p-4 mb-4 text-sm text-yellow-800 border-2 border-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
        <p className="font-medium">Catatan</p>
        <p>Sistem pendeteksi ini tidak 100 persen akurat, hanya sebagai bentuk &quot;prediksi&quot;, silahkan konsultasikan langsung kepada ahlinya langsung untuk mendapat hasil yang lebih akurat.</p>
      </div>
    </div>
  );
};
