import { useParams } from 'react-router-dom';

function Post() {
  const { id } = useParams();
  return (
    <div>
      <h3>Post {id}</h3>
      <p>Content of post {id} will be shown here.</p>
    </div>
  );
}

export default Post;
