import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
const SideBar = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="title" color="inherit">
                    Popular Links
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <a href="#" style={{ display: 'block',padding:'5px'}}> This is good Link -1</a>
                <a href="#" style={{ display: 'block',padding:'5px'}}> This is good Link -2</a>
                <a href="#" style={{ display: 'block',padding:'5px'}}> This is good Link -3</a>
                <a href="#" style={{ display: 'block',padding:'5px'}}> This is good Link -4</a>
                <a href="#" style={{ display: 'block',padding:'5px'}}> This is good Link -5</a>
                
            </Grid>
        </Grid>
    )
}
export default SideBar;
