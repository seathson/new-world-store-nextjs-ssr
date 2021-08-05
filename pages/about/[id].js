// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { MainLayout } from '../../components/MainLayout'
// import { useRouter } from 'next/router'
// import Image from 'next/image'

// export default function Post({ news: serverNews }) {
//   const [news, setNews] = useState(serverNews)
//   const router = useRouter()

//   useEffect(() => {
//     async function load() {
//       const res = await fetch(`${process.env.API_DB}/news/${router.query.id}`)
//       const data = await res.json()

//       setNews(data)
//     }

//     if (!serverNews) {
//       load()
//     }
//   }, [])

//   if (!news) {
//     return (
//       <MainLayout>
//         <p>Loading...</p>
//       </MainLayout>
//     )
//   }

//   return (
//     <MainLayout>
//       <h1>{news.title}</h1>
//       <hr />
//       <p>{news.text}</p>
//       <Link href={'/news'}>
//         <a>Back to all posts</a>
//       </Link>
//     </MainLayout>
//   )
// }

// export async function getServerSideProps({ query }) {
//   const res = await fetch(`${process.env.API_DB}/news/${query.id}`)
//   const news = await res.json()
//   console.log(news)

//   return {
//     props: {news}
//   }
// }
