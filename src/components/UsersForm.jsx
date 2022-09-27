import React from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const UsersForm = ({ addUser, userSelected, deselectProduct, updateUser }) => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (userSelected !== null) {
      reset(userSelected);
    }
  }, [userSelected]);

  const submit = (newUser) => {
    console.log(newUser);
    if (userSelected) {
      updateUser(newUser);
    } else {
      addUser(newUser);
    }
  };

  const clear = () => {
    reset({
      birthday: "",
      email: "",
      first_name: "",
      password: "",
      last_name: "",
    });
    deselectProduct();
  };

  return (
    <div className="form-container">
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <form className="login" onSubmit={handleSubmit(submit)}>
              <div className="login__field">
                <label htmlFor="name">
                  <i className="login__icon fa-solid fa-user"></i>
                  <input
                    type="text"
                    className="login__input"
                    id="name"
                    placeholder="User Name"
                    {...register("first_name")}
                    required
                  />
                </label>
                <label htmlFor="lastName">
                  <input
                    type="text"
                    className="login__input"
                    id="lastName"
                    placeholder="Last Name"
                    {...register("last_name")}
                    required
                  />
                </label>
              </div>
              <div className="login__field">
                <label htmlFor="email">
                  <i className="button__icon fa-solid fa-envelope"></i>
                  <input
                    type="email"
                    className="login__input"
                    placeholder="Email"
                    id="email"
                    {...register("email")}
                    required
                  />
                </label>
              </div>
              <div className="login__field">
                <label htmlFor="password">
                  <i className="login__icon fas fa-lock"></i>
                  <input
                    type="password"
                    className="login__input"
                    placeholder="Password"
                    id="password"
                    {...register("password")}
                    required
                  />
                </label>
              </div>
              <div className="login__field">
                <label htmlFor="birthday">
                  <i className="button__icon fa-solid fa-cake-candles"></i>
                  <input
                    type="date"
                    className="login__input"
                    id="birthday"
                    {...register("birthday")}
                    required
                  />
                </label>
              </div>
              <button className="sbutton login__submit">
                {userSelected ? "Update" : "Create"}
              </button>
              <button
                className="button login__submit"
                type="button"
                onClick={clear}
              >
                Clear
              </button>
            </form>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersForm;
