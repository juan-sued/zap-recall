import { Plus } from 'lucide-react'
import AddZapButton from '../shared/Buttons/AddZapButton'

export default function AddZapAllScreenButton() {
  return (
    <>
      <section className="createZapButton h-full w-full">
        <div className="fixed bottom-5 right-5 h-20 w-20">
          <AddZapButton>
            <Plus width={50} />
          </AddZapButton>
        </div>
      </section>
    </>
  )
}
