interface SubtitleForms {
  Subtitle: string;
}
export function Subtitle({ Subtitle }: SubtitleForms) {
  return <h1 className="font-semibold">{Subtitle}</h1>;
}
