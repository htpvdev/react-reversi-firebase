import { useEffect, useState } from 'react';
import { firstSetting } from '../components/common/reversiConst';

export function useSetting() {
  const [setting, setSetting] = useState(firstSetting)

  useEffect(() => {
    setSetting(setting)
  })

  return setting
}