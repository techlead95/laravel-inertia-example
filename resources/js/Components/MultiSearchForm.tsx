import {
  Button,
  CloseButton,
  Group,
  GroupProps,
  TextInput,
} from '@mantine/core';
import { isEmpty, isEqual, omitBy } from 'lodash';
import { ComponentProps, ReactNode, useState } from 'react';

type GetFieldProps<T> = (
  field: keyof T,
) => Partial<ComponentProps<typeof TextInput>>;

interface Props<T> extends Omit<GroupProps, 'children'> {
  initialValues: T;
  onSearch: (values: T | null) => void;
  showClear?: boolean;
  children: (params: { getFieldProps: GetFieldProps<T> }) => ReactNode;
}

export default function MultiSearchForm<T extends {}>({
  initialValues,
  onSearch,
  showClear,
  children,
  ...props
}: Props<T>) {
  const [values, setValues] = useState<T>(initialValues);

  const getFieldProps: GetFieldProps<T> = (field: keyof T) => {
    const value = (values[field] ?? '') as string;

    return {
      value,
      onChange: (e) => {
        setValues({ ...values, [field]: e.target.value });
      },
      w: 200,
      rightSection: value ? (
        <CloseButton
          onClick={() => {
            setValues({ ...values, [field]: '' });
          }}
        />
      ) : null,
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
      {showClear && (
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
