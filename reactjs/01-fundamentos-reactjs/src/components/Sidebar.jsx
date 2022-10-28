import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebarContent}>
                <img
                    className={styles.cover}
                    src={`https://mdbcdn.b-cdn.net/img/new/standard/city/${String(Math.floor(Math.random() * (120 - 1) + 1)).padStart(3, '0')}.webp`}
                />
                <div className={styles.profile}>
                    <Avatar src="https://github.com/rrogovski.png" alt="Imagem de perfil"/>
                    
                    <strong>John Doe</strong>
                    <span>Web Developer</span>
                </div>

                <footer>
                    <a href="#">
                        <PencilLine size={20}/>
                        Editar seu perfil
                    </a>
                </footer>
            </div>
        </aside>
    )
}