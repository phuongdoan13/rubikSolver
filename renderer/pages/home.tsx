import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const [message, setMessage] = React.useState("No message found");

  React.useEffect(() => {
    window.ipc.on("message", (message: string) => {
      setMessage(message);
    });
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <p>
          <Link href="/next">
            <a>Go to next page</a>
          </Link>
        </p>
        <Image
          src="/images/logo.png"
          alt="Logo image"
          width="256px"
          height="256px"
        />
      </div>
      <div>
        <button onClick={clickHandler}>Get versions</button>
        <p>{message}</p>
      </div>
    </React.Fragment>
  );

  function clickHandler() {
    setMessage(
      `Chrome's verion ${window.versions.chrome()} - Node's version ${window.versions.node()} - Electron's version ${window.versions.electron()}`
    );
  }
}
