import { User } from '@/types';
import { Checkbox, Loader } from '@mantine/core';
import axios from 'axios';
import { useState } from 'react';

interface Props {
  userId: number;
  approved?: boolean;
  onApprovedChange: (value: boolean) => void;
}

export default function ApproveUserCheckbox({
  userId,
  approved,
  onApprovedChange,
}: Props) {
  const [updating, setUpdating] = useState(false);

  const updateApproved = (approved: boolean) => {
    setUpdating(true);

    axios
      .put(route('admin.users.ajax-update', userId), { approved })
      .then((r) => {
        const user = r.data as User;

        onApprovedChange(user.approved ?? false);
      })
      .finally(() => {
        setUpdating(false);
      });
  };

  if (updating) {
    return <Loader size={20} />;
  }

  return (
    <Checkbox
      checked={approved}
      disabled={updating}
      onChange={(e) => {
        updateApproved(e.target.checked);
      }}
    />
  );
}
