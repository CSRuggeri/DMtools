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
          // Use the relative URL provided in the API response
          const mappedURL = await axios.get(`https://www.dnd5eapi.co${item.url}`);
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
  }, []); 
  
console.log("data:",data, "error:",error, "loading:", loading)
  return { loading, error, data };
};
