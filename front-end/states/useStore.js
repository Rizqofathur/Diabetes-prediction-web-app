import { create } from 'zustand';

const useStore = create((set) => ({
  pregnancies: '',
  glucose: '',
  bloodPressure: '',
  skinThickness: '',
  insulin: '',
  bmi: '',
  dpf: '',
  age: '',
  result: null,
  error: '',

  // Setters
  setPregnancies: (value) => set({ pregnancies: value }),
  setGlucose: (value) => set({ glucose: value }),
  setBloodPressure: (value) => set({ bloodPressure: value }),
  setSkinThickness: (value) => set({ skinThickness: value }),
  setInsulin: (value) => set({ insulin: value }),
  setBmi: (value) => set({ bmi: value }),
  setDpf: (value) => set({ dpf: value }),
  setAge: (value) => set({ age: value }),
  setResult: (value) => set({ result: value }),
  setError: (value) => set({ error: value }),
}));

export default useStore;
