import process from 'node:process'
import { isPackageExists } from 'local-pkg'
type Awaitable<T> = T | Promise<T>

export async function interopDefault<T>(m: Awaitable<T>): Promise<T extends {
  default: infer U
} ? U : T> {
  const resolved = await m
  return (resolved as any).default || resolved
}

export async function ensurePackages(packages: (string | undefined)[]) {
  if (process.env.CI || process.stdout.isTTY === false)
    return

  const nonExistingPackages = packages.filter(i => i && !isPackageExists(i)) as string[]
  if (nonExistingPackages.length === 0)
    return

  const p = await import('@clack/prompts')
  const result = await p.confirm({
    message: `${nonExistingPackages.length === 1 ? 'Package is' : 'Packages are'} required for this config: ${nonExistingPackages.join(', ')}. Do you want to install them?`,
  })
  if (result)
    await import('@antfu/install-pkg').then(i => i.installPackage(nonExistingPackages, { dev: true }))
}
