import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
type Props = {}
const todos ={
    list:[
      {
        task:"sleep",
        id:"1"
      },
      {
       task:"eat",
       id:"2"
      },
      {
        task:"walk",
        id:"3"
      },
      {
        task:"study",
        id:"4"
      },
      {
        task:"play",
        id:"5"
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

const TodoFilter = (props: Props) => {
  return (
    <div>
        <h1>todo list</h1>
        <Box
          display="flex" 
          alignItems="center"
          justifyContent="center"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 500,
          height:500,
        },
      }}
    >
      <Paper  elevation={10}>
      <Search >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
            // value={search}
            //  onChange={(searchedValue) =>{

            //     setSearch(searchedValue.target.value)
            //     searchBox(searchedValue)}}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        <ul>
        { 
           todos.list.map((item)=>{
            return <li>{item.task}</li>
           }) 
        }
        </ul>
     
        </Paper>
    </Box>
    </div>
  )
}

export default TodoFilter