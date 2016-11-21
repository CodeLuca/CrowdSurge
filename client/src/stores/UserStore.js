import { observable } from 'mobx'

class UserStore {
  @observable color = null
}

const userStore = new UserStore

export default userStore
