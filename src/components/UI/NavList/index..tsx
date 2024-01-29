import styles from './styles.module.scss';
interface navListProps {
    lang: any;
    home: string;
    about: string;
    services: string;
    contact: string;
}

export default function NavList({ lang, home, about, services, contact }: navListProps) {
    return (
        <ul>
            <li>
                <a href={home}>
                    {lang.init}
                </a>
            </li>
            <li>
                <a href={about}>
                    {lang.about}
                </a>
            </li>
            <li>
                <a href={services}>
                    {lang.services}
                </a>
            </li>
            <li>
                <a href={contact}>
                    {lang.contact}
                </a>
            </li>
        </ul>
    )
}