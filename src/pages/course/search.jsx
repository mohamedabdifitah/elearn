import { useLocation } from "react-router-dom"
import React from "react";
import Suggestion from "../home/components/most";
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
const SearchCourses = () => {
  const query = useQuery()
  console.log(query.get("text"))
  return (
    <div>
      <Suggestion />
    </div>
  )
}

export default SearchCourses
