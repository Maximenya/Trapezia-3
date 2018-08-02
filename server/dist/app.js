"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const path = __importStar(require("path"));
const index_route_1 = __importDefault(require("./routes/index.route"));
const mongoose_1 = __importDefault(require("mongoose"));
// Create Express server
const app = express_1.default();
// Connect to MongoDB
const mongoUrl = "mongodb://localhost:27017/usersdb";
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.connect(mongoUrl, { useNewUrlParser: true }).then(() => { }).catch(err => {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    // process.exit();
});
// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
/**
 * Primary app routes.
 */
app.use("/", index_route_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map