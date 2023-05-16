import style from "./style.module.scss";
import classNames from "classnames";

type Props = {
    title: string,
    color?: 'white'
}
export const Button = ({ title, color }: Props) => {
    return (
        <button className={classNames(style.button, color && style[color])}>
            {title}
        </button>
    );
};
