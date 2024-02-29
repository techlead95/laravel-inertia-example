export type PageProps<T> = T & {
  auth: {
    user: User;
  };
  flash: {
    success?: string;
    timestamp: number;
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

export interface Timestamps {
  created_at: string;
  updated_at: string;
}

export interface FrameEdge {
  fe_edge: string;
}

export interface FrameMaterial {
  fm_material: string;
}

export interface FrameBrand {
  fb_brand: string;
}

export interface FrameCollection {
  fc_collection: string;
}

export interface FrameDefaultGroup {
  fd_group: string;
}

export interface Frame extends Timestamps {
  id: number;
  fr_frame_name: string;
  fr_brand: string | null;
  fr_collection: string | null;
  fr_frame_group: string | null;
  fr_eyesize?: number;
  fr_temple_type?: string;
  fr_temple_size?: number;
  fr_frame_color?: string;
  fr_A?: number;
  fr_B?: number;
  fr_ED?: number;
  fr_DBL?: number;
  fr_non_dig_default_seg?: string;
  fr_dig_default_seg?: number;
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
