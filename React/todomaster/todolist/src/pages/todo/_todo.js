import { useParams, useSearchParams } from "react-router-dom"


export const Todo = () => {
    "/구분 query-string,<<url-parameter>>"
    const {todoId} = useParams()
    const [searchParams] = useSearchParams()
    console.log(todoId,searchParams.get("goods"))
    return <div>투두 페이지입니다.</div>
}