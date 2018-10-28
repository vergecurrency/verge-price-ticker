"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = __importDefault(require("winston"));
var logging = winston_1.default.createLogger({
    level: "info",
    format: winston_1.default.format.json(),
    transports: [new winston_1.default.transports.File({ filename: "combined.log" })]
});
if (process.env.NODE_ENV !== "production") {
    logging.add(new winston_1.default.transports.Console({
        format: winston_1.default.format.combine(winston_1.default.format.colorize(), winston_1.default.format.simple())
    }));
}
exports.logger = logging;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2luZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2dnaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0RBQThCO0FBRTlCLElBQU0sT0FBTyxHQUFHLGlCQUFPLENBQUMsWUFBWSxDQUFDO0lBQ25DLEtBQUssRUFBRSxNQUFNO0lBQ2IsTUFBTSxFQUFFLGlCQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtJQUM3QixVQUFVLEVBQUUsQ0FBQyxJQUFJLGlCQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsQ0FBQyxDQUFDO0NBQ3hFLENBQUMsQ0FBQztBQUVILElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssWUFBWSxFQUFFO0lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQ1QsSUFBSSxpQkFBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFDN0IsTUFBTSxFQUFFLGlCQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FDNUIsaUJBQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQ3pCLGlCQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUN4QjtLQUNGLENBQUMsQ0FDSCxDQUFDO0NBQ0g7QUFFWSxRQUFBLE1BQU0sR0FBRyxPQUFPLENBQUMifQ==