import { RankService } from './rank.service';
import { Player } from './player.entity';
export declare class RankController {
    private readonly rankService;
    constructor(rankService: RankService);
    getAllRank(): Player[];
    createPlayer(player: Player): void;
    updatePlayer(id: number, player: Player): void;
    deletePlayer(id: number): void;
}
