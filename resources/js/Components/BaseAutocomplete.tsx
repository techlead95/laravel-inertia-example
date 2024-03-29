import {
  Autocomplete,
  AutocompleteProps,
  ComboboxClearButton,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export default function BaseAutocomplete(props: AutocompleteProps) {
  const [dropdownOpened, { toggle }] = useDisclosure();

  return (
    <Autocomplete
      rightSection={
        props.value ? (
          <ComboboxClearButton
            onClear={() => {
              props.onChange?.('');
              toggle();
            }}
          />
        ) : null
      }
      dropdownOpened={dropdownOpened}
      onDropdownOpen={toggle}
      onDropdownClose={toggle}
      {...props}
    />
  );
}
