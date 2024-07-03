import useEditableTable from '@/Hooks/useEditableTable';
import { FrameVariation } from '@/types';
import { PropsWithChildren, createContext, useContext } from 'react';

const FrameVariationsTableContext = createContext<ReturnType<
  typeof useEditableTable
> | null>(null);

interface Props {
  frameId: number;
  frameVariations: FrameVariation[];
}

export const FrameVariationsTableProvider = ({
  frameId,
  frameVariations,
  children,
}: PropsWithChildren<Props>) => {
  const value = useEditableTable({
    initialItems: frameVariations,
    storeUrl: route('admin.frames.frame-variations.store', frameId),
    getDestoryUrl: (id) =>
      route('admin.frames.frame-variations.destroy', {
        frame: frameId,
        frame_variation: id,
      }),
    getUpdateUrl: (id) =>
      route('admin.frames.frame-variations.update', {
        frame: frameId,
        frame_variation: id,
      }),
  });

  return (
    <FrameVariationsTableContext.Provider value={value}>
      {children}
    </FrameVariationsTableContext.Provider>
  );
};

export const useFrameVariationsTable = () => {
  const value = useContext(FrameVariationsTableContext);

  if (value == null) {
    throw new Error(
      'useFrameVariationsTable must be used inside FrameVariationsTableProvider',
    );
  }

  return value;
};
