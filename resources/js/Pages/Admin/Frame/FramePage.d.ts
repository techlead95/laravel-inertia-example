import {
  FrameAddon,
  FrameBrand,
  FrameCollection,
  FrameDefaultGroup,
  FrameEdge,
  FrameMaterial,
  FrameType,
  LensMaterial,
  LensStyle,
  Shield,
  ShieldColor,
} from '@/types';

export interface FramePageProps {
  edges: FrameEdge[];
  materials: FrameMaterial[];
  brands: FrameBrand[];
  collections: FrameCollection[];
  groups: FrameDefaultGroup[];
  frames: FrameType[];
  shields: Shield[];
  shieldColors: ShieldColor[];
  lensMaterials: LensMaterial[];
  lensStyles: LensStyle[];
}
