import { config } from "../config/config";
import { get } from "../services/ajax";

const { domen } = config;

export const fetchAllData = async () => {
  try {
    return await get(`${domen}/p24api/pubinfo?json&exchange&coursid=5`);
  } catch (error) {
    return error;
  }
};
