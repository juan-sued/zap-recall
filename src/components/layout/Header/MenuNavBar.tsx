import ListItem from './ListItem'

export default function MenuNavBar() {
  return (
    <>
      <nav className="hidden md:block w-fit ml-10">
        <ul className="headerNav bg-white bg-opacity-5 border border-white border-opacity-5 rounded-full flex px-4 py-2 space-x-4  justify-around  min-w-[500px] items-center">
          <ListItem title="Início" link="/" />
          <ListItem title="Tecnologias" link="#" />
          <ListItem title="Dashboard" link="#" />
          <ListItem title="Feedbacks" link="#" />
        </ul>
      </nav>
    </>
  )
}
