import PageTitle from '@/Components/PageTitle';
import useBaseForm from '@/Hooks/useBaseForm';
import { Stack } from '@mantine/core';

import { Frame, Order, Lens, FrameVariation, Tint, LensCoating, LensCoatingSelect } from '@/types';
import OrderForm from './OrderForm';


interface Props {
    frames: Frame[];
    lenses: Lens[];
    frameVariations: FrameVariation[];
    tints: Tint[];
    lensCoatingSelects: LensCoatingSelect[];
    order: Partial<Order>;
}

export default function CreateOrder({ lenses, frameVariations, tints, lensCoatingSelects, order }: Props) {
    const form =
        useBaseForm(order);

    const { put } = form;

    return (
        <Stack
            component="form"
            gap="xl"
            onSubmit={(e) => {
                e.preventDefault();
                put(route('orders.update'));
            }}
        >
            <PageTitle title="Edit Order" />
            <OrderForm lenses={lenses} frameVariations={frameVariations} tints={tints} lensCoatingSelects={lensCoatingSelects} form={form} />
        </Stack>
    );






}