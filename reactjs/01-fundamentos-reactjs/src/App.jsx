import { Header } from "./components/Header";


import styles from './App.module.css';
import './global.css'

import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="John Doe"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi placeat, dolor enim iusto, optio impedit commodi quos at aliquid, repellendus id ut corporis doloremque voluptatum eligendi! Distinctio fugiat iusto adipisci."
          />

          <Post
            author="Mary Doe"
            content="Another post here."
          />
        </main>
      </div>
    </>
  )
}