import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} alt="Imagem do usuário que fez este comentário" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>John Doe</strong>
                            <time 
                                title="27 de outubro de 2022 às 13:13h"
                                dateTime="2022-10-27 13:13"
                            >
                                Publicado há 1h
                            </time>
                        </div>

                        <button title='Excluir comentário'>
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque earum voluptatibus repellendus sed sequi quo consequuntur reiciendis impedit exercitationem ut, excepturi fuga sunt hic suscipit? Esse deserunt corporis expedita fuga?</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>42</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}