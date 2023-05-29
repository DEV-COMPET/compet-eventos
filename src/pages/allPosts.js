import clientPromise from "@/app/database/index";

export default function allPosts({ posts }) {
    return (
        <div>
            <h1>Top 20 Movies of All Time</h1>
            <p>
                <small>(According to Metacritic)</small>
            </p>
            <ul>
                {posts.map((post) => (
                    <li>
                        <h2>{post.titulo}</h2>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export async function getServerSideProps() {
    try {
        const client = await clientPromise;
        const db = client.db("TodayNews");

        const posts = await db
            .collection("posts")
            .find({})
            .sort({ metacritic: -1 })
            .limit(20)
            .toArray();

        return {
            props: { posts: JSON.parse(JSON.stringify(posts)) },
        };
    } catch (e) {
        console.error(e);
    }
}