export function createStorageService() {
  function getPackagePath(packageName: string): string {
    // Implementation here
    return `/path/to/${packageName}`
  }

  return { getPackagePath }
}
