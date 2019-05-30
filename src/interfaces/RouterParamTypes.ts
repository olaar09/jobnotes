import {RouteComponentProps} from 'react-router';

type PathParamsType = {
  history: string;
};

// Your component own properties
export type RouterProps = RouteComponentProps<PathParamsType> & {};
