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
  fr_frame_delete_bytes?: string | null;
  fr_fl_type_code1?: string | null;
  fr_fl_front?: string | null;
  fr_frame_style?: string | null;
  fr_edge?: string | null;
  fr_material?: string | null;
  fr_min_edge?: string | null;
  fr_base_curve_min?: string | null;
  fr_base_curve_max?: string | null;
  fr_min_near_pd?: string | null;
  fr_notes?: string | null;
  fr_non_conductive?: string | null;
  fr_tight_fit?: string | null;
  fr_wrap?: string | null;
  fr_t1_eyesize?: string | null;
  fr_front_bridge?: string | null;
  fr_frame_ss_type?: string | null;
  fr_front_prod_code?: number | null;
  fr_front_addon1?: number | null;
  fr_front_addon2?: number | null;
  fr_color_desc?: string | null;
  fr_frame_group?: string | null;
  fr_frame_vendor?: string | null;
  fr_front_prod_code_2?: string | null;
  fr_filler?: string | null;
  fr_fl_sbdge_date?: number | null;
  fr_brand?: string | null;
  fr_collection?: string | null;
  variations?: FrameVariation[];
  fr_frame_color?: string | null;
  fr_eyesize?: string | null;
}

export interface FrameVariation extends Timestamps {
  fv_eyesize?: string;
  fv_front_bridge?: string;
  fv_frame_color?: string;
  fv_temple_type?: string;
  fv_temple_size?: string;
  fv_A?: string;
  fv_B?: string;
  fv_ED?: string;
  fv_DBL?: string;
  fv_non_dig_default_seg?: string;
  fv_dig_default_seg?: string;
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

export interface Lens extends Timestamps {
  id: number;
  le_lens_delete_code?: string;
  le_lens_locator_record?: string;
  le_lens_locator_key?: string;
  le_lens_ltype?: string;
  le_lens_vtype?: string;
  le_lens_dseg?: number;
  le_lens_dsegx?: string;
  le_lens_mat?: string;
  le_lens_col?: string;
  le_lens_precoat?: string;
  le_lens_addon1?: number;
  le_lens_addon2?: number;
  le_lens_addon3?: number;
  le_lens_dtab?: string;
  le_lens_diam_1?: string;
  le_lens_chrt1_1?: string;
  le_lens_diam_2?: string;
  le_lens_chrt1_2?: string;
  le_lens_diam_3?: string;
  le_lens_chrt1_3?: string;
  le_lens_diam_4?: string;
  le_lens_chrt1_4?: string;
  le_lens_recomd_seg_hgt?: string;
  le_lens_street_wear?: string;
  le_lens_digital_style?: string;
  le_lens_filler?: string;
  le_lens_sbdge_date?: number;
  le_optic_translation?: string;
  le_dvi_lens_style?: string;
  le_dvi_mat?: string;
  le_dvi_color?: string;
  le_o2_lens_style_add_code?: string;
  le_o2_material_add_code?: string;
  le_o2_color_add_code?: string;
  le_o1_lens_add_code?: string;
  le_o1_material_add_code?: string;
  le_o1_color_add_code?: string;
  le_minimun_seg?: string;
}
export interface Order extends Timestamps {
  id: number;
  or_rx_number: string;
  or_ship_to: string;
  or_ordby_billto_dash: string;
  or_po_no: string;
  or_emp_name_last: string;
  or_emp_name_first: string;
  or_emp_phone: string;
  or_emp_email: string;
  or_emp_no: string;
  or_dept: string;
  or_req: string;
  or_order_pending: string;
  or_material_right: string;
  or_material_left: string;
  or_lens_style_right: string;
  or_lens_style_left: string;
  or_lens_color_right: string;
  or_lens_color_left: string;
  or_ocht_right: string;
  or_ocht_left: string;
  or_measurement_right: string;
  or_measurement_left: string;
  or_sphere_right: string;
  or_sphere_left: string;
  or_cyl_right: string;
  or_cyl_left: string;
  or_axis_right: string;
  or_axis_left: string;
  or_prism_or_right: string;
  or_prism_or_left: string;
  or_prism_in_right: string;
  or_prism_in_left: string;
  or_prism_in_right_value: string;
  or_prism_in_left_value: string;
  or_prism_up_right: string;
  or_prism_up_left: string;
  or_prism_up_right_value: string;
  or_prism_up_left_value: string;
  or_add_power_right: string;
  or_add_power_left: string;
  or_seg_hgt_meas_right: string;
  or_seg_hgt_meas_left: string;
  or_pd_dist_right: string;
  or_pd_dist_left: string;
  or_pd_near_right: string;
  or_pd_near_left: string;
  or_opt_center_right: string;
  or_opt_center_left: string;
  or_add_right: string;
  or_add_left: string;
  or_upper_add_right: string;
  or_upper_add_left: string;
  or_seg_height_right: string;
  or_seg_height_left: string;
  or_tint_color: string;
  or_tint_percent: string;
  or_mirror: string;
  or_coating: string;
  or_frame_info: string;
  or_frame_manufacturer: string;
  or_frame_style: string;
  or_frame_color: string;
  or_frame_size: string;
  or_frame_side_shield: string;
  or_extra_ss: string;
  or_frame_case: string;
  or_add_on_1: string;
  or_add_on_2: string;
  or_add_on_3: string;
  or_notes: string;
  or_cc_emp_copay_token: string;
  or_cc_company_card_token: string;
  or_cc_emp_card_type: string;
  or_cc_emp_card_exp_date: string;
  or_cc_company_card_type: string;
  or_cc_company_card_exp_date: string;
  or_special_instructions: string;
  or_force_hold_reason: string;
  or_cc_emp_ivc: string;
  or_cc_emp_zip: string;
  or_manual_ship_addr_flag: string;
  or_manual_ship_name: string;
  or_manual_ship_addr_1: string;
  or_manual_ship_addr_2: string;
  or_manual_ship_addr_3: string;
}

export interface Shield extends Timestamps {
  id: string;
  sh_frame_style: string;
  sh_eye_size: string;
  sh_ss_type: string;
  sh_ss_desc: string;
  sh_preasm_ind: string;
  sh_ss_type2: string;
  sh_ss_style: string;
  sh_ss_eye: string;
  sh_single_key: string;
  sh_ss_hide: string;
}

export interface ShieldColor {
  ss_color: string;
}
