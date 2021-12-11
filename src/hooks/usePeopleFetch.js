import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = (nationalities) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUsers(nationalities);
  }, [nationalities]);

  async function fetchUsers(nationalities) {
    setIsLoading(true);
    const response = await axios.get(
      `https://randomuser.me/api/?nat=${nationalities}&results=25&page=1`
    );
    setIsLoading(false);
    setUsers(response.data.results);
  }

  return { users, isLoading, fetchUsers };
};
