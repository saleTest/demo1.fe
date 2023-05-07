import Link from "next/link";

export default function HomePage(){
    return(
        <>
            <Link href={"users"}>Go to users page</Link>
            {/*<a href="/users/index">Users</a>*/}
            <h1>Home Page</h1>
        </>
    );
}