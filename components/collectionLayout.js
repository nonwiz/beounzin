


export default function CollectionLayout({ meta, children }) {
  console.log(meta);
  return (
    <main>
      <article className="p-4 mt-10 mx-60 prose lg:prose-xl">
        {children}
      </article>
    </main>
  )
}
