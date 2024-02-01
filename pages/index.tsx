import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  const goToPage = (id: any) => {
    router.push(id)
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <p onClick={() => goToPage("posts")}>Go to Posts</p>
      <p onClick={() => goToPage("blogs")}>Go to Blogs</p>
      <p onClick={() => goToPage("authors")}>Go to authors</p>
      <p onClick={() => goToPage("dashboard")}>Go to Dashboard</p>
    </main>
  )
}
