import style from "./style.module.scss";
type Props = {
    title: string,
}
export const Description = ({ title } : Props) => {
    return (
        <p className={style.description}>
            {title}
        </p>
    );
};
