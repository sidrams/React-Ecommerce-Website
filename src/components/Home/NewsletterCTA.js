import { TextField } from "@mui/material";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";

function NewsletterCTA() {
    return (
        <div className="bg-gray-100 p-24">
            <div className="bg-white py-24 px-56">
                <h2 className="font-bold text-5xl leading-[120%] text-gray-900 tracking-wide text-center mb-11">
                    Join Our News Letters
                </h2>
                <p className="px-12 text-[#9A9AB0] mb-12 text-center">
                    Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster 
                </p>
                <TextField
                    id="filled-basic"
                    variant="filled"
                    fullWidth
                    label="Search what you need"
                    className="bg-white"
                    InputProps={{
                    endAdornment: (
                        <InputAdornment>
                        <IconButton>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" rx="8" fill="#F86338"/>
                            <path d="M24 14C22.0222 14 20.0888 14.5865 18.4443 15.6853C16.7998 16.7841 15.5181 18.3459 14.7612 20.1732C14.0043 22.0004 13.8063 24.0111 14.1922 25.9509C14.578 27.8907 15.5304 29.6725 16.9289 31.0711C18.3275 32.4696 20.1093 33.422 22.0491 33.8079C23.9889 34.1937 25.9996 33.9957 27.8268 33.2388C29.6541 32.4819 31.2159 31.2002 32.3147 29.5557C33.4135 27.9112 34 25.9778 34 24C33.9971 21.3487 32.9426 18.8069 31.0679 16.9321C29.1931 15.0574 26.6513 14.0029 24 14ZM24 32C22.4178 32 20.871 31.5308 19.5554 30.6518C18.2398 29.7727 17.2145 28.5233 16.609 27.0615C16.0035 25.5997 15.845 23.9911 16.1537 22.4393C16.4624 20.8874 17.2243 19.462 18.3432 18.3431C19.462 17.2243 20.8874 16.4624 22.4393 16.1537C23.9911 15.845 25.5997 16.0035 27.0615 16.609C28.5233 17.2145 29.7727 18.2398 30.6518 19.5554C31.5308 20.871 32 22.4177 32 24C31.9976 26.121 31.154 28.1544 29.6542 29.6542C28.1545 31.154 26.121 31.9976 24 32Z" fill="white"/>
                            <path d="M23.293 20.707L25.586 23H20V25H25.586L23.293 27.293L24.707 28.707L29.414 24L24.707 19.293L23.293 20.707Z" fill="white"/>
                            </svg>
                        </IconButton>
                        </InputAdornment>
                    )
                    }}
                />
            </div>
            
        </div>
    );
  }
  
  export default NewsletterCTA;
  