import ThemeSwitcher from '@/components/shared/ThemeSwitcher'
import ListItem from './ListItem'

export default function ButtonsMenu() {
  const listItemMenu = [
    {
      title: 'Início',
      link: '#',
    },
    {
      title: 'Tecnologias',
      link: '#',
    },
    {
      title: 'Dashboard',
      link: '#',
    },
    {
      title: 'Feedbacks',
      link: '#',
    },
  ]

  return (
    <>
      <nav className="grid gap-4 py-4">
        <ul className="headerNav bg-white bg-opacity-5 border border-white border-opacity-5 rounded-md flex flex-col p-6 space-y-6   justify-start items-center shadow-sm">
          {listItemMenu.map((item, index) => (
            <ListItem key={index} title={item.title} link={item.link} />
          ))}
        </ul>
      </nav>
    </>
  )
}
