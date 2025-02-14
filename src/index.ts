import { h, markRaw } from 'vue'
import { toast as toastOriginal } from 'vue-sonner'
import type { ExternalToast } from 'vue-sonner/lib/types'
import VSonner from './VSonner.vue'
import Toast from './Toast.vue'
import type { ToastProps } from './types'

type Options = Omit<ToastProps, 'text'> & Pick<ExternalToast, 'duration' | 'onAutoClose' | 'onDismiss' | 'id' | 'important' | 'promise'>

function toastFunction(text: string, options?: Options) {
  const { description, action, ...rest } = options || {}
  return toastOriginal.custom(markRaw(h(Toast, {
    ...rest,
    description,
    action,
    text,
  })), {
    ...rest,
  })
}

export const toast = Object.assign(toastFunction, {
  dismiss(toastId?: number | string) {
    return toastOriginal.dismiss(toastId)
  },
  toastOriginal,
})

export {
  VSonner,
}
