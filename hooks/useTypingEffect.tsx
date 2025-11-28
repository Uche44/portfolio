import { useState, useEffect } from "react";

export const useTypingEffect = (
  words: string[],
  typingSpeed: number = 150,
  pauseDuration: number = 1000
): string => {
  const [index, setIndex] = useState<number>(0);
  const [subIndex, setSubIndex] = useState<number>(0);
  const [blink, setBlink] = useState<boolean>(true);
  const [reverse, setReverse] = useState<boolean>(false);

  useEffect(() => {
    if (!words.length) return;

    let timeout: ReturnType<typeof setTimeout> | null = null;

    if (subIndex === words[index].length + 1 && !reverse) {
      timeout = setTimeout(() => setReverse(true), pauseDuration);
    } else if (subIndex === 0 && reverse) {
     
      timeout = setTimeout(() => {
        setReverse(false);
        setIndex((prev) => (prev + 1) % words.length);
      }, typingSpeed);
    } else {
      timeout = setTimeout(() => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      }, typingSpeed);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [subIndex, index, reverse, words, typingSpeed, pauseDuration]);

  useEffect(() => {
    const blinkTimeout = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);

    return () => clearTimeout(blinkTimeout);
  }, [blink]);

  return `${words[index % words.length].substring(0, subIndex)}${
    blink ? "|" : " "
  }`;
};
