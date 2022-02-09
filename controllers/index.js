exports.endpoints = (req, res) => {
  res.send(`
      <h1>Welcome to React-SSR API<h1>
      <h2>For fetching the list of users:</h2>
        <h4>You can fetch the list of users via this endpoint:</h3>
        <h5>http://localhost:3001/users</h4>
      `);
};
