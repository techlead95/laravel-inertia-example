import PageTitle from '@/Components/PageTitle';
import useBaseForm from '@/Hooks/useBaseForm';
import { Stack } from '@mantine/core';

import { Frame, Order, Lens, FrameVariation, Tint, Misc, LensCoating } from '@/types';
import OrderForm from './OrderForm';


interface Props {
    frames: Frame[];
    lenses: Lens[];
    frameVariations: FrameVariation[];
    tints: Tint[];
    order: Partial<Order>;
    miscs: Misc[];
    coatings: LensCoating[];
}

export default function CreateOrder({ lenses, frameVariations, tints, order, miscs, coatings }: Props) {
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
            <OrderForm lenses={lenses} frameVariations={frameVariations} tints={tints} form={form} miscs={miscs} coatings={coatings} />
        </Stack>
    );






}