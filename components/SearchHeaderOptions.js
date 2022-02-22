import {
  SearchIcon,
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
} from "@heroicons/react/outline";
import SearchHeaderOption from "./SearchHeaderOption";

export default function SearchHeaderOptions() {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b">
      {/* left */}

      <div className="flex space-x-6">
        <SearchHeaderOption Icon={SearchIcon} title="All" selected />
        <SearchHeaderOption Icon={PhotographIcon} title="Images" />
        <SearchHeaderOption Icon={PlayIcon} title="Videos" />
        <SearchHeaderOption Icon={NewspaperIcon} title="News" />
        <SearchHeaderOption Icon={MapIcon} title="Maps" />
        <SearchHeaderOption Icon={DotsVerticalIcon} title="More" />
      </div>

      {/* right */}

      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
}
