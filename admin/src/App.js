import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material';
import { deepPurple, red } from '@mui/material/colors';
import Auth from './pages/Auth/Auth';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import ProtectedRoute from './components/ProtectedRoutes';
import NotFound from './404';
import Users from './pages/Dashboard/Users/Users';
import Posts from './pages/Dashboard/Posts/Posts';
import Categories from './pages/Dashboard/Categories/Categories';
import Tags from './pages/Dashboard/Tags/Tags';
import Homepage from './pages/Dashboard/Homepage/Homepage';

import Editor from './pages/Dashboard/Posts/Editor/Editor';
import Profile from './pages/Dashboard/Profile/Profile';
import PostsLayout from './pages/Dashboard/Posts/PostsLayout';

const theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: red,
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route exact path='/login' element={<Auth />} />
            <Route element={<ProtectedRoute />}>

              {/* Post Routes */}
              <Route exact path='/posts' element={<PostsLayout />}>
                <Route index element={<Posts />} />
                <Route exact path='all-posts' element={<Posts />} />
                <Route exact path='create' element={<Editor />} />
              </Route>
              

              {/* User Routes */}
              <Route exact path='/users' element={<Users />} />
              <Route exact path='/user/create' element={<Users />} />

              {/* Category Routes */}
              <Route exact path='/categories' element={<Categories />} />
              <Route exact path='/category/create' element={<Categories />} />

              {/* Tag Routes */}
              <Route exact path='/tags' element={<Tags />} />
              <Route exact path='/tag/create' element={<Tags />} />

              <Route exact path='/dashboard' element={<Dashboard />} />
              <Route exact path='/profile' element={<Profile />} />
              <Route exact path='/homepage' element={<Homepage />} />
              <Route path='*' element={<NotFound />}/>
            </Route>
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
