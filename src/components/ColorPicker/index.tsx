import classNames from "classnames";
import style from "./style.module.scss";

export const ColorPicker = () => {
    return (
        <div>
            <p className={style.text}>
              Choose your color
           </p>
            <div className={style.container}>
                <span className={classNames(style.color, style.red)}></span>
                <span className={classNames(style.color, style.blue)}></span>
                <span className={classNames(style.color, style.black)}></span>
            </div>
        </div>
    );
};
