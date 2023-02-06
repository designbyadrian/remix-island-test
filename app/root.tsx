import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { createPortal } from "react-dom";
import { createHead } from "remix-island";
import { ClientOnly } from "remix-utils";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export function Head() {
  return (
    <>
      <Meta />
      <Links />
    </>
  );
}

export default function App() {
  return (
    <>
      <ClientOnly>{() => createPortal(<Head />, document.head)}</ClientOnly>
      <Outlet />
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </>
  );
}

export function CatchBoundary() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>This is a catch boundary!</h1>
      <p>
        <a href="/">Go back home</a>
      </p>
    </div>
  );
}
