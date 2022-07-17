import { createContext } from "react";
import { firstField, firstSetting } from 'components/common/reversiConst';

export const ReversiContext = createContext({
    setting: firstSetting,
    field: firstField,
})

// const [reversiContext, setReversiContext] = useState({})

