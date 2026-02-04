
type Data = {
   course: string
}

const Header = ({course}: Data) => {
  return (
    <div className="bg-red-800">
        {course}
    </div>
  )
}

export default Header