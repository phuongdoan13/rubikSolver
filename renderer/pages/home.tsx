import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import "tailwindcss/tailwind.css";
export default function HomePage() {
  const [message, setMessage] = React.useState("No message found");

  React.useEffect(() => {
    const value = `Chrome's verion ${window.versions.chrome()} - Node's version ${window.versions.node()} - Electron's version ${window.versions.electron()}`;
    setMessage(value);
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <p className="px-4 py-2">
          <Link href="/cube3x3">
            <a>Go to next page</a>
          </Link>
        </p>
        <Image
          src="/images/rubik.gif"
          alt="Logo image"
          width="256px"
          height="256px"
        />
      </div>
      <div>
        <p className="text-3xl font-bold underline">{message}</p>
      </div>
    </React.Fragment>
  );
}
