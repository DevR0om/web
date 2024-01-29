import styles from './styles.module.scss';
interface navListProps {
    lang: any;
}

export default function NavList({ lang }: navListProps) {
    return (
        <ul>
            <li>
                <a href='#main'>
                    {lang.init}
                </a>
            </li>
            <li>
                <a href='#about'>
                    {lang.about}
                </a>
            </li>
            <li>
                <a href='#services'>
                    {lang.services}
                </a>
            </li>
            <li>
                <a href='#contact'>
                    {lang.contact}
                </a>
            </li>
        </ul>
    )
}