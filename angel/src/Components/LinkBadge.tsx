export default function LinkBadge(props: any) {

  return (
    <>
      <a href={props.url} target="_blank" className="inline-flex  items-center rounded-md px-2 py-1 text-sm hover:bg-theme-green  text-black border border-black text-center shadow-[1.5px_1.5px_0px_#040728] mx-1.5 mb-3">
        {props.title}
      </a>
    </>
  )
}