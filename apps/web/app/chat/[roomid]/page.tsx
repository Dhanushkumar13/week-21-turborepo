'use client'

import TextInput from "@repo/ui/text-input"

export default function ChatApp(){
    return(
        <div style={{
            display: "flex",
            width: '100vw',
            height: "100vh",
            justifyContent: "space-between",
            flexDirection: "column"
        }}>
            <div>
                Chat Room
            </div>
            <div>
                <TextInput size="small" placeholder="Chat here" onChange={()=>{
                    console.log('chat rendered')
                }}></TextInput>
            </div>
        </div>
    )
}