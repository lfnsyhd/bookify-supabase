import routes from '../router/routes';

export const menuUser = [
  {
    isActive: 'dashboard',
    to: routes.home,
    text: "Dashboard"
  },
  {
    isActive: 'explore',
    to: routes.explore,
    text: "Explore"
  },
  {
    isActive: 'my-book',
    to: routes.user?.myBook,
    text: "My Book"
  },
  {
    isActive: 'logout',
    to: routes.logout,
    text: "Logout"
  },
];

export const menuAdmin = [
  {
    isActive: 'dashboard',
    to: routes.home,
    text: "Dashboard"
  },
  {
    isActive: 'explore',
    to: routes.explore,
    text: "Explore"
  },
  {
    isActive: 'books',
    to: routes.admin?.books?.list,
    text: "Books"
  },
  {
    isActive: 'users',
    to: routes.admin?.users?.list,
    text: "Users"
  },
  {
    isActive: 'lendings',
    to: routes.admin?.lendings?.list,
    text: "Lendings"
  },
  {
    isActive: 'logout',
    to: routes.logout,
    text: "Logout"
  },
];