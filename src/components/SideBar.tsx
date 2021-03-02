import Link from "next/link";
import { BiHomeAlt } from "react-icons/bi";
import styles from "../styles/components/SideBar.module.css";

export function Sidebar() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a>
          <BiHomeAlt size={30} />
        </a>
      </Link>
    </div>
  );
}
