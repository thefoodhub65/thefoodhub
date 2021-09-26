import { firebaseAdmin } from "../../helpers/firebase/firebaseAdmin";

async function handler(req, res) {
  if (req.method === "POST") {
    const idToken = req.body.idToken;
    const claims = await firebaseAdmin.auth().verifyIdToken(idToken);

    if (
      typeof claims.email !== "undefined" &&
      typeof claims.email_verified !== "undefined" &&
      claims.email_verified &&
      claims.email.endsWith("@gmail.com")
    ) {
      // Add custom claims for additional privileges.
      // await firebaseAdmin.auth().setCustomUserClaims(claims.sub, {
      //   admin: true,
      // });

      // Tell client to refresh token on user.
      return res.status(200).json({ message: "Successful", status: "success" });
    } else {
      // Return nothing.
      return res.status(400).json({ message: "Failed", status: "ineligible" });
    }
  }
  return res.status(404).json({ message: "not found!" });
}

export default handler;
