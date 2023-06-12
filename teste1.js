var data = require('./fakeData')
const userReads = []

const getUser = (req, res, next) => {
  const { name } = req.body

  if (!name) {
    return res.status(400).json({ message: 'Passe o nome do usuário.' })
  }

  const user = data.find((user) => user.name === name)

  if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado.' })
  }

  userReads.push(user)
  return res.status(200).json(user)
}

const getUsers = (req, res, next) => {
  if (data.length === 0) {
    return res.status(404).json({ message: 'Lista de usuário vazia.', data })
  }

  return res.status(200).json(data)
}

module.exports = {
  getUser,
  getUsers,
  userReads,
}
