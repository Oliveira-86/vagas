module.exports = checkPermissions = (req, res, next) => {
  const { role } = req.headers
  const hasPermission = role === 'admin'

  if (hasPermission) {
    // User has permission, proceed to the next middleware or route handler
    next()
  } else {
    // User doesn't have permission, send a forbidden response
    res.status(403).json({ error: 'Não autorizado' })
  }
}
