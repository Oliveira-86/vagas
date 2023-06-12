var data = require('./fakeData')

module.exports = function (req, res) {
  const { id } = req.query
  const { name, job } = req.body

  const idNumber = Number(id)

  const existingId = data.find((user) => user.id === idNumber)

  if (!existingId)
    return res
      .status(400)
      .json({ message: `Usuário com o id: ${id} não encontrado.` })

  const listUpdated = data.filter((user) => user.id !== idNumber)

  const userUpadted = {
    id: idNumber,
    name: !name ? existingId.name : name,
    job: !job ? existingId.job : job,
  }

  listUpdated.push(userUpadted)

  return res.status(200).json({
    message: 'Dados do usuário atualizado com sucesso.',
    data: listUpdated,
  })
}
