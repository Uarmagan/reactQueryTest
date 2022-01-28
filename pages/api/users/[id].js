import { apiHandler } from '../../../helpers/api-handler';
import { usersRepo } from '../../../helpers/users-repo';

export default apiHandler({
  get: getById,
  put: update,
  delete: _delete,
});

function getById(req, res) {
  const user = usersRepo.getById(req.query.id);

  if (!user) throw 'User Not Found';

  return res.status(200).json(user);
}

function update(req, res) {
  const user = usersRepo.getById(req.query.id);

  if (!user) throw 'User Not Found';

  usersRepo.update(req.query.id, req.body);
  return res.status(200).json({});
}

function _delete(req, res) {
  usersRepo.delete(req.query.id);
  return res.status(200).json({});
}
