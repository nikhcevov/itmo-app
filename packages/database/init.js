db.createUser(
  {
    user: 'server_user',
    pwd: 'jango123',
    roles: [
      {
        role: 'readWrite',
        db: 'itmo-app-database'
      }
    ]
  }
)

db = db.getSiblingDB('itmo-app-database')

db.auth('server_user', 'jango123')

db.createCollection('user')

db.user.insert({ login: '0', password: 'admin' })
