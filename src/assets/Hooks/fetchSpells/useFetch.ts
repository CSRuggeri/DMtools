import axios from "axios";
import { useEffect, useState } from "react";

interface FetchResult {
  loading: boolean;
  error: string | null;
  data: any[] | null;
}

export const useFetch = (url: string): FetchResult => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any[] | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const results = response.data.results;
  
      const mappedData = await Promise.all(
        results.map(async (item: any) => {
          const mappedURL = await axios.get("https://www.dnd5eapi.co" + item.url);
          return mappedURL.data;
        })
      );
  
      setData(mappedData);
      setLoading(false);
    } catch (error) {
      setError("An error occurred while fetching data.");
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, [url]); // useEffect will re-run only when `url` changes
  // Empty dependency array to run effect only once
  
console.log(data)
  return { loading, error, data };
};
