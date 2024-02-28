import { Alert, AlertProps } from '@mantine/core';
import { Info } from '@mui/icons-material';
import { useEffect, useState } from 'react';

interface Props extends AlertProps {
  status?: 'success';
}

export default function BaseAlert({ status = 'success', ...props }: Props) {
  const icon = <Info />;
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
  }, [props.title]);

  if (!visible) {
    return null;
  }

  return (
    <Alert
      variant="light"
      color="blue"
      icon={icon}
      withCloseButton
      onClose={() => setVisible(false)}
      {...props}
    />
  );
}
