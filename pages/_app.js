import '../styles/global.css'
export default function App({ Component, pageProps }) {
  return (
    <div className="flex justify-center w-full">
      <div className="w-1/2 prose lg:prose-xl">
        <Component {...pageProps} />
      </div>
    </div>
  )
}
