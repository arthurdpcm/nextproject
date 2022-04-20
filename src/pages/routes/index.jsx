import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'



const Index = () => {

    const router = useRouter();
    const simpleNavigation = (url) =>{
        router.push(url)
    }

    const paramsNavigation = () => {
        router.push({
            pathname:"/routes/params",
            query: {
                id: 123,
                name: "Ana"
            }
        })
    }

  return (
    <>
        <div>
            <h1>Index Routes:</h1>
            <ul>
                <Link href="/routes/params?id=12&name=ana" passHref>
                    <li><a href="
                    ">Params</a></li>
                </Link>

                <Link href="/routes/123/find" ><a href=""><li>Find</li></a></Link>

                <Link href="/routes/123/Arthur" passHref><li>Arthur</li></Link>

            </ul>

            <div style={
                {display: "flex",
                flexDirection:"column",
                alignItems:"start",
                }}>
                    <button onClick={()=> router.push("/routes/123/find")}>Find</button>
                    <button onClick={()=> simpleNavigation("/routes/123/Arthur")}>Arthur</button>
                    <button onClick={()=> paramsNavigation()}>Params</button>

            </div>
        </div>
    </>

  )
}

export default Index