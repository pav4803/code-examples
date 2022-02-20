import axios from "axios";

const get = async (url:string) => {
  const headers = {
    // "X-Auth-Token": oldState.school.baseData.token,
    // "Api-key": config.apikey,
    // "Content-type": "application/json",
  };
  try {
    const response = await axios
      .get(url, { headers: headers });
    return response.data;
  } catch (error:any) {
    if (error.response) {
    } else if (error.request) {
    } else {
    }
    throw error;
  }
};

const post = async (url:string, data={}) => {
  const headers = {
    // "X-Auth-Token": oldState.school.baseData.token,
    // "Api-key": config.apikey,
    // "Content-type": "application/json",
  };
  try {
    const response = await axios
      .post(url, data, { headers });
    return response.data;
  } catch (error:any) {
    if (error.response) {
    } else if (error.request) {
    } else {
    }
    throw error;
  }
};

export { get, post };