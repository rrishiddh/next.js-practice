import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Profile() {
  const { isAuthenticated, getUser } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }
  const user = await getUser();

  return (
    <div className="min-h-screen w-[90%] mx-auto">
      <div className="text-center my-3">
        <h1 className="text-xl font-bold">Welcome To Your Profile!</h1>
        <div className="  mx-auto py-5">
        <p className="text-xl font-semibold my-2">Hello Dear, {user?.given_name}!</p>
        <p className=" my-1">Your Email : {user?.email}</p>
        </div>


      </div>
    </div>
  );
}
