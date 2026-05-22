import { useEffect, useState } from "react";

export function useCurrentDateTime() {
  // 現在日時をstateとして管理する
    const [now, setNow] = useState(() => new Date());

    useEffect(() => {
    // 1秒ごとに現在日時を更新する
    const timerId = setInterval(() => {
        setNow(new Date());
    }, 1000);

    // コンポーネントが消えたときにタイマーを止める
    return () => {
        clearInterval(timerId);
    };
    }, []);

  // 表示用の文字列に整形する
    const formattedDateTime = new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    }).format(now);

    return {
    now,
    formattedDateTime,
    };
}