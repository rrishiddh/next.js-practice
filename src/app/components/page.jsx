
import Link from "next/link";

import { getKindeServerSession,LogoutLink,LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Navbar()  {
  const { isAuthenticated } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();

  const navOption = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/profile"}>Profile</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-300 px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-black bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOption}
            </ul>
          </div>
          <a className="text-xl text-black">EJP10</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black gap-2">{navOption}</ul>
        </div>
        <div className="navbar-end">
          {isLoggedIn ? (
            <LogoutLink>
              <button className="btn btn-ghost">Logout</button>
            </LogoutLink>
          ) : (
            <LoginLink>
              <button className="btn btn-ghost">Login</button>
            </LoginLink>
          )}
        </div>
      </div>
    </div>
  );
};

