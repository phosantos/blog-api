const post_index = async (req, res) => {
  const [result] = await dbConnection.execute('SELECT * FROM posts');
  res.json(result);
};

const post_details = async (req, res) => {
  const { id } = req.params;
  const [[result]] = await dbConnection.execute(
    'SELECT * FROM posts WHERE id = ?',
    [id],
  );
  res.json(result);
};

const post_create = async (req, res) => {
  const { title, content } = req.body;
  const result = await dbConnection.execute(
    'INSERT INTO posts (title, content) VALUES (?,?)',
    [title, content],
  );

  res.json(result);
};

const post_delete = async (req, res) => {
  const { id } = req.params;
  const result = await dbConnection.execute('DELETE FROM posts WHERE id = ?', [
    id,
  ]);
  res.json(result);
};

module.exports = { post_index, post_details, post_create, post_delete };
