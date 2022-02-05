import React, { useContext } from "react";
import loginImg from "../../images/login.png";
import "./Login.css";
import { useForm } from "react-hook-form";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserContext } from "../../App";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import firebaseConfig from "./firebase.config";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const onSubmit = (data) => console.log(data);
  const googleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };

        setLoggedInUser(signedInUser);
        storeAuthToken(signedInUser);
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };
  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
        history.replace(from);
      })
      .catch(function (error) {
        // Handle error
      });
  };

  return (
    <div className="container d-flex">
      <div className="col-md-6 m-auto ">
        <div className="loginCard shadow m-auto">
          <h4 className=" text-center pb-3">Login</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Your Email"
              className="form-control inputField"
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-danger">This field is required</span>
            )}
            <br />
            <input
              placeholder="Password"
              className="form-control inputField"
              type="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-danger">This field is required</span>
            )}
            <br />
            <input
              className="btn-brand form-control inputField"
              type="submit"
              value="Sign In"
            />
          </form>
          <h5
            onClick={googleSignIn}
            style={{ borderRadius: "25px" }}
            className="btn btn-google btn-brand text-center inputField  form-control d-flex justify-content-center align-items-center mt-3"
          >
            <FontAwesomeIcon icon={faGoogle} />
            &nbsp;&nbsp;&nbsp; Google signIn
          </h5>
          <h6>{loggedInUser.email}</h6>
        </div>
      </div>
      <div className="col-md-6 loginImg ">
        <img src={loginImg} alt="" />
      </div>
    </div>
  );
};

export default Login;
