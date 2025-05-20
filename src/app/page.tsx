import Image from "next/image"

export default function Home() {
  return(
    <div>
      <Image priority src="/favicon.svg" alt="text" width={64} height={64}/>
    </div>
  )
}
