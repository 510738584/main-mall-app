const roleToRoute = {
  coustomer: [{
    name: 'Product',
  },
  {
    name: 'ProductList',
  },
  {
    name: 'ProductAdd',
  },
  ],
  admin: [{
    name: 'Product',
  },
  {
    name: 'ProductList',
  },
  {
    name: 'ProductAdd',
  },
  {
    name: 'Category',
  },
  ],
};

export default function getMenuRoute(role, routes) {
  console.log(role);
  const allowRoutesName = roleToRoute[role].map((item) => item.name);
  const resultRoutes = routes.filter((r) => {
    const obj = r;
    if (allowRoutesName.indexOf(r.name) !== -1) {
      const { children } = obj;
      obj.children = children.filter((c) => allowRoutesName.indexOf(c.name) !== -1);
      return true;
    }
    return false;
  });
  console.log(resultRoutes);
  return resultRoutes;
}
