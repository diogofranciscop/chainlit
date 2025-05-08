interface SubtitleForms {
  Subtitle: string;
}
export function Subtitle({ Subtitle }: SubtitleForms) {
  return <h1>{Subtitle}</h1>;
}
