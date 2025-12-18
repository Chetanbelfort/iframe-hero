export default function IframeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body style={{ margin: 0, background: 'transparent' }}>
        {children}
      </body>
    </html>
  )
}
