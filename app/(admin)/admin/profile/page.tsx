import DeleteAccount from "@/components/profile/delete-account";
import PasswordChangeForm from "@/components/profile/password-change-form";
import ProfileDetails from "@/components/profile/profile-details";
import ProfileUpdateForm from "@/components/profile/profile-update-form";
import { getCurrentUser } from "@/lib/auth";
import Link from "next/link";

const Profile = async () => {
  const user = await getCurrentUser();
  return (
    <>
      <div className="rounded-xl border bg-white/60 p-2 shadow dark:bg-accent/20 sm:p-4">
        <Link
          href="/dashboard"
          className="mb-4 block text-blue-500 hover:underline"
        >
          Back
        </Link>
        <ProfileDetails
          user={{ name: user?.name!, email: user?.email!, image: user?.image! }}
        />
        <div className="mt-6">
          <ProfileUpdateForm
            user={{ name: user?.name!, email: user?.email! }}
          />
          <PasswordChangeForm />
          <DeleteAccount />
        </div>
      </div>
    </>
  );
};

export default Profile;
