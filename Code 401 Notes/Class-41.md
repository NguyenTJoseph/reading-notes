# React 4
## Dynamic Routes
- We want the URL for these pages to depend on the blog data, which means we need to use dynamic routes.
- [id].js
```js
import { getAllPostIds } from '../../lib/posts'

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}
```
- implement getStaticProps

## Deployment
- Import your repository
- Vercel is made by the creators of Next.js and has first-class support for Next.js. When you deploy your Next.js app to Vercel