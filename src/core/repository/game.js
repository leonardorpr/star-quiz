import { GameService } from 'core/service';
import { GameEntity } from 'core/entity';
import BaseRepository from './base';

class GameRepository extends BaseRepository {
  getServiceProvider() {
    return GameService;
  }

  modelToEntity = model => new GameEntity(model);

  list = () => this.get();

  details = url => this.getDetails(url);
}

export default new GameRepository();
