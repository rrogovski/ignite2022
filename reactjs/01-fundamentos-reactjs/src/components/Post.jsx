import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import { humanFirendlyDate, publishedDateRelativeToNow } from '../utils/dateFormat'
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author, content, publishedAt }) {
    const MarkdownComponents = {
        code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                    <SyntaxHighlighter
                        children={String(children).replace(/\n$/, "")}
                        style={dark} // theme
                        language={match[1]}
                        PreTag='section' // parent tag
                        {...props}
                    />
                ) : (
                    <code className={className} {...props}>
                        {children}
                    </code>
                );
        },
    };

    const markdown = `# Hello, world!
        ## This is a first post.

        - one
        - two
        - three

        ~~~sh
        ls -lh
        ~~~

    `
    return (
        <article className={styles.post}>
            <header className={styles.postHeader}>
                <div className={styles.author}>
                    <Avatar
                        src={author.avatarUrl}
                        alt={'Imagem de perfil de ' + author.name}
                    />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time 
                    title={humanFirendlyDate(publishedAt)}
                    dateTime={publishedAt.toISOString()}
                >
                    {publishedDateRelativeToNow(publishedAt)}
                </time>
            </header>

            <div className={styles.content}>
                <ReactMarkdown
                    children={markdown}
                    remarkPlugins={[remarkGfm]}
                    components={MarkdownComponents}
                />
                {/* <p>Olá humano 👋</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eveniet labore commodi architecto reprehenderit quidem et officiis in sunt inventore? Adipisci ea repudiandae obcaecati animi illo laboriosam ab deserunt nihil!</p>

                <p><a href="https://rogovski.dev" target="_blank" >rogovski.dev</a></p>

                <p><a href="">#vulcan</a> <a href="">#namarie</a></p> */}
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