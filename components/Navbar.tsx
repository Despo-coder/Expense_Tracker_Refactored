// import { SignedIn, UserButton, SignedOut, SignInButton } from '@clerk/nextjs'
// import { checkUser } from '@/assets/utility/checkUser'

import ThemeToggler from "./ThemeToggler"

const Navbar = () => {
  return (
    <div>
    <nav className='navbar'>
      <div className="navbar-container">
      <h2>Expense Tracker</h2>
      <ThemeToggler />
          <div >
              {/* <SignedOut>
              <SignInButton />
              </SignedOut>
              <SignedIn>
              <UserButton />
              </SignedIn> */}
              </div>
      </div>
    </nav>
  </div>
  )
}

export default Navbar
