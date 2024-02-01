import React from "react"
import { useRouter } from "next/router"

export default function Author() {
  const router = useRouter()
  const {
    query: { id },
  } = router
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <h1>The Author is : {id}</h1>
    </main>
  )
}
