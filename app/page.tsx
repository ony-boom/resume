import { ProfilePic } from "@/components/profile-pic";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      <section aria-labelledby="profile">
        <div className="flex items-center gap-4">
          <ProfilePic size={80} />

          <div className="flex flex-col">
            <h1 className="text-2xl">Ony</h1>
            <p className="text-sm">Software Engineer</p>
            <a className="text-xs" href="mailto:onyrakoto27@gmail.com">
              onyrakoto27@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
