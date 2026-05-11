'use client';

import { useEffect, useRef, useState } from 'react';

// Validates a full email address (basic check)
function validateEmail(email: string): boolean {
  const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@.+\..+$/;
  return re.test(email) || email.length === 0;
}

const messages = ['Georgi@Karapetrov.top', 'Georgi.D.Karapetrov@gmail.com'];

const HOLD_TICKS = 150; // ticks to wait after message is complete
const TICK_MS = 10; // tick length in ms

function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void>(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay) return;
    const id = setInterval(() => savedCallback.current?.(), delay);
    return () => clearInterval(id);
  }, [delay]);
}

interface EmailLinkProps {
  loopMessage?: boolean;
}

export default function EmailLink({ loopMessage = true }: EmailLinkProps) {
  const [idx, setIdx] = useState(0);
  const [message, setMessage] = useState(messages[0]);
  const [char, setChar] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useInterval(
    () => {
      let newIdx = idx;
      let newChar = char;

      if (char - HOLD_TICKS >= messages[idx].length) {
        newIdx += 1;
        newChar = 0;
      }

      if (newIdx === messages.length) {
        if (loopMessage) {
          setIdx(0);
          setChar(0);
        } else {
          setIsActive(false);
        }
      } else {
        setMessage(messages[newIdx].slice(0, newChar));
        setIdx(newIdx);
        setChar(newChar + 1);
      }
    },
    isActive ? TICK_MS : null,
  );

  const isValid = validateEmail(message);

  return (
    <div
      className="contact-email-container"
      style={isValid ? {} : { color: 'red' }}
      onMouseEnter={() => setIsActive(false)}
      onMouseLeave={() => idx < messages.length && setIsActive(true)}
    >
      <a href={`mailto:${message}`} className="contact-email-link">
        <span>{message}</span>
      </a>
    </div>
  );
}
