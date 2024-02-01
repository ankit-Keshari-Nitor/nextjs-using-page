import React from "react"
import Link from "next/link"

export default function Authors() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <Link legacyBehavior href="/authors/[id]" as="/authors/Ankit Keshari">
        <a>Ankit Keshari</a>
      </Link>
    </main>
  )
}
