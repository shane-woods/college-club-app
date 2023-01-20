import React, { useEffect, useState } from "react";
import styles from "./DashNavBar.module.css";
import Finance from "../../public/dash-icons/dollar-sign.svg";
import Chat from "../../public/dash-icons/message-square.svg";
import Roster from "../../public/dash-icons/users.svg";
import Settings from "../../public/dash-icons/settings.svg";
import User from "../../public/dash-icons/user.svg";
import { useTheme } from "next-themes";
import Link from "next/link";
import ThemeButton from "../ThemeButton";
import { useRouter } from "next/router";

const DashNavBar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const darkCode: string = "#1e2328";
  const lightCode: string = "#f3f3f3";
  const oppositeTheme: string = theme === "light" ? darkCode : lightCode;

  return (
    <div className={styles.dashNav}>
      <div className={styles.logo}>
        <Link href="/club/dashboard">LOGO</Link>
      </div>
      <div className={styles.tools}>
        <DashButton Icon={Chat} path="chat" stroke={oppositeTheme} />
        <DashButton Icon={Finance} path="finances" stroke={oppositeTheme} />
        <DashButton Icon={Roster} path="roster" stroke={oppositeTheme} />
      </div>
      <div className={styles.user}>
        <DashButton Icon={Settings} path="settings" stroke={oppositeTheme} />
        <DashButton Icon={User} path="account" stroke={oppositeTheme} />
        <ThemeButton />
      </div>
    </div>
  );
};

type dashProps = {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  path: string;
  stroke: string;
};

const DashButton = (button: dashProps) => {
  const router = useRouter();
  const buttonSelected: Boolean = router.pathname === "/club/" + button.path;

  if (buttonSelected) {
    return (
      <div className={styles.dashSelected}>
        <Link href={"/club/" + button.path}>
          <button.Icon stroke="#31afee" />
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.dashButton}>
      <Link href={"/club/" + button.path}>
        <button.Icon stroke={button.stroke} />
      </Link>
    </div>
  );
};

export default DashNavBar;
