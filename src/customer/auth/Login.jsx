import React from 'react';
import { TextField, Button ,Grid} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../state/auth/Action';



const Login = () => {
  const dispatch =useDispatch();
        const navigate = useNavigate();
       

    const handleSubmit=(event) =>{
event.preventDefault();
const data = new FormData(event.currentTarget);
       const userData ={
       
        email:data.get("email"),
        password:data.get("password")

       }
       dispatch(login(userData));
       console.log("userData" ,userData);

    }
  return (
     <div>
          <form onSubmit={handleSubmit}>
            <Grid  spacing={2} >
             
              
              <Grid item xs={12}  >
                <TextField
                  required
                  id="email"
                  name="email"
                  label="Email"
                  fullWidth
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="password"
                  name="password"
                  label="Password"
                  fullWidth
                  type='password'
                  autoComplete="password"
                />
              </Grid>
              <Grid item xs={12} >
                <Button
                 className="bg-[#9155FD] w-full hover:bg-[#9155FD]"
                  type="submit"
                   variant="contained"
                    size="large"
                  
                    sx={{ padding: ".8rem 0", bgcolor:'#3d108fff'  }}
                    >
                    Login
                    </Button>
              </Grid>
            </Grid>
          </form>
          <div className="flex justify-center flex-col items-center">
  <div className="py-3 flex items-center"> 
    <p>If you already have an account?</p>
    <Button 
      onClick={() => navigate("/register")} 
      size="small" 
      className="ml-2"
    >
      Register
    </Button>
  </div>
</div>
        </div>
  )
}

export default Login
