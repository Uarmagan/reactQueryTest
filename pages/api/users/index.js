import { apiHandler } from '../../../helpers/api-handler';
import { usersRepo, getAll } from '../../../helpers/users-repo';
export default apiHandler({
  get: getUsers,
  post: add,
});

function getUsers(req, res) {
  const response = usersRepo.getAll();
  return res.status(200).json(response);
}

function add(req, res) {
  const { user } = req.body;
  usersRepo.create(user);
  return res.status(200).json({});
}
