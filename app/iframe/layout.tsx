export default function IframeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body style={{ margin: 0, background: '#ffffff' }}>
        {children}
      </body>
    </html>
  )
}
