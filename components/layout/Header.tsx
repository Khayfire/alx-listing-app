const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 shadow-md bg-white">
      <div className="text-2xl font-bold">🏡 MyListing</div>

      <div className="flex-1 px-6">
        <input
          type="text"
          placeholder="Search for properties..."
          className="w-full border rounded-lg px-4 py-2"
        />
      </div>

      <nav className="flex gap-4">
        <a href="#">Rooms</a>
        <a href="#">Mansion</a>
        <a href="#">Countryside</a>
        <a href="#">Sign in</a>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Sign up
        </button>
      </nav>
    </header>
  );
};

export default Header;
