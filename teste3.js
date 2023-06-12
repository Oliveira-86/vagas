var data = require('./fakeData')

module.exports = function (req, res) {
  const { id } = req.query

  const idNumber = Number(id)

  if (!idNumber) {
    return res
      .status(400)
      .json({ message: 'Passe o id do usuário que deseja deletar.' })
  }

  const user = data.find((user) => user.id === idNumber)

  if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado.' })
  }

  const usersFiltered = data.filter((user) => user.id !== idNumber)

  return res
    .status(200)
    .json({ message: 'Usuário deletado com sucesso.', data: usersFiltered })
}
