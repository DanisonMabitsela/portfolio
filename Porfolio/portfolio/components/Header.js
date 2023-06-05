import Link from "next/link";

const linkStyle = {
  marginRight: 15,
  color: "#007bff",
  cursor: "pointer",
  textDecoration: "underline",
};

const Header = () => (
  <div>
    <Link href="/">
      <span className="link" style={linkStyle}>
        Home
      </span>
    </Link>
    <Link href="/Projects">
      <span className="link" style={linkStyle}>
        Projects
      </span>
    </Link>
    <Link href="/Contact">
      <span className="link" style={linkStyle}>
        Contact
      </span>
    </Link>

    <style jsx>{`
      div {
        background-color: #f0f0f0;
        padding: 10px;
      }
      .link {
        margin-right: 15px;
      }
    `}</style>
  </div>
);

export default Header;
