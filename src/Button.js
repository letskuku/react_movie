import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
    // 랜덤하게 클래스 이름 생성되므로 동일한 클래스 이름(btn) 다른 파일 내에서 사용 가능
    return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Button; // App.js에서 Button을 가져올 수 있게 함