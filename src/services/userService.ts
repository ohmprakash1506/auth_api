import user from "../dbConfig/models/User.model";
import { returnError } from "../middlewares/ApiResponseHandler";
import httpStatusCode from "http-status-codes";

export default class UserService {
  create = async (data: any) => {
    try {
      console.log(data);
      return await user.create(data);
    } catch (error) {
      console.log(error);
      const status = httpStatusCode.BAD_REQUEST;
      const message = `Somthing went wrong in storing the data`;
      return returnError(status, message);
    }
  };

  getUser = async (data: any) => {
    try {
      return await user.findOne(data);
    } catch (error) {
      const status = httpStatusCode.BAD_REQUEST;
      const message = `Somthing went wrong`;
      return returnError(status, message);
    }
  };

  getAllUser = async () => {
    try {
      return await user.find();
    } catch (error) {
      const status = httpStatusCode.BAD_REQUEST;
      const message = `Somthing went wrong`;
      return returnError(status, message);
    }
  };

  updateuser = async (data : any) =>{}
}
