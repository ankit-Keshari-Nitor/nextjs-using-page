import React from "react"
import Link from "next/link"

export default function Blogs() {
  const blogs = [
    { id: 1, slug: "test", title: "One" },
    { id: 2, slug: "test", title: "two" },
  ]
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
