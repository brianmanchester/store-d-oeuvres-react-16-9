import { ReactNode } from "react";

export type Names = {
  ggp: string;
  gp: string;
  p: string;
  c: string;
}

export type Props = { children: ReactNode; names: Names }