import {ChangeEvent, Context} from 'react';

export const onChangeInputHandler = (
  field: string,
  event: ChangeEvent<HTMLInputElement>,
  context: React.Component<any>
) => {
  context.setState({
    [field]: event.target.value,
  });
};

export const onChangeModalVisibility = (
  stateProp: string,
  visible: boolean,
  context: React.Component<any>
) => {
  context.setState({
    [stateProp]: visible,
  });
};
