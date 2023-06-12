var data = require('./fakeData')

module.exports = function (req, res) {
  const { name } = req.body

  if (!name) {
    return res
      .status(400)
      .json({ message: 'Passe o nome do usuário que deseja deletar.' })
  }

  const user = data.find((user) => user.name === name)

  if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado.' })
  }

  const usersFiltered = data.filter((user) => user.name !== name)

  return res
    .status(200)
    .json({ message: 'Usuário deletado com sucesso.', data: usersFiltered })
}
