import {
  FrameAddon,
  FrameBrand,
  FrameCollection,
  FrameDefaultGroup,
  FrameEdge,
  FrameLimitation,
  FrameMaterial,
  FrameType,
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
  addons: FrameAddon[];
  limitations: FrameLimitation[];
}
