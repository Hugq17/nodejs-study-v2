import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({ // định nghĩa schema cho một đối tượng
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true },
    password: {type: String, required: true}
})

const UserModel = mongoose.model("User", UserSchema) // Dùng để tương tác với cơ sở dữ liệu, tham số thứ nhất là tên model, 
// tham số thứ 2 là schema mà model này sử dụng

export {UserModel as User}