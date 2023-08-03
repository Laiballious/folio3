import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';


export const StyledBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid',
    borderColor: 'divider',
});

export const StyledLogo = styled('img')({
    width: 40,
    height: 40,
    marginRight: 10,
});

export const StyledSearchBar = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
});

export const StyledSearchInput = styled('input')(({ theme }) => ({
    width: 256,
    height: 36,
    paddingLeft: 34,
    paddingRight: 12,
    fontFamily: 'Mulish',
    fontSize: 14,
    backgroundColor: theme.palette.grey[200],
    borderRadius: theme.spacing(1),
    border: 'none',
    outline: 'none',
    '&:hover': {
        color: theme.palette.grey[400],
        backgroundColor: theme.palette.grey[200],
    },
    '&:focus': {
        color: theme.palette.grey[400],
        backgroundColor: '#FFFFFF',
    },
    '&:disabled': {
        color: theme.palette.grey[400],
        backgroundColor: theme.palette.grey[200],
    },
}));

export const StyledSearchIcon = styled(SearchIcon)({
    marginLeft: '4px',
    marginRight: '4px',
    fill: '#171A1F',
});

export const StyledBellIcon = styled(NotificationsIcon)({
    marginLeft: '8px',
    fill: '#323842',
});

export const StyledAvatar = styled(Avatar)({
    marginLeft: '8px',
    backgroundColor: '#F9CECF',
});
