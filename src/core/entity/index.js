import * as R from 'ramda';

class BaseEntity {
  constructor(params) {
    const finalParams = R.merge(this.defaultParams(), params);
    Object.assign(this, finalParams);
  }

  defaultParams() {
    return {};
  }

  getServiceObject() {
    return this;
  }
}

export default BaseEntity;
