import {createBrowserRouter} from "react-router-dom";
import Main from "../../pages/main/main";
import { Todo } from "../../pages/todo/todo";
// import한다! nodelist안에 react-router-dom을 가지고 온것이다.

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>
    },
    {
        path:"/todo/:todoId",
        element:<Todo/>
    }
])

export default router

// 내가 지금 하고자 하는 것은 위의 const router에 담겨진 createBrowserRouter()를 export시켜서 app.js에서 사용할것이다
// 방법은 두가지가 있다 1. export -> export default
//                 2. export const router = ...
// 첫번째 방법 내가 내보내고 싶은것(router)의 이름을 export default router 그대로 작성하면된다
// 첫번째 방법을 사용하면 내가 가지고오고싶은 이름을 마음대로 설정할수있다. 

   // export default router
  // ex) import [가지고 오고싶은 이름] from "상대경로" 를 작성해야한다


//   import {createBrowserRouter,RouterProvider,} from "react-router-dom";

// export const router = createBrowserRouter([
// import {router} from "상대경로"
// 내가 export한 변수나 함수명을 정확히 기재해야한다
// 지금 예시처럼 앞에 export를 붙이게 되면 내가 export한 변수나 함수명을 정확히 기재해야합니다.

//     {
//         path: "/",
//         element: <div>메인페이지입니다.</div>
//     },
//     {
//         path:"/todo",
//         element:<div>투두페이지입니다.</div>
//     }
// ])

// export default router
  

