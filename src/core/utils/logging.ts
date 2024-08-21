import type { PiniaPluginContext } from 'pinia'

export function loggingPlugin({ store }: PiniaPluginContext) {
  if (process.env.NODE_ENV !== 'development') {
    return
  }
  store.$onAction(({ name, args, after, onError }) => {
    console.log(`[Pinia] Action "${name}" triggered with arguments:`, args)
    after((result) => {
      console.log(`[Pinia] Action "${name}" completed with result:`, result)
    })

    onError((error) => {
      console.error(`[Pinia] Action "${name}" failed with error:`, error)
    })
  })
}
