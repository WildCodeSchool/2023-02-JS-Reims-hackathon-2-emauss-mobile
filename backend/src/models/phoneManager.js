const AbstractManager = require("./AbstractManager");

class PhoneManager extends AbstractManager {
  constructor() {
    super({ table: "phone" });
  }

  insert(phone) {
    return this.database.query(
      `insert into ${this.table} (brand, phone_name, version_os, storage, dimension ,network, ram, image) VALUES (?,?,?,?,?,?,?,?)`,
      [
        phone.brand,
        phone.phone_name,
        phone.version_os,
        phone.storage,
        phone.dimension,
        phone.network,
        phone.ram,
        phone.image,
      ]
    );
  }

  update(phone) {
    return this.database.query(
      `update ${this.table} set brand = ?, phone_name = ?, version_os = ?, storage = ?, dimension = ?, network = ?, ram = ? , image=? ,WHERE id = ?`,
      [
        phone.brand,
        phone.phone_name,
        phone.version_os,
        phone.storage,
        phone.dimension,
        phone.network,
        phone.ram,
        phone.image,
      ]
    );
  }
}

module.exports = PhoneManager;
