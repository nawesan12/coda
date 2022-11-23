export default function Page() {
  return (
    <>
    <section className="">
      <form action="/api/users/login" method="POST">
        <label htmlFor="">Email or username</label>
        <input type="text" name="identifier"/>
        <label htmlFor="">Password</label>
        <input type="text" name="password"/>

        <button type="submit">Login</button>
      </form>
    </section>
    </>
  )
}