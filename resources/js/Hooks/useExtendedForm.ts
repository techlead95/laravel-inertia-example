import { useForm } from '@inertiajs/react';

export default function useExtendedForm<TForm extends object>(
  initialValues?: TForm,
) {
  const form = useForm(initialValues);

  return {
    getFieldProps: <K extends keyof TForm>(key: K) => ({
      value: form.data[key] ?? '',
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        form.setData(key, e.target.value as any);
      },
      error: form.errors[key],
    }),
    ...form,
  };
}
