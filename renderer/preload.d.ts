import { IpcHandler, IpcVersions } from '../main/preload'

declare global {
  interface Window {
    ipc: IpcHandler,
    versions: IpcVersions,
  }
}
