export default function createDate(pathname: string): string {
  const partsPath = pathname.split("/");
  return partsPath[1] + "-" + partsPath[3] + "-" + partsPath[2];
}
