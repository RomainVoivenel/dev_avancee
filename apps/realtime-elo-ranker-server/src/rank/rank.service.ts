import { Injectable } from '@nestjs/common';
import { Player } from './player.entity';

@Injectable()
export class RankService {
    private readonly rank: Player[] = [];

    create(player: Player) {
        this.rank.push(player);
    }

    findAll(): Player[] {
        return this.rank;
    }

    update(id: number, newPlayer: Player) {
        for (let index = 0; index < this.rank.length; index++) {
            if (this.rank[index].id == id) {
                this.rank[index] = newPlayer;
                return;
            }
        }
    }

    delete(id:number) {
        for (let index = 0; index < this.rank.length; index++) {
            if (this.rank[index].id == id) {
                const i = this.rank.indexOf(this.rank[index]);
                this.rank.slice(i, 1);
                return;
            }
        }
    }
}
