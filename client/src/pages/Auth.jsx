import googleIcon from "../assets/google-icon.jpg";

export default function Auth() {
  return (
    <div>
      <button type="button">
        <img src={googleIcon} alt="google-icon" />
        <a href="http://localhost:4000/auth/google">Sign in with Google</a>
      </button>
    </div>
  );
}
