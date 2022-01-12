
import './App.css';
import AuthContextProvider from './contexts/AuthContext';
import BlogContextProvider from './contexts/BlogContext';
import AppRouter from "./router/AppRouter";


function App() {
  return (
  <AuthContextProvider>
    <BlogContextProvider>
      <AppRouter/>
    </BlogContextProvider>
  </AuthContextProvider>
  );
}

export default App;
