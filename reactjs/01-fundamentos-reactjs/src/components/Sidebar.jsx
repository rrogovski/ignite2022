import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src={`https://mdbcdn.b-cdn.net/img/new/standard/city/${String(Math.floor(Math.random() * (120 - 1) + 1)).padStart(3, '0')}.webp`}
            />
            <div className={styles.profile}>
                <img
                    className={styles.avatar}
                    src={`https://mdbcdn.b-cdn.net/img/new/standard/city/${String(Math.floor(Math.random() * (120 - 1) + 1)).padStart(3, '0')}.webp`}
                    alt="Imagem de perfil"
                />
                <strong>John Doe</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}