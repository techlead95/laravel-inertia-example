import { useMantineTheme } from '@mantine/core';
import { merge } from 'lodash';
import { CSSProperties } from 'react';

interface Props {
  horizontal?: boolean;
  blueLabel?: boolean;
}

export default function useFieldStyles({ horizontal, blueLabel }: Props) {
  const theme = useMantineTheme();
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
      wrapper: { flex: 1 },
    });
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
}
