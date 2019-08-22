import React from 'react'
import Grid from '@material-ui/core/Grid';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import GetData from './GetData'

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
}));

function ShowData(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align="right">E Mail</StyledTableCell>
                        <StyledTableCell align="right">Web Site</StyledTableCell>
                        <StyledTableCell align="right">City</StyledTableCell>
                        <StyledTableCell align="right">Contact</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <GetData
                        render={
                            data => {
                                return (
                                    <React.Fragment>                                        
                                    {data.map(el => (
                                        <StyledTableRow key={el.name}>
                                            <StyledTableCell component="th" scope="row">
                                                {el.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{el.email}</StyledTableCell>
                                            <StyledTableCell align="right">{el.website}</StyledTableCell>
                                            <StyledTableCell align="right">{el.address.city}</StyledTableCell>
                                            <StyledTableCell align="right">{el.phone}</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                    </React.Fragment>

                                )
                            }
                        }
                        url={props.url}>

                    </GetData>
                </TableBody>
            </Table>
        </Paper>
    )
}

export default ShowData
