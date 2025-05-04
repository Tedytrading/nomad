export const RequestHandler = async <T>(promise: Promise<T>): Promise<T> => {
  try {
    return await promise;
  } catch (error) {
    console.error("Request failed:", error);
    throw error;
  }
};