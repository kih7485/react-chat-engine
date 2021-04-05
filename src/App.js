import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

export default function App() {
    if(!localStorage.getItem('username')) return <LoginForm/>
    return (
        <div>
            <ChatEngine
                height="100vh"
                projectID="19224a48-1225-4655-b488-e474e2e079fb"
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/> }
            />
        </div>
    )
}
