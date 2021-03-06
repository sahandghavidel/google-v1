import Avator from "./Avator";

export default function Header() {
  return (
    <header className="flex justify-between p-5 text-sm text-gray-700 w-full">
      {/* left */}
      <div className="flex space-x-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>

      {/* right */}
      <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>
        <Avator />
      </div>
    </header>
  );
}
