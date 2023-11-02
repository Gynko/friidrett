
import { useEffect, useState } from "react";

export const useMembers = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("/members")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((fetchedData) => {
        setMembers(fetchedData);
      });
  }, []);

  return members;
};
