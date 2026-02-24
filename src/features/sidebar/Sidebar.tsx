import { List, Avatar, Typography } from "antd"
import {MonkeyLogo} from "./Logo";
import {ChatItem} from "./ChatItem";

const { Text, Title } = Typography

export function Sidebar() {
    return (
        <div>
            <Title>BIBIZYAMGRAM <MonkeyLogo/></Title>
            <div>
                <ChatItem name={'тёмко сифон'} lastMessage={'пасвани мни'}/>
                <ChatItem name={'пумко лафилас'} lastMessage={'я пукнул к сашалени...'}/>
                <ChatItem name={'панчо'} lastMessage={'миня пьют макакке'}/>
                <ChatItem name={'пиртунишко'} lastMessage={'хачу коли'}/>
                <ChatItem name={'рап карпараци'} lastMessage={'гдэ маи пермии'}/>
            </div>
        </div>
    )
}