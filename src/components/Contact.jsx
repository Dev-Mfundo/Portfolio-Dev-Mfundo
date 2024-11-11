import { memo } from 'react

function Contact(){
    return(
    <div id="contact" className="contact">
        <h2>Contact Me</h2>
        <form>
            <input type="text" name="name" placeholder="Name" required=""/>
            <input type="email" name="email" placeholder="Email" required=""/>
            <textarea name="message" rows="5" placeholder="Message" required=""></textarea>
            <input type="submit" value="Send Message"/>
        </form>
    </div>
    )
}
export default memo(Contact);
