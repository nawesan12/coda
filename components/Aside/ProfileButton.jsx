"use client"
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../../context/context"

export default function ProfileButton() {

  const user = useContext(UserContext)

  return (
    <>
    <Link href={user.username ? `/${user.username}` : "/login"}>
      <section className="profile-button">
        <Image src={`https://avatars.dicebear.com/api/micah/${user.username ? user.username : "specialcoda"}.svg`} alt="" fill sizes="()"/>
      </section>
    </Link>
    </>
  )
}