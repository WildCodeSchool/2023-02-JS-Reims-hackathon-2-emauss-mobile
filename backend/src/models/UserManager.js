const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "admin" });
  }

  findByNameWithHashedPassword(username) {
    return this.database.query(
      `select username, hashedPassword from  ${this.table} where username = ?`,
      [username]
    );
  }

  insert(admin) {
    return this.database.query(
      `insert into ${this.table} (username,mail,hashedPassword) values (?,?,?)`,
      [admin.username, admin.hashedPassword]
    );
  }

  update(admin) {
    return this.database.query(
      `update ${this.table} set username = ?, mail = ?, hashedpassword = ? where id = ?`,
      [admin.username, admin.password]
    );
  }
}

module.exports = UserManager;
