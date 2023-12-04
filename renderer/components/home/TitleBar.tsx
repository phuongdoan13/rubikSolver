import styles from "@styles/home/TitleBar.module.css";

type TitleBarProps = {
  title?: string; // Optional title prop
};

export default function TitleBar({ title = "Rubik Solver" }: TitleBarProps) {
  return (
    <div className={`${styles.titleBarContainer}`}>
      <p className={`px-4 py-2 ${styles.titleText}`}>{title}</p>
    </div>
  );
}
