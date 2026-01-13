import { Player } from './player.entity';
export declare class RankService {
    private readonly rank;
    create(player: Player): void;
    findAll(): Player[];
    update(id: number, newPlayer: Player): void;
    delete(id: number): void;
}
