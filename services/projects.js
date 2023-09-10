export async function getProjects() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects?populate[cover][fields][0]=url`)

  if (!res.ok) {
    throw new Error("Something went wrong")
  }

  const { data } = await res.json()
  return data
}

export function getCoverImage({ attributes }) {
  const { url } = attributes.cover.data.attributes
  return `${process.env.NEXT_PUBLIC_API_URL}${url}`
}