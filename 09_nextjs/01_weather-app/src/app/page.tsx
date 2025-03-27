import styles from "./page.module.css";
import Link from "next/link";
import dotenv from "dotenv";
dotenv.config();

export function generateMetadata() {
  return {
    title: "상세 날씨 데이터",
    description: "상세 날씨 데이터입니다.",
  };
}

const getCurrentWeather = async () => {
  const res = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=" +
      process.env.WEATHERAPI +
      "&q=seoul&api=no"
  );
  return res.json();
};

export default async function Home() {
  const res = await getCurrentWeather();
  console.log(res);

  return (
    <>
      <h1>Main Page</h1>
      <ul>
        <li>
          <Link href="/seoul">서울</Link>
          <span>&nbsp;{res.current.condition.text}</span>
        </li>
        <li>
          <Link href="/NYC">뉴욕</Link>
        </li>
        <li>
          <Link href="/london">런던</Link>
        </li>
      </ul>
    </>
  );
}
