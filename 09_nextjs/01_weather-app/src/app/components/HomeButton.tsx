"use client";
import { useRouter } from "next/navigation";
import style from "./style.module.css";

export default function HomeButton() {
  const rounter = useRouter();
  const handleClick = () => {
    rounter.push("/");
  };
  return (
    <button className={style.button} onClick={handleClick}>
      홈으로
    </button>
  );
}
