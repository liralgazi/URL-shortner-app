import mongoose from "mongoose";
import { nanoid } from "nanoid";
const shortUrlSchema = new mongoose.Schema({
    fullUrl: {
        type: String,
        required: true,
    },
    shortUrl: {
        type: String,
        required: true,
        default: () => nanoid(10), // Generates a 10-character short URL
    },
    clicks: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true,
});
export const urlModel = mongoose.model("ShortUrl", shortUrlSchema);
