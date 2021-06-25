import './ErrorMessage.css';

function ErrorMessage({children}){
    if(!children){
        return null; 
    }else{
        return <div className="error-message">{children}</div>
    }
}
export default ErrorMessage;