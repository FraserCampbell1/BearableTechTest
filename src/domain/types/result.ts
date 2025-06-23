export type Result<Success> = Promise<{
  success: true
  value: Success
} | {
  success: false
  error: Error
}>