export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  created_at: string | null;
  updated_at: string | null;
  ship_to_account: string | null;
  business_name: string | null;
  address1: string | null;
  address2: string | null;
  po_box: string | null;
  city: string | null;
  state: string | null;
  zip: string | null;
  country: string | null;
  nick_name: string | null;
  deleted_at: string | null;
}

export type PageProps<
  T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
  auth: {
    user: User;
  };
};
