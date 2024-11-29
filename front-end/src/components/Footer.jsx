export const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <>
      <footer className="mt-10 py-16 text-center text-gray-700">© {year} Diapredict, Inc. All rights reserved.</footer>
    </>
  );
};
