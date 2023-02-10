import { client } from "../sanityClient/client";

export const fetchData = async (url) => {
   return await client.fetch(url);
  
};
