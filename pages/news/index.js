import { useState, useEffect } from 'react'
import Head from 'next/head'
import { MainLayout } from '../../components/MainLayout'
import mountain from '../../assets/img/mountain.webp'
import { NewsR } from '../../components/News/NewsR'

export default function News({ news: serverNews }) {
  const [news, setNews] = useState(serverNews)

  useEffect(() => {
    async function load() {
      const res = await fetch(`http://localhost:3001/api/news`)
      // const res = await fetch(`${process.env.API_DB}/news`)
      const data = await res.json()

      setNews(data)
    }

    if (!serverNews) {
      load()
    }
  }, [])

  if (!news) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    )
  }

  return (
    <MainLayout title={'New World Store | News buy gold coins'}>

      <section className='flex justify-center bg-no-repeat bg-center h-96 md:h-64 bg-cover items-center w-full' style={{ backgroundImage: `url(${mountain.src})`}}>
        <div className="container justify-center items-center">
        <h2 className="sectionTitle">NEWS</h2>
        </div>
      </section>
      <section className='flex'>
        <div className="container xs:px-0">
          <NewsR news={news}/>
        </div>
      </section>


      {/* <h1>Post Page</h1>
      <ul>
        {news.map(item => (<li key={item.id}>
          <Link href={'/news/[id]'} as={`/news/${item.id}`}><a>{item.title}</a></Link>
        </li>))}
      </ul> */}
    </MainLayout>
  )
}

News.getInitialProps = async ({ req }) => {
  if (!req) {
    return {news: null}
  }

  const res = await fetch(`http://localhost:3001/api/news`)
  // const res = await fetch(`${process.env.REACT_APP_API_DB}/news`)
  const news = await res.json()

  return {
    news
  }
}