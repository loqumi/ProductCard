import style from "./style.module.scss";

type Props = {
    title: string,
}
export const ProductName = ({ title } : Props) => {
    return (
        <h2 className={style.name}>
            {title}
        </h2>
    );
};
