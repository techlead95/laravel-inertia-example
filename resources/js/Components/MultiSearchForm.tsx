import { Button, Group, GroupProps } from '@mantine/core';
import { isEmpty, isEqual, isNil, omitBy } from 'lodash';
import { ChangeEventHandler, ReactNode, useState } from 'react';

type GetFieldProps<T> = (field: keyof T) => {
  value: any;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

interface Props<T> extends Omit<GroupProps, 'children'> {
  initialValues: T;
  onSearch: (values: T | null) => void;
  hideClear?: boolean;
  children: (params: { getFieldProps: GetFieldProps<T> }) => ReactNode;
}

export default function MultiSearchForm<T extends {}>({
  initialValues,
  onSearch,
  hideClear,
  children,
  ...props
}: Props<T>) {
  const [values, setValues] = useState<T>(initialValues);

  const getFieldProps: GetFieldProps<T> = (field: keyof T) => {
    return {
      value: values[field] ?? '',
      onChange: (e) => {
        setValues({ ...values, [field]: e.target.value });
      },
    };
  };

  return (
    <Group
      gap="xs"
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(values);
      }}
      {...props}
    >
      {children({ getFieldProps })}
      <Button
        type="submit"
        miw={120}
        disabled={isEqual(
          omitBy(values, (v) => !v),
          omitBy(initialValues, (v) => !v),
        )}
      >
        Search
      </Button>
      {!hideClear && (
        <Button
          miw={120}
          variant="default"
          disabled={isEmpty(omitBy(values, (v) => !v))}
          onClick={() => onSearch(null)}
        >
          Clear
        </Button>
      )}
    </Group>
  );
}
