import style from "./style.module.scss";
type Props = {
    title: string,
}
export const AdditionalInfo = ({ title } : Props) => {
    return (
        <a href="/" className={style.info}>
            {title}
        </a>
    );
};
