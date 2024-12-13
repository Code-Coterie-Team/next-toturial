import Link from "next/link";

const Users = ()=> {
    return (
        <ul>
            <li>
                <Link href="/users/1">
                    user 1
                </Link>
            </li>
            <li>
                <Link href="/users/2">
                    user 2
                </Link>
            </li>
            <li>
                <Link href="/users/3">
                    user 3
                </Link>
            </li>
            <li>
                <Link href="/users/4">
                    user 4
                </Link>
            </li>
            <li>
                <Link href="/users/5">
                    user 5
                </Link>
            </li>
            <li>
                <Link href="/users/6">
                    user 6
                </Link>
            </li>
        </ul>
    )
}

export default Users;