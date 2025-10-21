export function createPackageService() {
  function listRemotePackages(): string[] {
    // Implementation here
    return ['remotePackage1', 'remotePackage2']
  }


  function listInstalledPackages(): string[] {
    // Implementation here
    return ['installedPackage1', 'installedPackage2']
  }

  return { listRemotePackages, listInstalledPackages }
}
