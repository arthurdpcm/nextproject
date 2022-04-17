import { useRouter } from 'next/router'
import Link from 'next/link'
import React from 'react'

const params = () => {
    const router = useRouter()
    const id = router.query.id
    const name = router.query.name
    return (
        <div>
            <h1>Params: {id}, {name}</h1>
            <Link href="/routes">
                <button>Voltar</button>
            </Link>
        </div>
    )
}

export default params