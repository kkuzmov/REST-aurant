import { style } from './Notifications.css';

function Notification({children}){
    if(!children){
        return null; 
    }else{
        return <div className="notification-message">{children}</div>
    }
}
export default Notification;