import { client } from "../sanityClient/client";

export const fetchData = async (url) => {
  const { data } = await client.fetch(url);
  return data;
};
