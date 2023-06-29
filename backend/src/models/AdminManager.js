const AbstractManager = require("./AbstractManager");

class AdminManager extends AbstractManager {
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
      `insert into ${this.table} (username,hashedPassword) values (?,?)`,
      [admin.username, admin.hashedPassword]
    );
  }
}

module.exports = AdminManager;
