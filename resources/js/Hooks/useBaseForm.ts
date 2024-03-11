import { useForm } from '@inertiajs/react';

export default function useBaseForm<TForm extends object>(
  initialValues?: TForm,
) {
  const form = useForm(initialValues);

  return {
    getFieldProps: <K extends keyof TForm>(
      key: K,
      options?: { type?: 'date' },
    ) => ({
      value: (() => {
        if (options?.type === 'date') {
          return form.data[key] ? new Date(form.data[key] as string) : null;
        }

        return form.data[key] as any;
      })(),
      onChange: (
        e: React.ChangeEvent<HTMLInputElement> | string | Date | null,
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

        form.setData(key, e.target.value as any);
      },
      error: form.errors[key],
    }),
    ...form,
  };
}
