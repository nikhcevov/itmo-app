db.createUser(
  {
    user: 'user',
    pwd: 'jango123',
    roles: [
      {
        role: 'readWrite',
        db: 'itmo-app-database'
      }
    ]
  }
)
