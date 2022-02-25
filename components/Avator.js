import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Avator({ className }) {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
  // return (
  //   <div
  //     className={`h-12 w-12 cursor-pointer ${className}`}
  //   >
  //     <Image
  //       src="https://static.skillshare.com/uploads/users/350301760/user-image-large.jpg?753816048"
  //       width={100}
  //       height={100}
  //       objectFit="cover"
  //       className="rounded-full"
  //     />
  //   </div>
  // );
}
