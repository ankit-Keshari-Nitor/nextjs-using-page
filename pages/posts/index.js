import RootLayout from "@/components/Layout"
import Link from "next/link"

export default function Posts() {
  return (
    <RootLayout>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
      >
        <h1>Hi, this is post page</h1>
        <Link href="/dashboard">Dashboard</Link>
      </main>
    </RootLayout>
  )
}
