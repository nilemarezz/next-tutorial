import '../styles/globals.css'
import Layout from '../src/Layout'
import Head from 'next/head'
import { UserContext } from '../src/context/Usercontext'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tutorial Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <UserContext>
          <Component {...pageProps} />
        </UserContext>
      </Layout>
    </>
  )
}

export default MyApp
