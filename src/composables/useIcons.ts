import { defineAsyncComponent } from 'vue'

export enum Icon {
  MonoAccountSettings = 'mono--account-settings',
  MonoAccount = 'mono--account',
  MonoGroups = 'mono--groups',
  MonoInvitations = 'mono--invitations',
  MonoMenu = 'mono--menu',
  MonoNewsTape = 'mono--news-tape',
  MonoNotifications = 'mono--notifications',
  MonoProfile = 'mono--profile',
  MonoServices = 'mono--services',
  MonoWallet = 'mono--wallet'
}

export function useIcons(icon: Icon) {
  const files = {
    [Icon.MonoAccountSettings]: defineAsyncComponent(() => import('@/components/icons/IconAccountSettings.vue')),
    [Icon.MonoAccount]: defineAsyncComponent(() => import('@/components/icons/IconAccount.vue')),
    [Icon.MonoGroups]: defineAsyncComponent(() => import('@/components/icons/IconGroups.vue')),
    [Icon.MonoInvitations]: defineAsyncComponent(() => import('@/components/icons/IconInvitations.vue')),
    [Icon.MonoMenu]: defineAsyncComponent(() => import('@/components/icons/IconMenu.vue')),
    [Icon.MonoNewsTape]: defineAsyncComponent(() => import('@/components/icons/IconNewsTape.vue')),
    [Icon.MonoNotifications]: defineAsyncComponent(() => import('@/components/icons/IconNotifications.vue')),
    [Icon.MonoProfile]: defineAsyncComponent(() => import('@/components/icons/IconProfile.vue')),
    [Icon.MonoServices]: defineAsyncComponent(() => import('@/components/icons/IconServices.vue')),
    [Icon.MonoWallet]: defineAsyncComponent(() => import('@/components/icons/IconWallet.vue'))
  }

  return files[icon]
}
