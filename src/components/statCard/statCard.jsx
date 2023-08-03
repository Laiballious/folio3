import PropTypes from 'prop-types';

import { Grid, Stack, Typography } from '@mui/material';

// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //

const StatCard = ({ color, title, count, icon }) => (
    <>
    <Stack spacing={0.5}>
      <Typography variant="h5" color="textSecondary">
        {title}
      </Typography>
      <Grid container alignItems="center">
        <Grid item>
          <Typography variant="h5" color="inherit">
            {icon} {count}
          </Typography>
        </Grid>
      </Grid>
    </Stack>
</>
);

StatCard.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  count: PropTypes.string,
  percentage: PropTypes.number,
  isLoss: PropTypes.bool,
  extra: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
};

StatCard.defaultProps = {
  color: 'primary'
};

export default StatCard;
