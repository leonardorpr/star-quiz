import axios from 'axios';

class BaseService {
  static BASE_URL = 'https://swapi.co/api';

  wrapConfig() {
    const headers = {
      'Accept': 'application/json',
    };

    return { headers };
  }

  async get(url) {
    let response;
    let success;

    try {
      response = await axios.get(BaseService.BASE_URL + url, this.wrapConfig());
      success = true;
    } catch (e) {
      response = e.response;
      success = false;
    }

    const fatal = !response || response.status >= 500;
    const data = fatal ? null : response.data;
    const headers = fatal ? null : response.headers;
    const errors = !!response && !!response.data.errors ? response.data.errors : [];

    return this.serviceResponse({
      fatal,
      data,
      headers,
      success,
      errors,
    });
  }

  async getDetails(url) {
    let response;
    let success;

    try {
      response = await axios.get(url, this.wrapConfig());
      success = true;
    } catch (e) {
      response = e.response;
      success = false;
    }

    const fatal = !response || response.status >= 500;
    const data = fatal ? null : response.data;
    const headers = fatal ? null : response.headers;
    const errors = !!response && !!response.data.errors ? response.data.errors : [];

    return this.serviceResponse({
      fatal,
      data,
      headers,
      success,
      errors,
    });
  }

  serviceResponse(response) {
    if (response.success) {
      return this.success({ data: response.data, headers: response.headers });
    }
    if (response.fatal) {
      return this.fatal();
    }
    return this.error({
      data: response.data,
      content: response.errors.message || response.errors.error,
      errors: response.errors,
    });
  }

  success({ data, headers }) {
    return {
      data,
      headers,
      success: true,
      fatal: false,
    };
  }

  error({ data, content, errors }) {
    return {
      errors,
      error: content,
      data,
      success: false,
      fatal: false,
    };
  }

  fatal() {
    return {
      success: false,
      fatal: true,
      data: {},
    };
  }
}

export default BaseService;
