import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <Link to="a-page">Link to a page</Link>
        </li>
        <li>
          <Link to="nothing-here">Link to a 404 page</Link>
        </li>
      </ul>
    </div>
  );
}
