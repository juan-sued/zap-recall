import Link from 'next/link'

interface IListItem {
  title: string
  link: string
}

export default function ListItem({ title, link }: IListItem) {
  return (
    <>
      <Link href={link}>
        <li className="text-sm  hover:text-yellow-300 hover:scale-105  active:scale-95 duration-200">
          {title}
        </li>
      </Link>
    </>
  )
}
