import { useMemo } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

// extracts query paarameters from link
function useQuery(paramId) {
  const [searchParams] = useSearchParams();

  const query = useMemo(
    () => searchParams.get(paramId),
    [searchParams, paramId]
  );

  return query;
}

export default useQuery;