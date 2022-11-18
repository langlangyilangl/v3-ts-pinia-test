import useUserStore from './modules/user'

const useStore = () => ({
  user: useUserStore(),
  // app: useAppStore(),
  // permission: usePermissionStore(),
  // setting: useSettingStore(),
  // tagsView: useTagsViewStore(),
});

export default useStore;