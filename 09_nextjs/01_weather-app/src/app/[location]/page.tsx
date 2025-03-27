import * as React from "react";
import Link from "next/link";
import HomeButton from "../components/HomeButton";
import { getForecast } from "../utils/getForecast";

type Props = {
  // params: Promise<{ location: string }>;
  params: { location: string };
};

export default async function Detail({ params }: Props) {
  // const { location } = React.use(params);
  const { location } = await params;
  const name = location === "seoul" ? " 서울" : location;

  const res = await getForecast(location);
  console.log(res);

  return (
    <>
      <h1>{name}의 3일치 날씨 예보</h1>
      <ul>
        {res.forecast.forecastday.map((day) => (
          <li key={day.date}>
            {day.date} / {day.day.avgtemp_c}
          </li>
        ))}
      </ul>
      <br />
      <HomeButton />
      {/* <Link href="/">홈으로</Link> */}
    </>
  );
}
