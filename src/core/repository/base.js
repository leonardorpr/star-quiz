class BaseRepository {
  constructor() {
    this.mService = this.getServiceProvider();
  }

  post = async (params) => {
    const serviceObject = params.getServiceObject ? params.getServiceObject() : params;
    const serviceResult = await this.mService.create(serviceObject);

    if (serviceResult.success) {
      serviceResult.data = serviceResult.data.map(model => this.modelToEntity(model));
    }

    return serviceResult;
  };

  get = async () => {
    const result = await this.mService.list();

    if (!result.success) {
      return result;
    }

    const entitiesPromises = result.data.map(model => this.modelToEntity(model));
    result.data = await Promise.all(entitiesPromises);
    return result;
  };

  getDetails = async (url) => {
    const result = await this.mService.details(url);

    if (!result.success) {
      return result;
    }

    const entitiesPromises = result.data.map(model => this.modelToEntity(model));
    result.data = await Promise.all(entitiesPromises);
    return result;
  };

  modelToEntity = model => model;
}

export default BaseRepository;
