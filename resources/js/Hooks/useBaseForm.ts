import { useForm } from '@inertiajs/react';

export default function useBaseForm<TForm extends object>(
  initialValues?: TForm,
) {
  const form = useForm(initialValues);

  return {
    getFieldProps: <K extends keyof TForm>(
      key: K,
      options?: { type?: 'date' | 'checkbox' },
    ) => ({
      value: (() => {
        if (options?.type === 'date') {
          return form.data[key] ? new Date(form.data[key] as string) : null;
        }

        if (options?.type === 'checkbox') {
          return undefined;
        }

        return form.data[key] as any;
      })(),
      checked:
        options?.type === 'checkbox' && form.data[key] && form.data[key] !== '0'
          ? true
          : false,
      onChange: (
        e:
          | React.ChangeEvent<HTMLInputElement>
          | React.ChangeEvent<HTMLTextAreaElement>
          | string
          | Date
          | null,
      ) => {
        form.setError(key, '');

        if (e === null) {
          form.setData(key, '' as TForm[keyof TForm]);
          return;
        }

        if (typeof e === 'string') {
          form.setData(key, e as TForm[keyof TForm]);
          return;
        }

        if (e instanceof Date) {
          form.setData(key, e.toISOString() as TForm[keyof TForm]);
          return;
        }

        if (options?.type === 'checkbox') {
          e = e as React.ChangeEvent<HTMLInputElement>;

          form.setData(key, e.target.checked as TForm[keyof TForm]);
          return;
        }

        form.setData(key, e.target.value as any);
      },
      error: form.errors[key],
    }),
    ...form,
  };
}
