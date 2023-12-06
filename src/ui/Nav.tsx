import Link from "next/link";

export default function Nav() {
  return (
    <header className="bg-gray-600 text-gray-100">
      <nav className="flex justify-between items-center w-full px-10 py-4">
        <div>My site</div>
        <div className="flex gap-10">
          <Link href="/">Home</Link>
          <Link href="/create-user">Create User</Link>
          <Link href="/server-member">Server Member</Link>
          <Link href="/client-member">Client Member</Link>
          <Link href="/public">Public Page</Link>
        </div>
      </nav>
    </header>
  );
}
