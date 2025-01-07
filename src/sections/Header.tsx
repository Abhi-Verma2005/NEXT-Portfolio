export const Header = () => {
  return (
    <>
    <div className="flex justify-center items-center fixed top-3 w-full z-40">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
      <a className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300" href="#hero">Home</a>
      <a className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300" href="#project">Projects</a>
      <a className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300" href="#about">About</a>
      <a className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300 bg-white/70 text-gray-900" href="#contact">Contact</a>
    </nav>
  </div>
    </>
  );
};
