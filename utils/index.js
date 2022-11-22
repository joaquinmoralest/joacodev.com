export function fetchAPI(body) {
  const data = fetch(
    'https://localhost:3000/' + process.env.WORDPRESS_API_URL,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body
    }
  )
  return data
}

export async function getAllPostsFromWordPress(preview) {
  const data = await fetchAPI(`
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
          }
        }
      }
    }
  `)

  return data
}