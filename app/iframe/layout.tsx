export default function IframeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body
        style={{
          margin: 0,
          background: 'transparent',
          color: '#0B1F3B',
        }}
      >
        {children}
      </body>
    </html>
  )
}
