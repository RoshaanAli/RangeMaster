import axios from 'axios';
import config from './config';
const RangerMaster = axios.create({
  baseURL: config.base_url,
});

export default RangerMaster;
