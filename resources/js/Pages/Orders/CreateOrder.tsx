import PageTitle from '@/Components/PageTitle';
import useBaseForm from '@/Hooks/useBaseForm';
import { Stack } from '@mantine/core';

import { Frame, Order, Lens, FrameVariation, Tint, LensCoating, LensCoatingSelect, Misc } from '@/types';
import OrderForm from './OrderForm';


interface Props {
    frames: Frame[];
    lenses: Lens[];
    frameVariations: FrameVariation[];
    tints: Tint[];
    miscs: Misc[];
    coatings: LensCoating[];
}

export default function CreateOrder({ lenses, frameVariations, tints, miscs, coatings }: Props) {
    const form =
        useBaseForm<Partial<Order>>({
            //useBaseForm<Order>({
            or_ship_to: '',
            or_ordby_billto_dash: '',
            or_po_no: '',
            or_emp_name_last: '',
            or_emp_name_first: '',
            or_emp_phone: '',
            or_emp_email: '',
            or_emp_no: '',
            or_dept: '',
            or_req: '',
            or_order_pending: '',
            or_material_right: '',
            or_material_left: '',
            or_lens_style_right: '',
            or_lens_style_left: '',
            or_lens_color_right: '',
            or_lens_color_left: '',
            or_ocht_right: '',
            or_ocht_left: '',
            or_measurement_right: 'Above Frame',
            or_measurement_left: 'Above Frame',
            or_sphere_right: '',
            or_sphere_left: '',
            or_cyl_right: '',
            or_cyl_left: '',
            or_axis_right: '',
            or_axis_left: '',
            or_prism_or_right: '',
            or_prism_or_left: '',
            or_prism_in_right: '',
            or_prism_in_left: '',
            or_prism_in_right_value: '',
            or_prism_in_left_value: '',
            or_prism_up_right: '',
            or_prism_up_left: '',
            or_prism_up_right_value: '',
            or_prism_up_left_value: '',
            or_add_power_right: '',
            or_add_power_left: '',
            or_seg_hgt_meas_right: '',
            or_seg_hgt_meas_left: '',
            or_pd_dist_right: '',
            or_pd_dist_left: '',
            or_pd_near_right: '',
            or_pd_near_left: '',
            or_opt_center_right: '',
            or_opt_center_left: '',
            or_add_right: '',
            or_add_left: '',
            or_upper_add_right: '',
            or_upper_add_left: '',
            or_seg_height_right: '',
            or_seg_height_left: '',
            or_tint_color: '',
            or_tint_percent: '',
            or_mirror: '',
            or_coating: '',
            or_frame_info: 'Frame Supplied',
            or_frame_manufacturer: '',
            or_frame_style: '',
            or_frame_color: '',
            or_frame_size: '',
            or_frame_side_shield: '',
            or_extra_ss: '',
            or_frame_case: '',
            or_add_on_1: '',
            or_add_on_2: '',
            or_add_on_3: '',
            or_notes: '',
            or_cc_emp_copay_token: '',
            or_cc_company_card_token: '',
            or_cc_emp_card_type: '',
            or_cc_emp_card_exp_date: '',
            or_cc_company_card_type: '',
            or_cc_company_card_exp_date: '',
            or_special_instructions: '',
            or_force_hold_reason: '',
            or_cc_emp_ivc: '',
            or_cc_emp_zip: '',
            or_manual_ship_addr_flag: '',
            or_manual_ship_name: '',
            or_manual_ship_addr_1: '',
            or_manual_ship_addr_2: '',
            or_manual_ship_addr_3: '',
            method: '',
        });

    const { post } = form;

    return (
        <Stack
            component="form"
            gap="xl"
            onSubmit={(e) => {
                e.preventDefault();
                post(route('orders.store'));
            }}
        >
            <PageTitle title="Create Order" />
            <OrderForm lenses={lenses} frameVariations={frameVariations} tints={tints} form={form} miscs={miscs} coatings={coatings} />
        </Stack>
    );






}