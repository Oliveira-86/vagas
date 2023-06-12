var data = require('./fakeData')

module.exports = function (req, res) {
  const { name, job } = req.body

  if (!name || !job) {
    return res.status(400).json({ message: 'Passe os dados corretamente.' })
  }

  const existingUser = data.find((user) => user.name === name)

  if (existingUser)
    return res.status(200).json({ message: 'Usuário já cadastrado.' })

  const newUser = {
    name,
    job,
  }

  data.push(newUser)

  res.status(200).json({ message: 'Usuário cadastrado com sucesso.' })
}
