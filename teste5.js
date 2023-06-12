const { userReads } = require('./teste1')

module.exports = function (req, res) {
  const { name } = req.body

  const userReadCount = userReads.filter((read) => read.name === name)

  if (userReadCount.length === 0) {
    return res.json({
      message: `Nenhum usuário foi lido até o momento.`,
    })
  }

  res.json({
    message: `Usuário com o nome ${name} foi lido ${userReadCount.length} vezes.`,
  })
}
