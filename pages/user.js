import { useAuthState } from "react-firebase-hooks/auth";
import { makeStyles } from "@material-ui/core/styles";
import { auth, signinWithGoogle } from "../helpers/firebase/firebase";
import { Button } from "@material-ui/core";

const Page = () => {
  const classes = useStyles();
  const [user, loading, error] = useAuthState(auth);

  const handleSignin = () => {
    signinWithGoogle();
    // .then((result) => {
    //   return result.user.getIdToken();
    // })
    // .then(async (idToken) => {
    //   console.log(idToken);
    //   const res = await fetch("/api/setCustomClaims", {
    //     method: "POST",
    //     body: JSON.stringify({ idToken }),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });

    //   if (!res.ok) {
    //     throw new Error("Set claims failed!");
    //   }

    //   auth.currentUser.getIdToken(true);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  };

  if (loading) {
    return (
      <div className={classes.root}>
        <h2>Initialising User...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className={classes.root}>
        <h2>Error 401: {error}</h2>
      </div>
    );
  }

  if (!user) {
    return (
      <div className={classes.root}>
        <Button color="primary" variant="contained" onClick={handleSignin}>
          Sign In with Google
        </Button>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <h2>Signed in with email: {user.email}</h2>
      <Button
        color="primary"
        variant="contained"
        onClick={() => auth.signOut()}
      >
        Sign Out
      </Button>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default Page;
