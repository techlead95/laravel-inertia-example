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
  fr_frame_color?: string | null;
  fr_eyesize?: string | null;
  variations?: FrameVariation[];
  lens_material_limitations?: LensMaterialLimitation[];
  lens_style_limitations?: LensStyleLimitation[];
  offload_availabilities?: FrameOffloadAvailability[];
}

export interface FrameVariation extends Timestamps {
  id: number;
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
  frame: Frame;
  fv_size: string;
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
  le_lens_style: string;
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
  le_coatings: string[];
  style?: LensStyle;
  material?: LensMaterial;
}
export interface LensCoating extends Timestamps {
  id: number;
  lc_lens_coating: string;
  lc_coating_group: string;
  lc_o1_translation?: string;
  lc_dvi_translation?: string;
  lc_cost?: number;
  lc_o2_add_code?: string;
  lc_o1_add_code?: string;
  lc_lens_color?: string;
  lc_lens_clarity_shield?: string;
  lc_ez_clean?: string;
  lc_anti_fog?: string;
  lc_ez_with_anti_fog?: string;
  lc_anti_ref_with_anti_fog?: string;
  lc_hi_vision_anti_fog?: string;
  lc_ex3_anti_ref?: string;
  lc_recharge_with_anti_ref?: string;
  lc_standard_ar_par?: string;
  lc_standard_ar_with_view_protect?: string;
  lc_back_side_ar?: string;
  lc_2_sided_scratch_plastic?: string;
  lc_setup_by?: string;
  lc_last_modified_by?: string;
}
export interface LensCoatingSelect {
  group: string;
  items: string[];
}

export interface Tint extends Timestamps {
  id: number;
  ti_color: string;
  ti_group: string;
  ti_lower_range?: string;
  ti_upper_range?: string;
  ti_default_percent?: string;
  ti_o1_translation?: string;
  ti_dvi_tint_drop?: string;
  ti_dvi_tint_color?: string;
  ti_o2_coating_add_code?: string;
  ti_o1_coating_add_code?: string;
  ti_setup_by?: string;
  ti_modified_by?: string;
}
export interface Order extends Timestamps {
  id: number;
  or_portal_order_number: number;
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
  method: string;
  status: OrderTracking;
}
export interface OrderTracking extends Timestamps {
  id: number;
  ot_description_text_1: string;
  ot_description_text_2: string;
  ot_legacy_order_number: number;
  ot_portal_order_number: number;
  ot_station_description: string;
  ot_status: string;
  ot_track_date: number;
  ot_track_time: number;
  ot_tracking_no: number;
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

export interface FrameAddon {
  id: number;
  fa_UPC: string | null;
  fa_side_shield_type: string | null;
  fa_side_shield_color: string | null;
  fa_legacy_clc: string | null;
  fa_legacy_ss_code: string | null;
  fa_dvi_services_code: string | null;
  fa_dvi_service_code: string | null;
  fa_default_case: string | null;
}

export interface Misc extends Timestamps {
  id: number;
  mi_item_name: string;
  mi_setup_by: string;
  mi_modified_by: string;
  mi_o1_translation: string;
  mi_dvi_translation: string;
  mi_o2_add_code: string;
  mi_o1_add_code: string;
}

export interface FrameOffloadAvailability extends Timestamps {
  id: number;
  fo_frame_id: number;
  fo_vendor: string;
  fo_vendor_allowed: string;
  fo_auto_offload: string;
}

export interface LensMaterialLimitation extends LensMaterial {
  allowed: string;
}

export interface LensStyleLimitation extends Timestamps {
  pivot: {
    allowed: boolean;
    minimum_pd: string | null;
  };
}
export interface Mirror extends Timestamps {
  id: number;
  mr_mirror: string;
  mr_o1_translation?: string;
  mr_dvi_translation?: string;
  mr_o2_add_code?: string;
  mr_o1_add_code?: string;
  mr_setup_by?: string;
  mr_last_modified_by?: string;
  mr_coatings: string[];
}
