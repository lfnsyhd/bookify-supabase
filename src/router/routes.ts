const routes = {
  home: "/",
  explore: "/explore",
  login: "/login",
  register: "/register",
  logout: "/logout",
  user: {
    dashboard: "/user/dashboard",
    myBook: "/user/my-book"
  },
  admin: {
    dashboard: "/admin/dashboard",
    users: {
      list: "/admin/users/list"
    },
    books: {
      list: "/admin/books/list"
    },
    lendings: {
      list: "/admin/lendings/list"
    }
  },
  notFound: "*",
};

export default routes;