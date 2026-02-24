import {Avatar} from "antd";
import Title from "antd/lib/typography/Title";
import styles from "./ChatItem.module.css"

export function ChatItem({name, lastMessage}: {name: string, lastMessage?: string}) {
    return (
        <div className={styles.chatItem} >
            <Avatar></Avatar>
            <div>
                <Title level={5}>{name}</Title>
                <span>{lastMessage}</span>
            </div>
        </div>
    )
}