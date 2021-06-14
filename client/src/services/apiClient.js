const baseUrl = 'http://localhost:3001/menus';

const apiClient = {
  createUser: async function ({ username, email, password, restaurantName }) {
    return await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password, restaurantName })
    });
  },

  authUser: async function ({username, email, password}) {
    return await fetch(`${baseUrl}/auth`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(username ? {username, password} : {email, password})
    });
  },

  getMenu: async function (menuId) {
    return await fetch(`${baseUrl}/${menuId}`);
  }
};

export default apiClient;