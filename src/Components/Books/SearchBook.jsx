export default function SearchBook() {
    return (
        <div className="flex w-full sm:w-auto">
        <div className="relative overflow-hidden rounded-lg w-full sm:w-[280px] md:w-[380px] lg:w-[440px]">
          <input
            type="search"
            id="search-dropdown"
            className="z-20 block w-full dark:bg-white bg-black text-white dark:text-black px-4 py-2 pr-10 focus:outline-none rounded-md"
            placeholder="Search Your Favorite Books......"
          />
        </div>
      </div>
    );
  }