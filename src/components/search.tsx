import { IoSearch } from "react-icons/io5"


const Search = () => {
  return (
     <div className="relative w-[250px]  max-w-sm">
          <input type="text" placeholder="Search for resuts " className="w-full rounded-b-sm border font-semibold text-gray-400 border-gray-200 py-2 pl-4 pr-10 text-sm focus:border-gray-300 focus:outline-none"/>
          <IoSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"/>
        </div>
  )
}

export default Search