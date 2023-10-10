import react, { useEffect, useState } from "react";
import useLoginAdminHook from "../hooks/admin/useLoginAdminHook";
import { useForm, Controller } from "react-hook-form";
const LoginAdmin = () => {
  const { createLogin, loading } = useLoginAdminHook();

  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    watch,
  } = useForm();
  const formStyles = {
    maxWidth: "400px",
    margin: "0 auto",
  };

  const inputContainerStyles = {
    marginBottom: "15px",
  };

  const labelStyles = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  };
  const inputStyles = {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
    marginBottom: "5px",
  };
  const submitButtonStyles = {
    backgroundColor: "#734d26",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <div>
      <h1>Please Login here as admin</h1>
      {loading === true && <h4>Loading...</h4>}
      <form style={formStyles} onSubmit={handleSubmit(createLogin)}>
        <div style={inputContainerStyles}>
          <label style={labelStyles}>Email:</label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter email"
                {...field}
                style={{ border: errors.email ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.email && <h5>{errors.email.message}</h5>}
        </div>

        <div style={inputContainerStyles}>
          <label style={labelStyles}>Password:</label>
          <Controller
            name="password"
            control={control}
            rules={{
              required: "password is required",
              validate: (value) => {
                const uppercaseRegex = /[A-Z]/;
                const lowercaseRegex = /[a-z]/;
                const specialCharRegex =
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

                const digitRegex = /\d/;

                if (
                  uppercaseRegex.test(value) &&
                  lowercaseRegex.test(value) &&
                  specialCharRegex.test(value) &&
                  digitRegex.test(value) &&
                  value.length >= 8
                ) {
                  return true;
                } else {
                  return "Password must meet the criteria";
                }
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter password"
                type="password"
                {...field}
                style={{ border: errors.password ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.password && <h5>{errors.password.message}</h5>}
        </div>

        <div style={inputContainerStyles}>
          <label style={labelStyles}>Key:</label>
          <Controller
            name="key"
            control={control}
            rules={{
              required: "key is required",
              validate: (value) => {
        
                const lowercaseRegex = /[a-z]/;
                const specialCharRegex = /[@$!%*?&]/; 
        
                if (
            
                  lowercaseRegex.test(value) &&
                  specialCharRegex.test(value) && 
                
                  value.length >= 0
                ) {
                  return true;
                } else {
                  return "Key must meet the criteria";
                }
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter Key"
                type="key"
                {...field}
                style={{ border: errors.key ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.key && <h5>{errors.key.message}</h5>}
        </div>

        <button type="submit" style={submitButtonStyles}>
          Login
        </button>
      </form>
    </div>
  );
};
export default LoginAdmin;
