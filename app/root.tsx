import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        </head>
      <body className="min-h-screen flex flex-col">
      <div className="flex flex-col gap-9 ">
          <div className="w-[750px] max-w-[100vw] w-full border-b-40 border-b-[rgb(29,71,82)]">
            <div className="flex flex-row h-full w-full max-w-[100vw]">
              <img src="/carly.jpg" alt="Carly" className="w-1/5 h-full opacity-100" />
              <img src="/carly.jpg" alt="Carly" className="w-1/5 h-full opacity-100" />
              <img src="/carly.jpg" alt="Carly" className="w-1/5 h-full opacity-100" />
              <img src="/carly.jpg" alt="Carly" className="w-1/5 h-full opacity-100" />
              <img src="/carly.jpg" alt="Carly" className="w-1/5 h-full opacity-100" />
              <div className="absolute flex flex-col w-full text-shadow-[5px_5px_5px_rgb(29,71,82,1)] text-[rgb(255, 0, 0)] left-1/2 -translate-x-1/2 top-1/11 -translate-y-1/7 text-center font-extrabold ">
                <h1 className="text-9xl text-[rgb(255,0,0)] leading-none">RAGEBAIT</h1>
                <br></br>
                <p className="text-7xl drop-shadow-[0_.5px_.5px_rgba(29,71,82,0.8)] text-[rgb(255,0,0)] leading-none" >The Game Of Just Asking Questions</p>
                <p className="text-3xl drop-shadow-[.8px_.8px_rgba(29,71,82,0.8)] text-[rgb(255,0,0)] leading-none pt-4">(by Bad Website Inc.)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 min-h-0 w-full">
            {children}
        </div>
          <div className="flex flex-row h-full w-full max-w-[100vw] border-t-40 border-t-[rgb(29,71,82)] shrink-0">
              <img src="/carly.jpg" alt="Carly" className="w-1/5 h-full" />
              <img src="/carly.jpg" alt="Carly" className="w-1/5 h-full" />
              <img src="/carly.jpg" alt="Carly" className="w-1/5 h-full" />
              <img src="/carly.jpg" alt="Carly" className="w-1/5 h-full" />
              <img src="/carly.jpg" alt="Carly" className="w-1/5 h-full" />
            </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
