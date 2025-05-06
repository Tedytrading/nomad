import { gql } from "urql";
import { client } from "./APIProvider";
import { getInitData } from "./utils/getInitData";

// Mutations
export const completeRegistration = async (email: string, uniq_name: string) => {
  const initDataRaw = getInitData();
  if (!initDataRaw) {
    throw new Error("Telegram init data is unavailable.");
  }

  const mutation = gql`
    mutation CompleteRegistration($email: String!, $uniq_name: String!) {
      completeRegistration(email: $email, uniq_name: $uniq_name) {
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
  const initDataRaw = getInitData();
  if (!initDataRaw) {
    throw new Error("Telegram init data is unavailable.");
  }

  const mutation = gql`
    mutation VerifyEmail($code: String!) {
      verifyEmail(code: $code) {
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
  return result.data.verifyEmail;
};

export const resendCode = async () => {
  const initDataRaw = getInitData();
  if (!initDataRaw) {
    throw new Error("Telegram init data is unavailable.");
  }

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