import { SanityDocument } from 'next-sanity';
import Link from 'next/link';

export default function Posts({ posts }: { posts: SanityDocument[] }) {
  console.log(posts);

  return (
    <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
      {posts?.length > 0 ? (
        posts.map((post) => (
          <Link key={post._id} href={`/publication/${post.slug.current}`}>
            <h2 className="p-4 hover:bg-blue-50">{post.titre}</h2>
          </Link>
        ))
      ) : (
        <div className="p-4 text-red-500">No posts found</div>
      )}
    </main>
  );
}
