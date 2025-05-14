import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 't9s2j5im',
    dataset: 'production'
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
