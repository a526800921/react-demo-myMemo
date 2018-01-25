import { SET_NAVLINK } from '../actionTypes'

const navLink = (state = 'ALL_TODO', action) => {
   // 路由切换
   switch (action.type) {
      case SET_NAVLINK:
         return action.navLink

      default:
         return state
   }
}

export default navLink