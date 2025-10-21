export type Pattern = {
  id: string;
  label: string;
  confidence: number;
  why?: string;
};

export type A11yItem = {
  id: string;
  level: "must" | "should";
  status: "pass" | "warn" | "fail";
  message: string;
};

export type Decision = {
  choice: string;
  justification: string;
};

export type CustomCss = {
  selector: string;
  declaration: string;
  reason?: string;
};

export type PreviewBreakpoint = {
  id: "mobile" | "tablet" | "desktop";
  width: number;
};

export type GenerationResult = {
  summary: string;
  patterns: Pattern[];
  html: string;
  tokens: string[];
  a11y?: A11yItem[];
  explanation?: { decisions: Decision[]; limitations: string[] };
  customCss?: CustomCss[];
  preview?: { breakpoints: PreviewBreakpoint[] };
};
