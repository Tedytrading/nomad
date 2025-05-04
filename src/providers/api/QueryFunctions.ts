import {  gql } from 'urql';
import { client } from './APIProvider';
import { retrieveRawInitData } from '@telegram-apps/sdk-react';

export interface AuthResponse {
  error: string | null;
  success: boolean;
  user: Users | null;
}

interface Users {
  id: string;
  createdAt: string;
  updatedAt: string;
  status: number;
  tg_user_id: string | null;
  uniq_name: string | null;
  email: string | null;
  email_verified: boolean;
  pass: string | null;
  uniq_ref_id: string | null;
  ref_user: number | null;
  orders_buy: Orders[];
  orders_sell: Orders[];
  accounts: Accounts[];
  messages: Messages[];
  rating: number;
}

interface Orders {
  id: string;
  createdAt: string;
  updatedAt: string;
  status: number;
  speed: number;
  rate: number;
  currency: Currency;
  user_sell: Users;
  user_buy?: Users | null;
  amount: number;
  unit_amount: number;
  qr_pic: string;
  timeout?: number | null;
  messages: Messages[];
}

interface Currency {
  id: string;
  createdAt: string;
  updatedAt: string;
  status: number;
  name: string;
  c_name: string;
  rate?: number | null;
  rate_api: string[];
  chat_id: number;
  orders: Orders[];
  accounts: Accounts[];
}

interface Accounts {
  id: string;
  createdAt: string;
  updatedAt: string;
  status: number;
  user: Users;
  currency: Currency;
}

interface Messages {
  id: string;
  createdAt: string;
  updatedAt: string;
  from: Users;
  message: string;
  order: Orders;
}


const initDataRaw = retrieveRawInitData();

export const me = async ():Promise<AuthResponse> => {
  const query = gql`
    query Me {
      me {
        success
        error
        user {
          id
          tg_user_id
          email
          email_verified
          uniq_name
          uniq_ref_id
          rating
          status
        }
      }
    }
  `;
  const result = await client.query(query, {}, {
    fetchOptions: {
      headers: {
        'X-Telegram-InitData': `${initDataRaw}`,
        'Content-Type': 'application/json',
      },
    },
  }).toPromise();
  return result.data.me;
};