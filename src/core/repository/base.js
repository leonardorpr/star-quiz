class BaseRepository {
  constructor() {
    this.mService = this.getServiceProvider();
  }

  get = async () => {
    const result = await this.mService.list();

    if (!result.success) {
      return result;
    }

    const entitiesPromises = result.data.results.map(model => this.modelToEntity(model));
    result.data = await Promise.all(entitiesPromises);
    return result;
  };

  getDetails = async (url) => {
    const result = await this.mService.details(url);

    if (!result.success) {
      return result;
    }

    const data = this.modelToEntity(result.data);
    result.data = data;

    return result;
  };

  modelToEntity = model => model;
}

export default BaseRepository;
