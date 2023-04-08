import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <nav className="pb-4 max-w-full mx-auto mt-4 text-blue-500 border-b-4 border-blue-200 flex items-center justify-around flex-nowrap">
        <h3 className="text-3xl  ">Color Flipper</h3>
        <ul className="flex items-center justify-between text-lg">
          <li className="px-2 border-b-4 border-lime-500 hover:cursor-pointer hover:text-blue-800">
            <Link to="/">Home</Link>
          </li>
          <li className="ml-4 px-3 border-b-4 border-lime-500 hover:cursor-pointer  hover:text-blue-800">
            <Link to="/hex">Hex</Link>
          </li>
          <li className="ml-4 px-3 border-b-4 border-lime-500 hover:cursor-pointer  hover:text-blue-800">
            <Link to="/rgb">RGB</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
