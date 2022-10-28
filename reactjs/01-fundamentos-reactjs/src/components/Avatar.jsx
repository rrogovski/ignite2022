import styles from './Avatar.module.css';

export function Avatar({ hasBorder = true, src, alt }) {
    const avatarDefault = `https://mdbcdn.b-cdn.net/img/new/standard/city/${String(Math.floor(Math.random() * (120 - 1) + 1)).padStart(3, '0')}.webp`;
    // const hasBorder = props.hasBorder ?? true;

    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={src || avatarDefault}
            alt={alt}
        />
    )
}