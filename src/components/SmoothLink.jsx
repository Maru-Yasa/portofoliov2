import { Link } from "react-scroll";

export default function SmoothLink({ to, children }) {
  return (
    <>
      <Link
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        offset={0}
        duration={800}
      >
        {children}
      </Link>
    </>
  );
}
