import css from '../styles/header.module.scss';

export function Header({ children }) {
    return (
        <div className={css.header}>
            <h2>Theology 101</h2>
        </div>
    );
}
