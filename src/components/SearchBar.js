import TextField from "@mui/material/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

function SearchBar() {
    return (
        <div className="flex items-center search">
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Search what you need"
            className="bg-white"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
      </div>
    );
  }
  
  export default SearchBar;
  