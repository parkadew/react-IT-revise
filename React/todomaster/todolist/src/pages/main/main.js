import { useNavigate } from "react-router-dom"

const mockProducts = [
  {id:3,
   category:"rank",
   name:"상품-1",
   price: 3000
  },
  {
    id:12,
    category:"random",
    name:"상품-2",
    price: 2000
  },
]


function Main(){
  const navigation = useNavigate()

    const handler =()=>{}

    return <div onClick={handler}>{/*html 문법을 반환할수 있음 */}
    {
        mockProducts.map((product) => {
           console.log("hello")
          // return <Link to={`/todo/${product.id}?goods=${product.category}`}key={product.id}>
          //           {product.name}
          //         </Link>
                            
                  return <div key={product.id} onClick={()=>{
                    // window.location.href = `/todo/${product.id}?goods=${product.category}`
                    navigation(`/todo/${product.id}?goods=${product.category}`);
                }}>
                      {product.name}
                </div>
                  })
     }
      메인페이지입니다 </div>
  
}
export default Main