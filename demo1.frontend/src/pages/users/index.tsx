import Link from "next/link";

export default function UserPage(){
    return(
        <>
            <Link href={"home"}>Go to home page</Link>
            {/*<a href="/users/index">Users</a>*/}
            <h1>User Page</h1>
        </>
    );
}