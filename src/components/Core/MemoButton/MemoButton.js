import React, { useEffect, useState } from 'react';
import { Button, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

const MemoButton = ({
  loading,
  text,
  loadingText,
  loadingShowInMs = 1000,
  onLoadingFinished,
  ...props
}) => {
  const classes = useStyles();
  const [internalLoading, setInternalLoading] = useState(false);

  /*  const loadEffect = () => {
    if (loading === true) {
      setInternalLoading(true);
      setTimeout(() => {
        setInternalLoading(false);
        onLoadingFinished();
      }, loadingShowInMs);
    }
  };
  useEffect(loadEffect, [loading]);
*/

  useEffect(() => {
    if (loading) {
      setInternalLoading(true);
      setTimeout(() => {
        setInternalLoading(false);
        onLoadingFinished();
      }, loadingShowInMs);
    }
  }, [loading]);

  return (
    <div className={classes.wrapper}>
      <Button className={classes.buttonProgress} {...props}>
        {internalLoading ? loadingText : text}
      </Button>
      {internalLoading && (
        <CircularProgress size={24} className={classes.buttonProgress} />
      )}
    </div>
  );
};

export default MemoButton;
