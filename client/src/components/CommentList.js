import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { green } from '@mui/material/colors';

const CommentList = ({ name, text }) => {
    return (
        <>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar sx={{ bgcolor: green[500] }}>
                       <AssignmentIcon />
                     </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={name}
                        secondary={
                            <>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {text}
                                </Typography>
                            </>
                        }
                    />
                </ListItem>

            </List>

        </>
    );
}

export default CommentList;