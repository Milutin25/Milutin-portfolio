import { useEffect, useState, FC } from 'react';
import { LeftPart } from '../home';



interface Post {
  id: number;
  title: string;
  cover_image: string;
  url: string;
}
const PostThumbnail: FC <{post : Post}>  = ({post}) => {
    return(
      <div className="kioto_tm_service">
          <a href={post.url} target="_blank" rel="noopener noreferrer">
            <p>{post.title}</p>
            <img src={post.cover_image} alt={post.title}/>
          </a>
        </div>
    )
}


export const Blog: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://dev.to/api/articles?username=milutin_stefanovic_813404&per_page=3"
        );
        const json = await response.json();
        setPosts(json);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch posts.");

      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <LeftPart />

      <div id="service" className="kioto_tm_section">
        <div className="container"></div>
        <div className="kioto_tm_service">
          <div className="kioto_tm_title">
            <span>// My Blogs</span>
          </div>
          <div className="services_list">
              {posts.map((post) => (
                    <PostThumbnail post={post} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

