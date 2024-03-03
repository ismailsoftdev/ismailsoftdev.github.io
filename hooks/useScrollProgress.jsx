import React, { useState, useEffect } from "react";

const useScrollProgress = () => {
  const [completion, setCompletionState] = useState(0);

  const setCompletion = (newCompletion) =>
    setCompletionState((prevCompletion) => {
      if (prevCompletion !== newCompletion) {
        return newCompletion;
      }
      return prevCompletion;
    });

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setCompletion((currentProgress / scrollHeight).toFixed(2) * 100);
      }
    };

    // Event
    window.addEventListener("scroll", updateScrollCompletion);
    // Clear Event
    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);

  return completion;
};

export default useScrollProgress;
