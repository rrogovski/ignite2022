import { Header } from "./components/Header";


import styles from './App.module.css';
import './global.css'

import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

export function App() {
  const posts = [
    {
      id: 1,
      author: {
        name: 'John Doe',
        role: 'Web Developer',
        avatarUrl: 'https://github.com/rrogovski.png'
      },
      content: `# Hello, world! This is a first post.`,
      publishedAt: new Date('2022-10-27 13:13:13')
    },
    {
      id: 2,
      author: {
        name: 'Jane Doe',
        role: 'Back-end Engeneer',
        avatarUrl: ''
      },
      content: `# Hello, world! This is another post.`,
      publishedAt: new Date('2022-10-27 13:13:13')
    },
    {
      id: 3,
      author: {
        name: 'John Doe',
        role: 'Web Engeneer',
        avatarUrl: ''
      },
      content: `# Hello, world! This is another post.`,
      publishedAt: new Date('2022-10-27 13:13:13')
    }
  ]

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main className={styles.main}>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}

          {/* <Post
            author="John Doe"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi placeat, dolor enim iusto, optio impedit commodi quos at aliquid, repellendus id ut corporis doloremque voluptatum eligendi! Distinctio fugiat iusto adipisci."
          />

          <Post
            author="Mary Doe"
            content="Another post here."
          /> */}
        </main>
      </div>
    </>
  )
}