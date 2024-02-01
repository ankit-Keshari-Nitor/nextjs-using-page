import React from "react"
import { useRouter } from "next/router"
import { usePathname } from "next/navigation"

export default function Blog() {
  const pathname = usePathname()

  console.log(pathname)
  const router = useRouter()
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <h1>Blog {router.query.id}</h1>
    </main>
  )
}
