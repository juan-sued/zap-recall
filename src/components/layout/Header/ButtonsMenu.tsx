import ListItem from './ListItem'

export default function ButtonsMenu() {
  return (
    <>
      <nav className="grid gap-4 py-4">
        <ul className="headerNav bg-white bg-opacity-5 border border-white border-opacity-5 rounded-md flex flex-col py-6 space-y-6   justify-start items-center shadow-sm">
          <ListItem title="Início" link="#" />
          <ListItem title="Tecnologias" link="#" />
          <ListItem title="Refêrencias" link="#" />
          <ListItem title="Feedbacks" link="#" />
        </ul>
      </nav>
    </>
  )
}
