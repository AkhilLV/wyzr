import googleIcon from "../assets/google-icon.jpg";

import baseUrl from "../baseUrl";

export default function Auth() {
  return (
    <div>
      <button type="button">
        <img src={googleIcon} alt="google-icon" />
        <a href={`${baseUrl}/auth/google`}>Sign in with Google</a>
      </button>
    </div>
  );
}
