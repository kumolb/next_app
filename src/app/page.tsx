import DefaultButton from '@/components/buttons/defaultbutton/DefaultButton'
import HoverButton from '@/components/buttons/hoverbutton/HoverButton'
import OutlineButton from '@/components/buttons/outlinebutton/OutlineButton'
import OutlineHoverButton from '@/components/buttons/outlinehoverbutton/OutlineHoverButton'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'

type Repo = {
  name: string
  stargazers_count: number
}

export const getStaticProps: GetStaticProps<{
  repo: Repo
}> = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const repo = await res.json()
  // #03a5fc
  return { props: { repo } }
}

export default function Home({
  repo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (<>
    <h3>Here a list of button example</h3>

    <div style={{ margin: "10px auto", paddingLeft: "20px" }}>
      <DefaultButton>Submit</DefaultButton>
      <hr />
      <HoverButton>OK</HoverButton>
      <hr />
      <OutlineButton>Outline</OutlineButton>

      <hr />
      <OutlineHoverButton>Hover</OutlineHoverButton>
    </div>
  </>)
}