import { CharacterImage } from 'util';
import BaseEntity from './base';

class GameEntity extends BaseEntity {
  async getCharacterImage() {
    const image = await CharacterImage(this.name);

    return image;
  }

  async defaultParams() {
    // const image = await this.getCharacterImage();

    return {
      // image,
    };
  }
}

export default GameEntity;
