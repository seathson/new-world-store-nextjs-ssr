import React from 'react'
import Router from 'next/router'
import {MainLayout} from '../../components/MainLayout'

export default function About({ title }) {
  const linkClickHandler = () => {
    Router.push('/')
  }

  return (
    <MainLayout title={'About Page'}>
      <h1>{title}</h1>

      <button onClick={linkClickHandler}>Go back to home</button>
      <button onClick={() => Router.push('/posts')}>Go back to posts</button>
    </MainLayout>
  )
}


About.getInitialProps = async () => {
  const res = await fetch(`${process.env.API_URL}/about`)
  const data = await res.json()

  return {
    title: data.title
  }
}