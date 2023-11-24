import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function NextPage() {
  return (
    <React.Fragment>
      <Head>
        <title>Solve 3x3 Cube</title>
      </Head>
      <div>
        <p>
          <Link href="/home">
            <a>Home Page</a>
          </Link>
        </p>
        <p>
          TBD
        </p>
      </div>
    </React.Fragment>
  )
}
