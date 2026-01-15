"use client";

import { useEffect, useRef } from "react";

export default function CountdownTimer() {
  const timerRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://cdn.logwork.com/widget/countdown.js"]'
    );

    const initTimer = () => {
      // @ts-ignore – logwork attaches itself to window
      if (window.logworkTimer && timerRef.current) {
        // @ts-ignore
        window.logworkTimer();
      }
    };

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://cdn.logwork.com/widget/countdown.js";
      script.async = true;
      script.onload = initTimer;
      document.body.appendChild(script);
    } else {
      initTimer();
    }
  }, []);

  return (
    <a
      ref={timerRef}
      href="https://logwork.com/countdown-timer"
      className="countdown-timer"
      data-timezone="Asia/Kolkata"
      data-textcolor="#ffffff"
      data-date="2026-02-23 08:00"
      data-background="#010001"
      data-digitscolor="#d70b34"
      data-unitscolor="#ffffff"
    >
     <h3> EVENT STARTS IN</h3>
    </a>
  );
}
