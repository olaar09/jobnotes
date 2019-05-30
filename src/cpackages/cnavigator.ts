import React from 'react';
import {RouterProps} from 'interfaces/RouterParamTypes';

export const goForward = (
  context: React.Component<RouterProps>,
  path: string
): void => {
  context.props.history.push(path);
};

export const goBack = (
  context: React.Component<RouterProps>,
  path: string
): void => {
  context.props.history.goBack();
};

export const go = (
  context: React.Component<RouterProps>,
  stacks: number
): void => {
  context.props.history.go(stacks);
};

export const replace = (
  context: React.Component<RouterProps>,
  path: string
): void => {
  context.props.history.replace(path);
};
