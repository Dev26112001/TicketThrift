"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({
    path: "./.env",
});
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get("/", (req, res, next) => {
    res.status(200).json({
        message: "This is TicketThrift",
        Description: "Not getting tickets!! Do not worry !! We are there to cover you!!"
    });
});
app.listen(port, () => {
    console.log(`The server is listening on ${port}`);
});
