import { retrieveRawInitData } from "@telegram-apps/sdk-react";

// Helper function to safely retrieve init data
export const getInitData = () => {
    try {
      return retrieveRawInitData();
    } catch (error) {
      return null;
    }
  };
  