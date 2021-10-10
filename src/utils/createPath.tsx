export default function createPath(date: string): string {
  const partsDate = date?.split("-");
  return partsDate[0] + "/" + partsDate[2] + "/" + partsDate[1];
}
