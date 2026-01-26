import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        cartData: {
            type: Object,
            default: {},
        }
    }, { minimize: false }); // Prevents Mongoose from removing empty objects

const userModel = mongoose.models.user || mongoose.model('user', userSchema);
// If the model already exists, use it. Otherwise, create a new model.

export default userModel;