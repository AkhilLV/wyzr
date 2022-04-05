import googleIcon from "../assets/google-icon.jpg";

export default function Auth() {
  return (
    <div className="container center">
      <button type="button">
        <img src={googleIcon} alt="google-icon" />
        Sign in with Google
      </button>
    </div>
  );
}
