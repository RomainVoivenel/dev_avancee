import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { RankService } from './rank.service';
import { Player } from './player.entity';

@Controller('rank')
export class RankController {
    constructor(private readonly rankService: RankService) {}

    @Get()
    getAllRank() {
        return this.rankService.findAll();
    }

    @Post()
    createPlayer(player: Player) {
        this.rankService.create(player);
    }

    @Put(':id')
    updatePlayer(id: number, player: Player) {
        this.rankService.update(id, player);
    }

    @Delete(':id')
    deletePlayer(id: number) {
        this.rankService.delete(id);
    }

}
