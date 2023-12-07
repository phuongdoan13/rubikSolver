import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import TitleBar from "@components/home/TitleBar";

export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <TitleBar />
        <p className="px-4 py-2">
          <Link href="/cube3x3">
            <a>Go to next page</a>
          </Link>
        </p>
        <div style="align='center'">
          <Image
            src="/images/rubik.gif"
            alt="Logo image"
            width="256px"
            height="256px"
          />
        </div>
        <Image
          src="/images/rubik.gif"
          alt="Logo image"
          width="256px"
          height="256px"
        />
      </div>
    </React.Fragment>
  );
}
