import { gql } from "urql";
import { client } from "./APIProvider";
import { retrieveRawInitData } from "@telegram-apps/sdk-react";


const initDataRaw = retrieveRawInitData();

// Mutations
export const completeRegistration = async (email: string, uniq_name: string) => {
  const mutation = gql`
    mutation CompleteRegistration {
      completeRegistration(email: "user-email-here", uniq_name: "user-name-here") {
        success
        error
      }
    }
  `;
  const result = await client.mutation(mutation, { email, uniq_name }, {
    fetchOptions: {
      headers: {
        'X-Telegram-InitData': `${initDataRaw}`,
        'Content-Type': 'application/json',
      },
    },
  }).toPromise();
  return result.data;
};

export const verifyEmail = async (code: string) => {
  const mutation = gql`
    mutation VerifyEmail {
      verifyEmail(code: "code-here") {
        success
        error
      }
    }
  `;
  const result = await client.mutation(mutation, { code }, {
    fetchOptions: {
      headers: {
        'X-Telegram-InitData': `${initDataRaw}`,
        'Content-Type': 'application/json',
      },
    },
  }).toPromise();
  return result.data;
};

export const resendCode = async () => {
  const mutation = gql`
    mutation ResendCode {
      resendCode {
        success
        error
      }
    }
  `;
  const result = await client.mutation(mutation, {}, {
    fetchOptions: {
      headers: {
        'X-Telegram-InitData': `${initDataRaw}`,
        'Content-Type': 'application/json',
      },
    },
  }).toPromise();
  return result.data;
};