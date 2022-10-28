import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header className={styles.postHeader}>
                <div className={styles.author}>
                    <img
                        className={styles.authorAvatar}
                        src={`https://mdbcdn.b-cdn.net/img/new/standard/city/${String(Math.floor(Math.random() * (120 - 1) + 1)).padStart(3, '0')}.webp`}
                    />

                    <div className={styles.authorInfo}>
                        <strong>John Doe</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time 
                    title="27 de outubro de 2022 às 13:13h"
                    dateTime="2022-10-27 13:13"
                >
                    Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>Olá humano 👋</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eveniet labore commodi architecto reprehenderit quidem et officiis in sunt inventore? Adipisci ea repudiandae obcaecati animi illo laboriosam ab deserunt nihil!</p>

                <p><a href="https://rogovski.dev" target="_blank" >rogovski.dev</a></p>

                <p><a href="">#vulcan</a> <a href="">#namarie</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe o seu feedback</strong>

                <textarea
                    placeholder="Escreva um comentário"
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
            </div>
        </article>
    )
}