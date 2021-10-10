export default function createPath(date: string): string {
  const partsDate = date?.split("-");
  console.log(partsDate);
  return partsDate[0] + "/" + partsDate[2] + "/" + partsDate[1];
}
