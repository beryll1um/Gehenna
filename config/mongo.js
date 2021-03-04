db.createUser({
  'user': 'gehenna',
  'pwd': 'password',
  'roles': [{
    'role': 'readWrite',
    'db': 'gehenna'
  }]
})