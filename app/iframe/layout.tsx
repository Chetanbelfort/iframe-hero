export default function IframeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className="m-0 bg-transparent">
        {children}
      </body>
    </html>
  )
}
