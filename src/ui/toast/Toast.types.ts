export enum ToastPropsSeverity {
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
  SUCCESS = 'success',
}

export type ToastProps = {
  message: string;
  severity: ToastPropsSeverity;
  autoHideDuration: number;
  isOpen: boolean;
};
