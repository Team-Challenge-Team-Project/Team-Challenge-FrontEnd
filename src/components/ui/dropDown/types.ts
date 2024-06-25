import { ReactNode } from 'react';

export type TDropDownTriggers = 'click' | 'hover';

type TDropDownClasses = {
  dropDown?: string;
  dropDownPanel?: string;
  dropDownButton?: string;
};

export type TDropDownProps = {
  children?: ReactNode;
  classes?: TDropDownClasses;
  trigger?: TDropDownTriggers;
};

export type TDropDownButtonProps = {
  children?: ReactNode;
  classes?: TDropDownClasses;
};

export type TDropDownPanelProps = TDropDownButtonProps & {
  transition?: number;
  menu?: ReactNode;
};