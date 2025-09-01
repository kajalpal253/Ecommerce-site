import { TextField, Button ,Grid} from "@mui/material";



import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser} from "../../state/auth/Action";
import { register } from "../../state/auth/Action";  // ✅ only keep what's used


const Registerform = () => {
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const jwt = localStorage.getItem("jwt")
const auth = useSelector((state) => state);

    useEffect(() =>{
      if(jwt){
      dispatch(getUser(jwt))
      }
    },[jwt,auth.jwt]);

  const handleSubmit = (event) => {
       event.preventDefault()

       const data = new FormData(event.currentTarget);
       const userData ={
        firstName:data.get("firstName"),
        lastName:data.get("lastName"),
        email:data.get("email"),
        password:data.get("password")
       }
       dispatch(register(userData))
       console.log("userData" ,userData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid  spacing={2} >
          <Grid item xs={12} sm={6} >
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}  >
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12}  >
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              type="password"

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
              type="password"
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
                Register
                </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center flex-col items-center">
  <div className="py-3 flex items-center"> 
    <p>If you already have an account?</p>
    <Button 
      onClick={() => navigate("/login")} 
      size="small" 
      className="ml-2"
    >
      Login
    </Button>
  </div>
</div>

    </div>
  );
};

export default Registerform;
