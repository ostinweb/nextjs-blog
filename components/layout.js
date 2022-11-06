import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const name = 'Nikita Ostapuk'
export const siteTitle = 'Nikita Ostapuk'

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex justify-center flex-col">
        {home ? (
          <>
            <Image
              className="rounded-full "
              priority
              src="/images/profile.jfif"
              height={144}
              width={144}
              alt="nikita ostapuk"
            />
            <h1>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                className="rounded-full"
                priority
                src="/images/profile.jfif"
                height={108}
                width={108}
                alt="nikita ostapuk"
              />
            </Link>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  )
}
