import styles from './styles.module.scss';
interface navListProps {
    lang: any;
}

export default function NavList({ lang }: navListProps) {
    return (
        <ul>
            <li>{lang.init}</li>
            <li>{lang.about}</li>
            <li>{lang.services}</li>
            <li>{lang.contact}</li>
        </ul>
    )
}