import { toast } from "react-toastify";

export interface ErrorType {
  response?: { data?: any };
}

export const handleError = (error: ErrorType) => {
  const errorResponse = error?.response?.data;
  if (errorResponse) {
    if (typeof errorResponse === "string") toast.error(errorResponse);
    else if (typeof errorResponse === "object") {
      if (!Array.isArray(errorResponse)) {
        Object.values(errorResponse).forEach((item) => {
          if (typeof item === "string") toast.error(item);
          else if (Array.isArray(item)) {
            item.forEach((el) => {
              toast.error(el);
            });
          } else toast.error("Something went wrong");
        });
      } else if (Array.isArray(errorResponse)) {
        errorResponse.forEach((item) => {
          if (typeof item === "string") {
            toast.error(item);
          } else toast.error("Something went wrong");
        });
      }
    } else toast.error("Something went wrong");
  } else toast.error("Network Eror");
};
