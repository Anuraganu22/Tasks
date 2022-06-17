import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


type Props = {}

const data = {
    coloumns: [
        {
            "name": "job",
            "id": 1,
            "key": "job"
        },
        {
            "name": "place of work ",
            "id": 2,
            "key": "place",

        },
        {
            "name": "age",
            "id": "3",
            "key": "age"
        }
    ],

    rowList: [
        {
            "job": "Se",
            "place": "pune",
            "age": "30"
        },
        {
            "job": "acrting",
            "place": "TVM",
            "age": "40"
        },
        {
            "job": "doctor",
            "place": "EKM",
            "age": "32"
        },
    ]
}
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '50%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));


const Mui_table = (props: Props) => {
    const [search, setSearch] = useState<string>("");
    const [myRow, setMyRow] = useState<any>([]);
    
    React.useEffect(() => {
        setMyRow(data.rowList)
    }, [])
    // const classes = useStyles();
    const searchBox = (searchedValue: any) => {
        const newarray = data.rowList.filter((item) => { return item.place.includes(searchedValue.target.value) ||         item.job.includes(searchedValue.target.value) })
        setMyRow(newarray)
    }
    return (
        <div  >
            <h1>-- Details --</h1>
            <div>
                <Search >
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        value={search}
                        onChange={(searchedValue) => {
                            // debugger;
                            setSearch(searchedValue.target.value)
                            searchBox(searchedValue)
                        }}
                        placeholder="Search here…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </div>
            <TableContainer component={Paper}>
                <Table align="center" sx={{ maxWidth: 500 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 3 } }}>
                            {
                                data.coloumns.map((cols: any) =>
                                    <TableCell >{cols.name}</TableCell>
                                )}
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {
                            myRow.map((row: any) => {
                                return <TableRow sx={{ '&:last-child td, &:last-child th': { border: 1 } }}>
                                    {
                                        data.coloumns.map((cols: any) => {
                                            {
                                                return <TableCell >{row[cols.key]}</TableCell>
                                            }
                                        })}
                                </TableRow>
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
export default Mui_table


