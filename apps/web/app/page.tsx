'use client'

import TextInput from '@repo/ui/text-input'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

    }}>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}>
        <TextInput
         onChange={()=>{
          alert('hi')
        }} 
          size='big' placeholder='Enter name'>
            Hello
        </TextInput>
        <button onClick={()=>{
          router.push('/chat/123')
        }}>Join room</button>
      </div>
    </div>
  );
}
