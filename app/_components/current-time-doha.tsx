import { useEffect, useState } from "react";

export const CurrentTimeDoha = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const [time, setTime] = useState<string>(
    new Date().toLocaleTimeString("en-US", {
      timeZone: "Asia/Qatar",
      hour: "2-digit",
      minute: "2-digit",
    }),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const dohaTime = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Qatar",
        hour: "2-digit",
        minute: "2-digit",
      });
      setTime(dohaTime);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  if (!isMounted) {
    return null;
  }
  return <h1 className="font-medium uppercase">{time} Doha</h1>;
};
