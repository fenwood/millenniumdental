import globalStylesUrl from "./styles/global.css"
import {
  Links,
  Link,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export const links = () => [
  ...(globalStylesUrl ? [{ rel: "stylesheet", href: globalStylesUrl }] : []),
]

export const meta = () => {
  return [
    { title: "Welcome to Millenium Dentistry" },
    { property: "og:title", content: "Brampton dental services" },
    {
      name: "description",
      content: "Family dentist in brampton, ontario",
    },
    {
      name: "keywords",
      content: "dentist, dental office brampton, best dentist in brampton",
    },
  ]
}

export default function App() {
  return (
    <Document>
      <Layout></Layout>
      <Outlet />
    </Document>
  )
}

function Document({ children, title }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.4.0/fonts/remixicon.css"
          rel="stylesheet"
        ></link>
        <script src="js/sticky.js"></script>
        <Meta />
        <Links />
        <title>{title ? title : "Welcome to Millenium Dentistry"}</title>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
        <Footer />
        <script src="js/navmenu.js"></script>
      </body>
    </html>
  )
}

function Layout({ children }) {
  return (
    <>
      <Navbar />
    </>
  )
}

export function ErrorBoundary() {
  const error = useRouteError()
  return (
    <Document>
      <Layout></Layout>
      <h1>Error</h1>
      <pre>{error.message}</pre>
    </Document>
  )
}
