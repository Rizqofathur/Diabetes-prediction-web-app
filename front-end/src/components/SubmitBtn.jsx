export const SubmitBtn = ({ value }) => {
  return (
    <div>
      <button
        type="submit"
        className="flex w-full mt-6 justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
      >
        {value}
      </button>
    </div>
  );
};
