import BaseService from './base';

class GameService extends BaseService {
  async list() {
    const characters = await this.get('/people/');

    return characters;
  }

  async details(url) {
    const details = await this.getDetails(url);

    return details;
  }
}

export default new GameService();
