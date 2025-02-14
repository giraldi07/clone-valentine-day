export interface NumpadProps {
  onDateSubmit: (date: string) => void;
  onInputChange: (value: string) => void;
  currentInput: string;
}

export interface HeartBarProps {
  fillPercentage: number;
}

export interface CountdownProps {
  targetDate: Date;
}