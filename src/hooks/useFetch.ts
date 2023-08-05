import useSWR, { type SWRResponse } from 'swr';
import { api } from '~/utils/api';

const fetch = async (path: string) => {
  const content = await api
    .get(path)
    .then(({ data }) => data)
    .catch(async ({ response }) => {
      throw new Error(response.data.error);
    });

  return content;
};

const useFetch = <T>(url: string | null): SWRResponse<T> => {
  const props = useSWR<T>(url, fetch, {
    revalidateOnFocus: false,
  });

  return props;
};

export default useFetch;
