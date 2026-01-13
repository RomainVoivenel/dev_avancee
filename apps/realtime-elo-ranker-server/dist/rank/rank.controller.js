"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankController = void 0;
const common_1 = require("@nestjs/common");
const rank_service_1 = require("./rank.service");
const player_entity_1 = require("./player.entity");
let RankController = class RankController {
    rankService;
    constructor(rankService) {
        this.rankService = rankService;
    }
    getAllRank() {
        return this.rankService.findAll();
    }
    createPlayer(player) {
        this.rankService.create(player);
    }
    updatePlayer(id, player) {
        this.rankService.update(id, player);
    }
    deletePlayer(id) {
        this.rankService.delete(id);
    }
};
exports.RankController = RankController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RankController.prototype, "getAllRank", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [player_entity_1.Player]),
    __metadata("design:returntype", void 0)
], RankController.prototype, "createPlayer", null);
__decorate([
    (0, common_1.Put)(':id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, player_entity_1.Player]),
    __metadata("design:returntype", void 0)
], RankController.prototype, "updatePlayer", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RankController.prototype, "deletePlayer", null);
exports.RankController = RankController = __decorate([
    (0, common_1.Controller)('rank'),
    __metadata("design:paramtypes", [rank_service_1.RankService])
], RankController);
//# sourceMappingURL=rank.controller.js.map