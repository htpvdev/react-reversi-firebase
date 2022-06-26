import { RvSingleModeController } from "../controller/RvSingleModeController"

const reversiRoutes = [
  {
    method: 'get',
    route: '/reversi',
    controller: RvSingleModeController,
    action: 'all',
  }
]

export default reversiRoutes
