export type PageProps<
  T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
  auth: {
    user: User;
  };
};

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

export interface FrameEdge {
  fe_edge: string;
}

export interface FrameMaterial {
  fm_material: string;
}

export interface Frame {
  id: number;
  fr_frame_name: string;
  fr_eyesize: number | null;
  fr_temple_type: string | null;
  fr_temple_size: number | null;
  fr_frame_color: string | null;
  fr_A: number | null;
  fr_B: number | null;
  fr_ED: number | null;
  fr_DBL: number | null;
  fr_non_dig_default_seg: string | null;
  fr_dig_default_seg: number | null;
}

export type FrameType = Frame;

export interface LensStyle {
  id: number;
  ls_lenstyl_lens_style: string;
}

export interface LensMaterial {
  id: number;
  lm_lens_material: string;
}