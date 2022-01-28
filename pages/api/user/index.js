import { apiHandler, usersRepo, getAll } from '../../../helpers/users-repo';

export default apiHandler({
  get: getAll,
  post: add,
});

function add(req, res) {
  const { user } = req.body;
  usersRepo.create(user);
  return res.status(200).json({});
}
