"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendError = function (res, error) {
    res.setHeader("Content-Type", "application/json");
    res.status(400);
    res.send({
        error: error
    });
};
exports.sendJSON = function (res, object) {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(object));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBpL2RlZmF1bHRDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRWEsUUFBQSxTQUFTLEdBQUcsVUFBQyxHQUFhLEVBQUUsS0FBYTtJQUNwRCxHQUFHLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ2xELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEIsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNQLEtBQUssT0FBQTtLQUNOLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVXLFFBQUEsUUFBUSxHQUFHLFVBQUMsR0FBYSxFQUFFLE1BQVc7SUFDakQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUNsRCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNuQyxDQUFDLENBQUMifQ==