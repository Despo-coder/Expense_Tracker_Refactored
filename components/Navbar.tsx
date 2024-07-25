// import { SignedIn, UserButton, SignedOut, SignInButton } from '@clerk/nextjs'
// import { checkUser } from '@/assets/utility/checkUser'

import ThemeToggler from "./ThemeToggler"
import { SignedIn, UserButton, SignedOut, SignInButton } from '@clerk/nextjs'
import Link from "next/link"
import { checkUser } from '@/assets/utility/checkUser'

const Navbar = async() => {
  const user = await checkUser()
  return (
    <div>
    <nav className='navbar'>
      <div className="navbar-container">
        <Link href='/'> 
      <h2>Expense Tracker</h2>
      </Link>
      <div className="flex items-center justify-between"> <ThemeToggler />
          <div >
              <SignedOut>
              <SignInButton />
              </SignedOut>
              <SignedIn>
              <UserButton />
              </SignedIn>
              </div> </div>
     
      </div>
    </nav>
  </div>
  )
}

export default Navbar
