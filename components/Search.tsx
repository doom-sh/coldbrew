import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import splitbee from "@splitbee/web";
import { SplitbeeEvents } from "../lib/analytics";
import useSearch from "../lib/useSearch";

const Search = () => {
  const { setSearchQuery } = useSearch();

  return (
    <div className="relative flex items-center flex-1 gap-2">
      <MagnifyingGlassIcon className="absolute z-20 h-4 left-4" />
      <input
        type="text"
        className="px-4 py-2 pl-10 rounded-full w-fit surface edges"
        onFocus={() => splitbee.track(SplitbeeEvents.ClickedSearch)}
        onChange={(e) => setSearchQuery(e.currentTarget.value.toLowerCase())}
      />
    </div>
  );
};

export default Search;
