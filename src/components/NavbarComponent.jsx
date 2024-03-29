import SmoothLink from "./SmoothLink";

export default function NavbarComponents() {
  return (
    <>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
            >
              <li>
                <SmoothLink to={"about"}>About</SmoothLink>
              </li>{" "}
              <li>
                <SmoothLink to={"projects"}>Projects</SmoothLink>
              </li>
              <li>
                <SmoothLink to={"achievement"}>Achievement</SmoothLink>
              </li>
            </ul>
          </div>
          <a class="btn btn-ghost text-xl normal-case">maruyasa</a>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <SmoothLink to={"about"}>About</SmoothLink>
            </li>{" "}
            <li>
              <SmoothLink to={"projects"}>Projects</SmoothLink>
            </li>
            <li>
              <SmoothLink to={"achievement"}>Achievement</SmoothLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
