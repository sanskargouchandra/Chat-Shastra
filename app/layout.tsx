
import "../styles/globals.css";
import { ClerkProvider } from '@clerk/nextjs'

export const metadata = {
  title: "Chat-Shastra",
  description: "Experiment with DALL·E+MidJr. and chatbot, an AI system by OpenAI",
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <ClerkProvider>
    
    <html lang="en">
      <body>
        
        
        {children}
        
        </body>
    </html>
    </ClerkProvider>
  );
}
