const UserSchema = require("./schemas/UserSchema");

class User {
  static async getUserById({ user_id }) {
    try {
      const user = await UserSchema.findById(user_id);

      return {
        success: true,
        data: user
      };
    } catch (err) {
      return {
        success: false,
        errors: ["User not found"]
      };
    }
  }

  static async getAllUsers() {
    try {
      const users = await UserSchema.find();

      return {
        data: users,
        success: true
      };
    } catch (err) {
      return {
        success: false,
        errors: []
      };
    }
  }

  static async addUser({ name, email, cart }) {
    let user = await UserSchema.findOne({
      name,
      email
    });

    if (!user) {
      user = await UserSchema.create({
        name,
        email,
        cart
      });

      return {
        success: true,
        data: user
      };
    }

    return {
      success: false,
      data: user,
      errors: ["User exists"]
    };
  }
}

module.exports = User;
