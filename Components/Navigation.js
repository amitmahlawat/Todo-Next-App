import Link from 'next/link'
import classes from './Navbar.module.css'

const Navigation = () => {
  return (
    <div className={classes.navbar}>
      
        <h1>Todo List App</h1>
        <div className={classes.navitems}>
            <Link href={'/'}>Todo List</Link>
            <Link href={'/completed'}>Completed</Link>
        </div>
      
    </div>
  )
}

export default Navigation;
