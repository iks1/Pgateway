"use client"
import {useBalance} from "@repo/store/src/hooks/useBalance"

export default function Test(){
    const balance = useBalance();
    return(
        <div>
            hi there {balance}
        </div>
    )
}