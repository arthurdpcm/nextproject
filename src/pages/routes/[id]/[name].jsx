import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link'
const Name = () => {
    const router = useRouter()
    const id = router.query.id
    const name = router.query.name

  return (
    <div>
      <h1>Routes / {id} / {name}</h1>
      <Link href="/routes" passHref>
          <button>Voltar</button>
      </Link>
    </div>
  )
}

export default Name