import ListItem from './ListItem'

const MENU_BUTTONS = [
  { title: 'Início', link: '/' },
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Ranking', link: '/ranking' },
  { title: 'Feedbacks', link: '#' },
]

export default function MenuNavBar() {
  return (
    <>
      <nav className="hidden lg:block w-fit ml-10">
        <ul className="headerNav bg-white bg-opacity-5 border border-white border-opacity-5 rounded-full flex px-4 py-2 space-x-4  justify-around  min-w-[500px] items-center  ">
          {MENU_BUTTONS.map((button, index) => (
            <ListItem key={index} title={button.title} link={button.link} />
          ))}
        </ul>
      </nav>
    </>
  )
}
