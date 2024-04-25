export interface Session {
  label: string;
  value: string;
}
export const session: Session[] = [
  { label: "Final", value: "final" },
  { label: "Second Final", value: "secondFinal" },
  { label: "Temporal", value: "temporal" },
];

export interface Year {
  label: string;
  value: string;
}
export const year: Year[] = [
  { label: "2024", value: "2024" },
  { label: "2023", value: "2023" },
  { label: "2022", value: "2022" },
];
