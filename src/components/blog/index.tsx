import { useEffect, useState, FC } from 'react';
import { LeftPart } from '../home';
import blogImage from "../../assets/images/web.svg";


interface Post {
  id: number;
  title: string;
  cover_image: string;
  url: string;
}

const Blog: FC = () => {
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
        setLoading(false);
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
            <ul>
              {posts.map(post => (
                <li key={post.id}>
                  <div className="list_inner">
                    <img className="svg" src={blogImage} alt="" />
                    <h3 className="title">Check out my latest blog posts</h3>
                    <a href={post.url} target="_blank" rel="noopener noreferrer">
                      {post.title}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
