import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
const find = () => {
  const router = useRouter();
  const id = router.query.id
  console.log(router)

  return (
    <div>
      <h1>{id}</h1>
      <Link href="/routes">
          <button>Voltar</button>
      </Link>
    </div>
  )
}

export default find