export interface UnsuspendDriver {
  unsuspend(id: string): Promise<void>
}
