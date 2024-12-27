
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './PostsComponent';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>React Query Demo</h1>
      <PostsComponent />
    </QueryClientProvider>
  );
}

export default App;
