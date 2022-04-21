import { FC, ReactNode } from 'react';
import { CssBaseline, Paper } from '@material-ui/core';

const Wrapper: FC<{ children: ReactNode }> = props => {
  return <>
    <CssBaseline />
    <div>
      <Paper>{props.children}</Paper>
    </div>
  </>;
};

export default Wrapper;