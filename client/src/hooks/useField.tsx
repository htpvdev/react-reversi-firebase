import { useEffect, useState } from 'react';
import { firstField } from 'components/common/reversiConst';
import { Field } from 'components/common/reversiTypes';

export function useField(newField: Field|null = null) {
  const [field, setField] = useState(firstField)

  useEffect(() => {
    if (newField) {
      setField(newField)
    }
  })

  return field
}
