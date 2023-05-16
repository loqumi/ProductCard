import style from "./style.module.scss";
type Props = {
    title: string,
}
export const PriceTag = ({ title} : Props) => {
    return (
        <h1 className={style.title}>
            {title}
        </h1>
    );
};
