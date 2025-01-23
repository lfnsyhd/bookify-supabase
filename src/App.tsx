// src/App.tsx
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';
import routes from './router/routes';
import Login from './pages/Login';
import UserProvider from './context/user';
import UserDashboard from './pages/user/UserDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import PrivateRoute from './components/PrivateRoute';
import NotFound from './pages/NotFound';
import MainLayout from './layouts/MainLayout';
import Register from './pages/Register';
import Logout from './pages/Logout';
import Explore from './pages/Explore';
import MyBook from './pages/user/MyBook';
import BookList from './pages/admin/BookList';
import UserList from './pages/admin/UserList';
import LendingList from './pages/admin/LendingList';

function App() {
  return (
    <Router>
      <MainLayout>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Navigate to={routes.login} />} />
            <Route path={routes.login} element={<Login />} />
            <Route path={routes.logout} element={<Logout />} />
            <Route path={routes.register} element={<Register />} />
            <Route path="*" element={<NotFound />} />

            {/* USER */}
            <Route
              path={routes.explore}
              element={<PrivateRoute element={<Explore />} />}
            />
            <Route
              path={routes.user.dashboard}
              element={<PrivateRoute element={<UserDashboard />} />}
            />
            <Route
              path={routes.user.myBook}
              element={<PrivateRoute element={<MyBook />} />}
            />

            {/* ADMIN */}
            <Route
              path={routes.admin.dashboard}
              element={<PrivateRoute element={<AdminDashboard />} />}
            />
            <Route
              path={routes.admin.books.list}
              element={<PrivateRoute element={<BookList />} />}
            />
            <Route
              path={routes.admin.users.list}
              element={<PrivateRoute element={<UserList />} />}
            />
            <Route
              path={routes.admin.lendings.list}
              element={<PrivateRoute element={<LendingList />} />}
            />
          </Routes>
        </UserProvider>
      </MainLayout>
    </Router>
  );
}

export default App;
