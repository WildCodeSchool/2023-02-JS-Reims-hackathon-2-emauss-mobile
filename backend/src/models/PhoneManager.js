const AbstractManager = require("./AbstractManager");

class PhoneManager extends AbstractManager {
  constructor() {
    super({ table: "phone" });
  }

  insert(phone) {
    return this.database.query(`insert into ${this.table} (brand, phone_name, version_os, storage, dimensions, network, ram, image) values (?, ?, ?, ?, ?, ?, ?)`, [
      phone.brand,
    ]);
  }

  update(phone) {
    return this.database.query(
      `update ${this.table} set brand = ?, phone_name = ?, version_os = ?, storage = ?, dimensions = ?, network = ?, ram = ?, image = ? where id = ?`,
      [
        phone.brand,
        phone.phone_name,
        phone.version_os,
        phone.storage,
        phone.dimensions,
        phone.network,
        phone.ram,
        phone.image,
        phone.id
      ]
    );
  }
  
  
}

module.exports = PhoneManager;
