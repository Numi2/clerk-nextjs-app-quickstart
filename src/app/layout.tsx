import { ClerkProvider } from '@clerk/nextjs'
import './globals.css';
import { Toaster } from '@/components/ui/sonner';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="nb">        
       <body> 
        <main>
          {children}
          </main>
          <Toaster />   
        </body>
      </html>
    </ClerkProvider>
  )
}
