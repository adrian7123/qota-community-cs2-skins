export const getImageUrl = (path: string): string => {
  const skinsBasePath =
    "https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static"

  return path.replaceAll(skinsBasePath, "")
}
