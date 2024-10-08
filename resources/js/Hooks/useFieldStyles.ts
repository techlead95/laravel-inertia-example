import { useMantineTheme } from '@mantine/core';
import { merge } from 'lodash';
import { CSSProperties } from 'react';

interface Params {
  horizontal?: boolean;
  blueLabel?: boolean;
}

export default function useGetFieldStyles() {
  const theme = useMantineTheme();

  return ({ horizontal, blueLabel }: Params) => {
    const styles: Record<string, CSSProperties> = {};

    if (horizontal) {
      merge(styles, {
        root: { display: 'flex', gap: 16 },
        label: {
          width: 150,
          fontWeight: 'bold',
          textAlign: 'right',
          paddingTop: 7,
        },
        wrapper: { flex: 1, margin: 0 },
        error: { display: 'flex', alignItems: 'center' },
      } as Record<string, CSSProperties>);
    }

    if (blueLabel) {
      merge(styles, {
        label: {
          fontWeight: 'bold',
          color: theme.colors.blue[theme.primaryShade as number],
        },
      });
    }

    return styles;
  };
}
