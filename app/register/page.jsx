import { email, password, username } from "@utils/regex";

export default function Page() {
  return (
    <>
    <section className="">
      <form action="/api/users/register" method="POST">
        <label htmlFor="">Email</label>
        <input type="text" name="email" placeholder="Email" required
          pattern={String(email)}
        />
        
        <label htmlFor="">Username</label>
        <input type="text" name="username" placeholder="Username" required
          pattern={String(username)}
        />

        <label htmlFor="">Full Name</label>
        <input type="text" name="name" placeholder="Full Name" required />

        <label htmlFor="">Password</label>
        <input type="text" name="password" placeholder="password" required
          pattern={String(password)}
        />

        <button type="submit">Login</button>
      </form>
    </section>
    </>
  )
}