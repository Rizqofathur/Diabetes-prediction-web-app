import { InputForm } from './InputForm';
import { SubmitBtn } from './SubmitBtn';
import { api } from '../../service/api/axiosConfig';
import useStore from '../../states/useStore';
import { FormHeader } from './FormHeader';
import { Footer } from './Footer';

export const PredictionComponent = () => {
  const { pregnancies, glucose, bloodPressure, skinThickness, insulin, bmi, dpf, age, result, error, setPregnancies, setGlucose, setBloodPressure, setSkinThickness, setInsulin, setBmi, setDpf, setAge, setResult, setError } = useStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/predict', {
        pregnancies,
        glucose,
        bloodPressure,
        skinThickness,
        insulin,
        bmi,
        dpf,
        age,
      });
      setResult(response);
      console.log(response);
    } catch (error) {
      console.error('Error submitting form:', error.response.data);
      setError('gagal memproses data');
      setResult(error.response.data);
    }
  };

  return (
    <>
      <div className="px-6 lg:px-8 mt-8">
        <div>
          <form className="w-full flex justify-center" onSubmit={handleSubmit}>
            <div className="max-w-lg w-full">
              <FormHeader />
              <InputForm label={'Pregnancies'} placeholder={'Enter your pregnancies counts (if you a woman)'} type={'text'} value={pregnancies} funct={(e) => setPregnancies(e.target.value)} />
              <InputForm label={'Glucose'} placeholder={'Enter your glucose'} type={'text'} value={glucose} funct={(e) => setGlucose(e.target.value)} />
              <InputForm label={'Bloodpressure'} placeholder={'Enter your bloodpressure'} type={'text'} value={bloodPressure} funct={(e) => setBloodPressure(e.target.value)} />
              <InputForm label={'Skinthickness'} placeholder={'Enter your skinthickness'} type={'text'} value={skinThickness} funct={(e) => setSkinThickness(e.target.value)} />
              <InputForm label={'Insulin'} placeholder={'Enter your insulin'} type={'text'} value={insulin} funct={(e) => setInsulin(e.target.value)} />
              <InputForm label={'BMI'} placeholder={'Enter your bmi'} type={'text'} value={bmi} funct={(e) => setBmi(e.target.value)} />
              <InputForm label={'Diabetes Pedigree Function'} placeholder={'Enter your dpf'} type={'text'} value={dpf} funct={(e) => setDpf(e.target.value)} />
              <InputForm label={'Age'} placeholder={'Enter your age'} type={'number'} value={age} funct={(e) => setAge(e.target.value)} />
              <SubmitBtn value={'Prediksi'} />
            </div>
          </form>
        </div>
        <div className="w-full flex justify-center h-44">
          <div className="max-w-lg w-full mt-6">
            <div className="text-lg font-semibold">Hasil :</div>
            <div>{result?.data?.result}</div>
            <div>{error}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
