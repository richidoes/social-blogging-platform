import React, { useContext } from "react";
import Link from "next/link";
import { userContext } from "../lib/context";
import { auth } from "../lib/firebase";
import { useRouter } from "next/router";

export default function Navbar() {
  const { user, username } = useContext(userContext);

  const router = useRouter();

  const signOut = () => {
    auth.signOut();
    if (router.pathname === "/") {
      router.reload();
    } else {
      router.push("/enter");
    }
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">NXTRIC</button>
          </Link>
        </li>

        {/* user is signed-in and has username */}
        {username && (
          <>
            <li className="push-left">
              <button onClick={signOut}>Sign Out</button>
            </li>
            <li>
              <Link href="/admin">
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL || "/hacker.png"} alt="user-photo" />
              </Link>
            </li>
          </>
        )}

        {/* user is not signed OR has not created username */}
        {!username && (
          <li>
            <Link href="/enter">
              <button className="btn-blue">Log in</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
