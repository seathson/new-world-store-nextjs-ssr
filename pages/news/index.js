import { useState, useEffect } from 'react'
import Head from 'next/head'
import { MainLayout } from '../../components/MainLayout'
import Link from 'next/link'
import mountain from '../../assets/img/mountain.png'
import { News } from '../../components/News/News'

export default function Posts({ posts: serverPosts }) {
  const [posts, setPosts] = useState(serverPosts)

  useEffect(() => {
    async function load() {
      const res = await fetch('http://localhost:4200/posts')
      const data = await res.json()

      setPosts(data)
    }
    console.log(serverPosts)
    if (!serverPosts) {
      load()
    }
  }, [])

  if (!posts) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    )
  }

  return (
    <MainLayout title={'Posts Page'}>
      <Head>
        <title>Posts page</title>
      </Head>

      <section className='flex justify-center bg-no-repeat bg-center bg-cover items-center w-full' style={{ backgroundImage: `url(${mountain.src})`, height: '40vh' }}>
        <div className="container justify-center items-center">
        <h2 className="sectionTitle">NEWS</h2>
        </div>
      </section>
      <section className='flex'>
        <div className="container">
          <News/>
        </div>
      </section>


      {/* <h1>Post Page</h1>
      <ul>
        {posts.map(post => (<li key={post.id}>
          <Link href={'/post/[id]'} as={`/post/${post.id}`}><a>{post.title}</a></Link>
        </li>))}
      </ul> */}
    </MainLayout>
  )
}

Posts.getInitialProps = async ({ req }) => {
  if (!req) {
    return {posts: null}
  }

  const res = await fetch(`${process.env.API_URL}/posts`)
  const posts = await res.json()

  return {
    posts
  }
}